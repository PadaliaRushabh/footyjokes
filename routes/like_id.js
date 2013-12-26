/*
    DESCRIPTION: Display all posts
*/

//require our Database API
var api = new (require('../controllers/DatabaseAPI/api.js').api);

/*
use the ViewAllPosts function from Database API to fetch all posts in Database
and if no error then render with passing the result variable in index.jade
*/
exports.LikeID = function(req, res){

    var user_id = req.body.user_id;
    api.getLikeId(req.session.id , function(err , id){
    
        res.end(JSON.stringify(id));
    });
};
