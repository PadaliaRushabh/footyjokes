
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , insert = require('./routes/insert_post')
  , like = require('./routes/like_post')
  , likeID = require('./routes/like_id')
  , comment = require('./routes/comment')
  , insertcomment = require('./routes/insert_comment')
  , boxes = require('./routes/box')
  , login = require('./routes/login')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser()); // before router
app.use(express.session({ secret:"aaa"})); //before router 
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));



/*function tokenLogin (req, res) {
    req.session.username = "Rushabh Padalia";
}*/
// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
  app.locals.pretty = true;
}

app.get('/',routes.index);
app.post('/InsertPost' , insert.InsertPost);
app.post('/LikePost' , like.LikePost);
app.post('/LikeID' , likeID.LikeID);
app.post('/Comment' , comment.Comment);
app.post('/InsertComment' , insertcomment.InsertComment);
app.post('/Boxes' , boxes.Boxes);
app.post('/Login' , login.Login);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
