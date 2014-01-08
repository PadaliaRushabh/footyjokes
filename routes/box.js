//require our Database API
var api = new (require('../controllers/DatabaseAPI/api.js').api);

/*
use the ViewAllPosts function from Database API to fetch all posts in Database
and if no error then render with passing the result variable in index.jade
*/
exports.Boxes = function(req, res){
    
    var count = 0;
    if(typeof req.session.count === 'undefined'){
        req.session.count = 0;
        
    }
    count = req.session.count;
    api.ViewAllPosts(Number(count) , function(err , result){
        if(!err){
            req.session.count = Number(result.length) + Number(req.session.count);
            
            res.render('box', {box_obj:result});
       }
   })
};
