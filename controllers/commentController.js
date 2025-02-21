const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//business logic 
exports.createComment = async(req, res) => {
       
    try{
          // fetch data  from request body 
          const {post , user , body } = req.body;
          //create a comment oject 
          const comment = new Comment({
            post , user, body
          });
         // save the new comment into the database
         const savedComment = await comment.save();


         //find the post by Id , add the new comment to its comment array 
         const updatedPost = await Post.findByIdAndUpdate(post, { $push: {comments:savedComment._id}}, {new:true}).populate("comments").exec()
       
         res.json({
            post: updatedPost,
         })
        

    }catch(error){
            return res.status(500).json({
                error : "Error While creating comment",
            })
    }

}