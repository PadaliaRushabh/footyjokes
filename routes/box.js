//require our Database API
var api = new (require('../controllers/DatabaseAPI/api.js').api);

/*
use the ViewAllPosts function from Database API to fetch all posts in Database
and if no error then render with passing the result variable in index.jade
*/
exports.Boxes = function(req, res){
    
    var count = 0;
    var refresh = req.body.refresh;
    var refresh_bool = refresh ==="true" ? true : false

    console.log(typeof refresh_bool)
    console.log("bool:" + refresh_bool)
    if(typeof req.session.count === 'undefined' || refresh_bool == true ){
        req.session.count = 0;
        console.log("reset:")
        
    }
    console.log(req.session.count)
    count = req.session.count;
    api.ViewAllPosts(Number(count) , function(err , result){
        if(!err){
            req.session.count = Number(result.length) + Number(req.session.count);
            
            res.render('box', {box_obj:result});
       }
   })
};
