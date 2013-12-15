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
    api.ViewAllPosts(function(err , result){
        if(!err)
            //req.session.username = "Rushabh Padalia";
            res.render('index', { title: 'FootyJokes' , box_obj:result });
    })
};
