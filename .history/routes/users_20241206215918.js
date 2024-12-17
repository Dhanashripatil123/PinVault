 const mongoose = require('mongoose');
 const plm = require('passport-local-mongoose');

 mongoose.connect('mongodb://127.0.0.1:27017/database')

const userSchema = new mongoose.Schema({
  secret: String, 
  username: String,
  password: String,
 });

// userSchema.plugin(passportLocalMongoose);  // Adds authenticate(), register() etc.

// const user = mongoose.model('User', userSchema);

// module.exports = user;
