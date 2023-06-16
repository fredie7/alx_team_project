const mongoose = require("mongoose");

let postSchema = new mongoose.Schema({
    posts:[
        {
            post:{ 
                type:mongoose.Schema.Types.ObjectId,
                ref: "USer",
            },
            description: String,
        },
    ],
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
},{ timestamps: true })

module.exports = mongoose.model("Posts", postSchema);