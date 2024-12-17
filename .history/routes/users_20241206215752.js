 const mongoose = require('mongoose');
 const plm = require('passport-local-mongoose');

 mongoose.connect('mongodb://0.0.0.1:27017/databa')

// const userSchema = new mongoose.Schema({
//   username: String,
//   secret: String,  // Optional: If you want to store some secret or other data
// });

// userSchema.plugin(passportLocalMongoose);  // Adds authenticate(), register() etc.

// const user = mongoose.model('User', userSchema);

// module.exports = user;
