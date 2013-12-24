/*
    DESCRIPTION: Display all posts
*/

//require our Database API
var api = new (require('../controllers/DatabaseAPI/api.js').api);

/*
use the ViewAllPosts function from Database API to fetch all posts in Database
and if no error then render with passing the result variable in index.jade
*/
exports.index = function(req, res){
    /*api.ViewAllPosts("723354327" , function(err , result , likes_post){
        if(!err)
            //req.session.username = "Rushabh Padalia";
            
            /*api.getLikeStatus2("", "" , function(){
            
               
            });
            //console.log( likes_post);
            res.render('index', { title: 'FootyJokes' , box_obj:result  , likes_post:likes_post});
           
    })*/
    //req.session.username = "Rushabh"
    //console.log(req.session.username)
    //req.session.user_name = "Rushabh"
     res.render('index', { title: 'FootyJokes'});
};
