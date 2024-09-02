const mongoose = require("mongoose");


//route handler
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    body:{
        type:String,
        require:true,
    },
    like:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Likes",
    }],
    comments:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Comment",
    }]
});


//exports
module.exports = mongoose.model("Post", postSchema);
