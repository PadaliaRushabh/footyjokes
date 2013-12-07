var api = new (require('../controllers/DatabaseAPI/api.js').api);

exports.LikePost = function(req, res){
    
    var id = req.body.id; 
    var like = req.body.like;
    
    //console.log(id);
    //console.log(like);
    api.LikePost(id , function(err , output){

        if(err) console.log(err);
        
        api.updateLikeStatus(id , function(err , like_status,rows){
            api.getLike(id , function(err , like){
            
                var likeObj = {"like": like , "like_status": like_status}
                //console.log("like" + like);
                res.end(JSON.stringify(likeObj));
            });
        });
        
        //console.log("output" + output);
    });
}; 
