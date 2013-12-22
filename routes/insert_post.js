var api = new (require('../controllers/DatabaseAPI/api.js').api);
var path = require('path')
    ,fs = require('fs');


exports.InsertPost = function(req, res){ 

    var temppath = req.files.pic.path;
    var extension = path.extname(req.files.pic.path);
    var imagename = Math.random();
    var targetpath = path.dirname(__dirname)+ "/public/images/" + imagename + extension;
    //console.log(req.session.username);
    fs.readFile(temppath , function(err, data){
        if(err) console.log(err); 
    
        fs.writeFile(targetpath , data , function(err){
        
            if(err) console.log(err);
        
            var data =  {
            login_id: req.body.login_id
            ,author:req.session.username
            ,article_image: ["/images/" + imagename + extension]
            ,date: new Date()
            ,tag: []
            ,title:req.body.header
            ,content:req.body.content
            ,like:0
            ,like_users:[]  
            ,comment:[
                  
                ]
            }
            api.SavePost(data , function(err){
                res.redirect('/');
            });
        });
    });
    
};
