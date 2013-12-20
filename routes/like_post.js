var api = new (require('../controllers/DatabaseAPI/api.js').api);

exports.LikePost = function(req, res){
    
    var id = req.body.id; 
    var user_id = req.body.user_id;
    
    //console.log(id);
    //console.log(like);
    api.LikePost(id , user_id,function(err , like_found,output){

        if(err) console.log(err);
            // var likeObj = {"like": like , "like_status": like_status}
           //  res.end(JSON.stringify(like_found));
        //api.updateLikeStatus(id ,user_id ,function(err , like_status,rows){
            api.getLike(id ,function(err , like){
            
                var likeObj = {"like": like , "like_found": like_found}
                //console.log("like" + like);
                
               
                res.end(JSON.stringify(likeObj));
            });
        //});
        
        //console.log("output" + output);
    });
}; 
