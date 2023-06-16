const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")
const { generateToken } = require("../config/generateToken")

const signup = asyncHandler(async (req,res)=>{
    const {email} = req.body
    const foundUser = await User.findOne({ email })
    if (!foundUser) {
        const user = await User.create(req.body)
        res.status(201).json(user)
    }else{
        res.status(400).json({error: "user already exists"})
    }
})

const signin = asyncHandler(async (req,res)=>{
    const { email, password } = req.body
        const foundUser = await User.findOne({ email })
        console.log(await foundUser.isPasswordMatched(password))
        if (foundUser) {
            res.json({
                _id: foundUser?._id,
                firstName: foundUser?.firstName,
                lastName: foundUser?.lastName,
                email: foundUser?.email,
                mobile: foundUser?.mobile,
                token: generateToken(foundUser?._id)
            })
        }else{
            throw new Error("Invalid Credentials")
        }
        // foundUser ? console.log("found") : console.log("not found")
})

const signin_admin = asyncHandler(async(req,res)=>{
    const { email,password } = req.body;
    const foundUser = await User.findOne({email});
    if(foundUser.role !== "admin") throw new Error("user not an admin")
    if (foundUser.role === "admin" && (await foundUser.isPasswordMatched(password))) {
        res.json({
            _id: foundUser?._id,
            firstName: foundUser?.firstName,
            lastName: foundUser?.lastName,
            email: foundUser?.email,
            mobile: foundUser?.mobile,
            token: generateToken(foundUser?._id)
        })
    }else{
        throw new Error(error);
    }
})

const getUsers = asyncHandler(async(req,res)=>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        throw new Error(error)
    }
})

const getUser = asyncHandler(async(req,res)=>{
    const { id } = req.body;
    try {
        const user = await User.findById(id);
        res.status(200).json({ user })
    } catch (error) {
        throw new Error(error);
    }
})

const deleteUser = asyncHandler(async(req,res)=>{
    const { id } = req.body;
    try {
        const user = await User.findByIdAndDelete(id);
        res.status(200).json({ message: "user deleted" })
    } catch (error) {
        throw new Error(error);
    }
})

const updateUser = asyncHandler(async(req,res)=>{
    const { _id } = req.user;
    try {
        const user = await User.findByIdAndUpdate(_id, {
            firstName: req?.body?.firstName,
            lastName: req?.body?.lastName,
            email: req?.body?.email,
            mobile: req?.body?.mobile,
        },{ new:true })
        res.status(200).json(user);
    } catch (error) {
        throw new Error(error);
    }
})

const blockUser = asyncHandler(async(req,res)=>{
    const { id } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, {
            isBlocked: true,
        },{ new: true })
        res.status(200).json({ message: "user blocked" });
    } catch (error) {
        throw new Error(error);
    }
})

const unblockUser = asyncHandler(async(req,res)=>{
    const { id } = req.body;
    try {
        const user = await User.findByIdAndUpdate(id, {
            isBlocked: false,
        },{ new: true });
        res.status(200).json({ message: "user unblocked" });
    } catch (error) {
        throw new Error(error);
    }
})

const followUser = asyncHandler(async(req,res)=>{
    const paramID = req.params.id;
    try {
        const paramUser = await User.findById(paramID);
        const userID = req?.user?._id;
        const isFollowing =  await User.isFollowing;
        // const following = paramUser.followings.find(id => id?.toString() === userID?.toString());
        const following = paramUser.followers.find(id => id?.toString() === userID?.toString());
        if (following) {
            await paramUser.findByIdAndUpdate(paramID, {
                $pull : { followers: userID },
                following: false,
            },{ new:true })
            res.json(paramUser)
        }
        if (isFollowing) {
            await paramUser.findByIdAndUpdate(paramID, {
                $pull: { followings: userID },
                notFollowing: false,
            },{ new: true })
            res.json(paramUser)
        }else{
            await paramUser.findByIdAndUpdate(paramID, {
                $push: { followings: userID },
                following: true,
            },{ new: true })
            res.json(paramUser)
        }
    } catch (error) {
        throw new Error(error);
    }
})
module.exports = { signup, signin, getUsers, getUser, deleteUser, updateUser, blockUser, unblockUser, followUser, signin_admin };