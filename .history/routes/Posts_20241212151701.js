var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mybook');

var postSchema = mongoose.Schema({
                                                  postText: String,
                                                  user: {
                                                                                                    type: mongoose.Schema.Types.ObjectId,
                                                                                                    ref: 'user'
                                                  },

                                                  createdAt: {
                                                                                                    type: Date,
                                                                                                    default: Date.now,
                                                  },
                                                  likes: {
                                                                                                    Type: Array,
                                                                                                    default: []
                                                  },
});

module.exports = mongoose.model('Post', postSchema);



// var mongoose = require('mongoose');
// // var plm = require('passport-local-mongoose');

// //mongoose.connect('mongodb://127.0.0.1:27017/mybook');

// var mongoose = require('mongoose');
// const post  = require('./post');

// mongoose.connect('mongodb://127.0.0.1:27017/mybook');

// var mypractise= mongoose.Schema({
//   username: String  ,
//   password: Number ,

//   posts:[{
//     type:mongoose.Schema.Types.ObjectId,
//     ref :"post"
//   }],
//   dp:String,
//   email:String,
//   fullname:String

// });
// mypractise.plugin(plm);
// module.exports = mongoose.model("user",mypractise )



