var api = new (require('../controllers/DatabaseAPI/api.js').api);

exports.Login = function(req, res){

    var id = req.body.login_id;
    var name = req.body.login_name;
    
    var post_to_save = {
            login_id:id
    }
    
    req.session.username = name ;
    api.login(post_to_save, function(err){
        
        res.end();
    });
};
