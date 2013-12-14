//require our Database API
var api = new (require('../controllers/DatabaseAPI/api.js').api);

/*
use the ViewAllPosts function from Database API to fetch all posts in Database
and if no error then render with passing the result variable in index.jade
*/
exports.Boxes = function(req, res){

    var count = req.body.count;
    api.ViewAllPosts(function(err , result){
        if(!err)
            console.log(result);
            res.render('box', {box_obj:result });
   })
};
