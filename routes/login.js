var api = new (require('../controllers/DatabaseAPI/api.js').api);

exports.Login = function(req, res){

    var id = req.body.login_id;
    var name = req.body.login_name;
    //var name = "Rushabh Padalia"
    var type = req.body.type;
    
    var post_to_save = {
            login_id:id
            ,type:type
    }
   
    req.session.user_name = name ;
    //console.log("User Name "  + req.session.user_name);
    /*api.login(post_to_save, function(err){
        
        res.end();
    });*/
    
    res.end();
};
