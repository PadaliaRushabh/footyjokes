
/*
 * GET home page.
 */
var api = new (require('../controllers/DatabaseAPI/api.js').api);


exports.index = function(req, res){
    api.ViewAllPosts(function(err , result){
        if(!err)
            res.render('index', { title: 'Express' , box_obj:result });
    })
};
