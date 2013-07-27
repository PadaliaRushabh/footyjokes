/*
    DESCRIPTION: Database related unit test
*/

var Post = require('../models/models.js')
  , fs = require('fs')
  , Log = require('log')// to log our unit test
  , log = new Log('info', fs.createWriteStream('log' , {'flags': 'a'})) //append the log to a file name log
  , api = new (require('../controllers/DatabaseAPI/api.js').api);


/*Database interaction
api.ViewAllPosts(function(err , result){
    if (!err)
        log.info('view blog test passed');
    else
        log.info('view blog test failed');
});
*/

/*retrive sample post*/
/*
api.ViewAllPosts(function(err , result){
    if (!err){
        if (result[0].author == "Rushabh Padalia")
            log.info('author test passed');
            console.log('author test passed');
    }
    else{
        log.info('author test failed');
        console.log('author test failed');

    }
})

*/

var data =  {
    author   :"Rushabh Padalia"
    ,article_image: ["/images/4.jpg"]
    ,date: new Date()
    ,tag: ["football" , "Singapore"]
    ,title:"WooW part 2!!"
    ,content:"He plays like me"
    ,like:0
    ,comment:[
        {
            by:"hrishikesh"
            ,comment:"I am commenting"
            ,like:0
            ,date:new Date()
         }
    ]
}

try{
    api.SavePost(data,function(err,blog){
        if(err){
            logger("Save to Database test failed");
        }else{
            logger("Save to Database test passed");
        }
    })
}
catch(err){
     logger("Save to Database test failed");
}


function logger(msg){
    console.log(msg);
    log.info(msg);
}
