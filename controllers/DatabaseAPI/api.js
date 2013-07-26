/*
    DESCRIPTION: Database functions(API) to be used in the entire project
    TODO: Other common operations like update, delete, like, comments, etc
*/

// require models and mongoose to interact with database
var Post = require('../../models/models.js')
    ,mongoose = require('mongoose');

//connect to our cloud database server
mongoose.connect('mongodb://footyjokes:footyjokes@ds035428.mongolab.com:35428/footyjokes');

api = function(){};

//fetch all blogs from database
api.prototype.ViewAllPosts = function(callback){
    Post.find({},function(err , posts){
      callback(err , posts);
    })
};

//Save a blog to database
api.prototype.SavePost = function(post_to_save , callback){
      new Post(post_to_save).save(function(err){
      callback(err);
   });
};

//so that we can require API in different file
exports.api = api; 
