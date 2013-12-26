/*
    DESCRIPTION: Database functions(API) to be used in the entire project
    TODO: Other common operations like update, delete, like, comments, etc
*/
var ObjectId = require('mongoose').Types.ObjectId;
// require models and mongoose to interact with database
var Post = require('../../models/models.js')
    ,Login = require('../../models/user.js')
    ,mongoose = require('mongoose');

//connect to our cloud database server
mongoose.connect('mongodb://footyjokes:footyjokes@ds035428.mongolab.com:35428/footyjokes');

api = function(){};
//fetch all blogs from database
api.prototype.ViewAllPosts = function(callback){
    Post.find({}).sort({date:-1}).limit(25).execFind(function(err , posts){
        callback(err , posts)
        
    });
};
//Post.find({} , {"msg":{$slice: -2}}).sort({date:-1}).limit(25).....
// db.person.find({} , {_id:1}).sort({_id:-1}).skip(1)
api.prototype.getLikeId = function(user_id , callback){
    if(user_id != null || user_id!= undefined || user_id!= "")
            Post.find({'like_users':user_id} , {"_id":1}).execFind(function(err , id){
                callback(err , id);
        });
};

//Save a blog to database
api.prototype.SavePost = function(post_to_save , callback){
      new Post(post_to_save).save(function(err){
      callback(err);
   });
};

//get one post
api.prototype.GetPost = function(id , callback){
  Post.findOne({_id : new ObjectId(id)} , function(err , post){
    if(err){
       console.log(err);
    }
    else{
        callback(err , post);
    }
  });
};

//get all comment of one post
/*api.prototype.GetPostComment = function(id , callback){

    //if(err) console.log(err);
    GetPost(id , function(err , post){
        callback(err , post.comment)
    });
};*/

//Like post
api.prototype.LikePost = function(id , user_id,callback){

    getLikeStatus(id , user_id,function(err , like_found){
        /*if(like_status == 0)
            var likeStatus = like_status.toString() === "true" ? true : false;
        else
            var likeStatus = false;*/
            //console.log(like_found)
        //var likeStatus = like_found == 1 ? true : false;
        if(like_found == 0){
            Post.update({_id : new ObjectId(id)} , {$inc:{like:1}} , function(err,post){
                Post.findOne({_id : new ObjectId(id)} , function(err , post){
                    console.log(post)
                    post.like_users.push(user_id);
                    post.save(function(err){
                        callback(err ,like_found,post);
                    });
                
                });   //callback(err , output);   
            });
        }
        else{
            UnlikePost(id , user_id, function(err , post){
                 callback(err , like_found,post);
            });
        }
    });
};

//Unlike post
var UnlikePost = function(id , user_id,callback){
    Post.update({_id : new ObjectId(id)} , {$inc:{like:-1} ,$pull:{like_users:user_id}} , function(err,output){
        
        callback(err , output);
    });
};

//Get Like
api.prototype.getLike = function(id , callback){
    Post.findOne({_id : new ObjectId(id)} , function(err , post){
            
        callback(err , post.like);
    });
};

//Get Like Status
/*var getLikeStatus = function(id , callback){
    Post.findOne({_id : new ObjectId(id)} , function(err , post){
            
        callback(err , post.like_status);
    });
};*/

//Get Like Status
var getLikeStatus = function(id , user_id,callback){
    Post.count({_id : new ObjectId(id) , 'like_users':user_id}  , function(err , count){
            
        callback(err , count);
        //console.log(post)
    });
};


api.prototype.updateLikeStatus = function(id , callback){  
    getLikeStatus(id , function(err , like_status){
        if(err) console.log(err)
        
        var query = {_id : new ObjectId(id)};
        var updated_like = !like_status;
        Post.update(query , {$set: {like_status:updated_like}} , function(err , rowsAffected){
            callback(err , updated_like ,rowsAffected);
        });
    });
};

//Add Comment to post
api.prototype.AddComment = function(id , comment , callback){
    //console.log(id);
    //console.log(comment);
  Post.findOne({_id : new ObjectId(id)} , function(err , post){

    if(err){
       callback(err);
    }
    else{
      
      post.comment.push(comment);
      post.save(function(err){
        callback(err , comment);
      });
    }
  });
};

api.prototype.login = function(login_id , callback){
    Login.findOne(login_id , function(err , user){
    
        console.log(user)
       
        if(user == undefined || user == ""){
            new Login(login_id).save(function(err){
                callback(err , user);
            })
        }  else {
             callback(err , user);
        }
        
    });
};

//so that we can require API in different file
exports.api = api; 
