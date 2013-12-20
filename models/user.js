var mongoose = require('mongoose');

var Login = new mongoose.Schema({
      login_id:String
      ,type:String
});
   
module.exports = mongoose.model('Login', Login); 
