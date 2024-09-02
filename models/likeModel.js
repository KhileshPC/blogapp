 const mongoose = require("mongoose");


 //Route handler
const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        require:true,
    },

});

module.exports = mongoose.model("Like", likeSchema);