var api = new (require('../controllers/DatabaseAPI/api.js').api);

exports.Login = function(req, res){

    var id = req.body.login_id;
    
       var post_to_save = {
            login_id:id
        }
    api.login(post_to_save, function(err){
        
        res.end();
    });


};
