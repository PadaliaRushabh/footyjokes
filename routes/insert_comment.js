var api = new (require('../controllers/DatabaseAPI/api.js').api);

exports.InsertComment = function(req, res){

    var id = req.body.id;
    var comments = req.body.comment;
    
    var comment_obj = {
        by : req.session.username,
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
