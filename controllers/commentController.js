//import models
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic

exports.createComment = async (req, res) => {
    try{
        //fetched data from req body
        const {post, user, body} = req.body;
        //create comment object
        const comment = new Comment({
            post,user,body
        });

        //save new comment into database
        const savedComment = await comment.save();

        //find post by ID, add new comment to its comment array
        const updatedPost = await Post.findByIdAndUpdate(post,{$push: {comments: savedComment._id},new:true} )
                .populate("comments") //populate the comments array with comment document
                .exec();

        res.json({
            post:updatedPost,
        });

    }
    catch(err){
        return res.status(500).json({
            error:"Error while Creating Comment",
        });
    }
}