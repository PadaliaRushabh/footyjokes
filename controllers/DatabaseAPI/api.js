var Post = require('../../models/models.js')
    ,mongoose = require('mongoose');

mongoose.connect('mongodb://footyjokes:footyjokes@ds035428.mongolab.com:35428/footyjokes');

api = function(){};

api.prototype.ViewAllPosts = function(callback){
    Post.find({},function(err , posts){
      callback(err , posts);
    })
};


api.prototype.SavePost = function(post_to_save , callback){

      new Post(post_to_save).save(function(err){
      callback(err);
   });
};





exports.api = api; 
