const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require("crypto")

var userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        required:true,
        unique:true,
    },
    role:{
        type:String,
        required:true,
    },
    address:{
        type:String,
    },
    rating:{
        type:Number,
    },
    isBlocked:{
        type: Boolean,
    },
    // followers:{
    //     type: Array,
    //     default: [],
    // },
    // followings:{
    //     type: Array,
    //     default: [],
    // },
    isFollowing:{
        type: Boolean,
        default: false,
    },
    notFollowing:{
        type: Boolean,
        default: false,
    },
    followers:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    followings:{
        type: mongoose.Schema.Types.ObjectId,
        default: "User",
    },
},{ timestamps: true });

//Export the model

userSchema.pre("save", async function(next) {
    if(!this.isModified("password")) next()
    const salt = bcrypt.genSaltSync(10)
    this.password = bcrypt.hash(this.password,salt)
})

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
}

userSchema.methods.createPasswordResetToken = async function() {
    const resetToken = crypto.randomBytes(32).toString("hex")
    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest('hex')
    this.passwordResetExpires=Date.now() + 30 * 60 * 1000 // 10 minnuutes
    return resetToken;   
}
module.exports = mongoose.model('User', userSchema);