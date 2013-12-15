var api = new (require('../controllers/DatabaseAPI/api.js').api);

exports.Login = function(req, res){

    var login_id = req.body.login_id;
    api.login(login_id , function(err){
        
        res.end();
    });


};
