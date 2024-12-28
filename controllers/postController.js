const Post = require("../models/postModel")

exports.createPost = async(req, res) =>{
   
    try{
         // fetch data from request body 
        const {title, body} = req.body;
           

        // create a post object
        const post = new Post({
            title , body,
        });

        // save the post to the database 
        const savedPost = await post.save();

       res.json({
         post: savedPost,
       })


    }catch(error){
            
     return   res.status(400).json({
            error : "Error while creating post"
        })

    }

}

exports.getAllPosts = async(req, res) => {

    try{
            const post = await Post.find();

            res.json({
                post,
            })

    }catch(error){
        res.status(400).json({
            error : "Error while creating post"
        })

    }
}