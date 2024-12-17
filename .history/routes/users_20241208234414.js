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


//##// Project //##//

var mongoose = require('mongoose');
//const post  = require('./post');

mongoose.connect('mongodb://127.0.0.1:27017/mybook');

var mypractise = new mongoose.Schema({
  username: String,
  password: Number,

  Posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],

  dp: String,

  fullname: String,

  email: String,

});

//userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", mypractise)



