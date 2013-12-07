var api = new (require('../controllers/DatabaseAPI/api.js').api);

exports.Comment = function(req, res){

    var id = req.body.id;
    
    api.GetPost(id , function(err , postObj){
        if(err) console.log(err);
        
        console.log(postObj);
        //res.end();
        res.end(JSON.stringify(postObj));
    });
};
