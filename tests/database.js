var Post = require('../models/models.js')
  , fs = require('fs')
  , Log = require('log')
  , log = new Log('info', fs.createWriteStream('log' , {'flags': 'a'}))
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



/*

  var data =  {
      author   :"Rushabh Padalia"
      ,article_image: ["/images/me.jpg"]
      ,date: new Date()
      ,tag: ["politics" , "war"]
      ,title:"This is my Second post"
      ,content:"This is my first post, let's see if it works"
      ,likes:0
      ,comment:[
         {
            by:"hrishikesh"
            ,comment:"I am commenting"
            ,date:new Date()
         }
      ]

   }


   api.SavePost(data,function(err,blog){
      if(err)
         console.log("Error in saving");
      })

      */
