const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");

const authMiddleware = asyncHandler(async(req,res)=>{
    let token;
    if (req?.body?.headers?.authorization.startsWith("Bearer")) {
        const token = req.body.authorization.split(" ")[1]
        try {
            if (token) {
                const decoded = jwt.verify(token, process.env.SECRET);
                const user = await User.findOne(decoded?.id);
                req.user = user;
                next();
            }    
        } catch (error) {
            throw new Error("user not authorized");
        }
    }else{
        throw new Error("not authorized - header has no token");
    }
})

const isAdmin = asyncHandler(async(req,res)=>{
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (user.role !== "admin") {
        throw new Error("You aren't an admin");
    }else{
        next()
    }
})

module.exports = { authMiddleware, isAdmin };