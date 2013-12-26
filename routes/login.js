var api = new (require('../controllers/DatabaseAPI/api.js').api);

exports.Login = function(req, res){

    var id = req.body.login_id;
    var name = req.body.login_name;
    var type = req.body.type;
    //var name = "Rushabh Padalia"
    var type = req.body.type;
    
    var post_to_save = {
            login_id:id
            ,type:type
    }
   
    req.session.user_name = name ;
    req.session.id = id ;
    req.session.login_type = type ;
    //console.log("User Name "  + req.session.user_name);
    api.login(post_to_save, function(err , user){
        
        res.end();
    });
    
    //res.end();
};
