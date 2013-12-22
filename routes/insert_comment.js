var api = new (require('../controllers/DatabaseAPI/api.js').api);

exports.InsertComment = function(req, res){

    var id = req.body.id;
    var comments = req.body.comment;
    var image = req.body.user_image;
    console.log(req.session.username)
    
    var comment_obj = {
        login_id: req.body.login_id,
        by : req.session.username,
        user_image:image
        comment:comments,
        like:0,
        like_status:false,
        date:new Date()
    };
    api.AddComment(id , comment_obj , function(err, comment){

        if(err) console.log(err);
        
        res.end(JSON.stringify(comment));
    });
};
