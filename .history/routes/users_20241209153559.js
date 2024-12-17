//  const mongoose = require('mongoose');
//  const plm = require('passport-local-mongoose');

//  mongoose.connect('mongodb://127.0.0.1:27017/database')

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   secret: String, 
//  });

// userSchema.plugin(plm);  // Adds authenticate(), register() etc.

// module.exports = mongoose.model('usermodel', userSchema);






var mongoose = require('mongoose');
var plm =require("passport-local-mongoose");


mongoose.connect('mongodb://127.0.0.1:27017/nayaclone');

var mypractise = new mongoose.Schema({
  username: String,
  password: String,

  Posts:[{
     type: mongoose.Schema.Types.ObjectId, 
     ref: 'Post' 
    }],

  dp: String,

  fullname: String,

  email: String,

});

mypractise.plugin(plm);

module.exports = mongoose.model("user", mypractise)



