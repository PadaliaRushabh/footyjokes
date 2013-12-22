/*
    DESCRIPTION: MongoDB models for FootyJokes.
    TODO: MongoDB model for user account.
*/

    var mongoose = require('mongoose');

    /* To store comments*/
    var Comment = new mongoose.Schema({
       login_id:String
      ,by:String
      ,user_image:String
      ,comment:String
      ,like:Number
      ,like_users:[String]
      ,date:Date
   });

    /*To store the post content*/
    var Post = new mongoose.Schema({
       login_id:String
      ,author:String
      ,article_image:[String]
      ,date:Date
      ,tag:[String]
      ,title:String
      ,content:String
      ,like:Number
      ,like_users:[String]
      ,comment:[Comment] //Embedding comments in post becasue comments are part of blog post
   });

    module.exports = mongoose.model('Post', Post); // So that they are accessable in other files 
