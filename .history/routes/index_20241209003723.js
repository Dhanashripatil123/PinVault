// var express = require('express');
// var router = express.Router();
// var usermodel = require('./users')
// const passport = require('passport');
// const localStrategy = require('passport-local');

// passport.use(new localStrategy(usermodel.authenticate()));

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });

// router.get('/profile',isLoggedIn, function(req, res) {
//   res.render('profile');
// });

// router.get('/register', function(req, res) {
//   var userdata = new usermodel({
//     username:req.body.username,
//     secret: req.body.secret,
//   });
//   usermodel.register(userdata, req.body.password)
//       .then(function(registereuser){
//         passport.authenticate("local")(req,res,function(){
//         res.redirect('/profile');
//       })
//  })
// });

// router.post("/login",passport.authenticate("local",{
//   successRedirect: "/profile",
//   failureRedirect: "/",
// }),function(req,res){})

// router.get("/logout",function(req,res,next){
//      req.logout(function(err){
//       if (err)  return next(err);
//       res.redirect("/");
//      })
// });

// function isLoggedIn(req,res,next){
//   if(req.isAuthenticated()){
//     return next();
//   }
//   res.redirect("/");
// }

// module.exports = router;



/**************************************//*******##// Project //##/*******************************************/

var express = require('express');
var router = express.Router();
var usermodel = require("./users")
var postmodel = require("./Posts");
const passport = require('passport');
const localStrategy = require('passport-local');

passport.use(new localStrategy(usermodel.authenticate()));


router.get("/",function(req,res){
     res.send("index",{ title:'Express'});
})

router.post('/register',function(req,res){
  const { username, fullname, email } = req.body
  const userdata = new usermodel({ username, fullname, email});
  usermodel.register(userdata, req.body.passsword)
  .then(function(){
    passport.authenticate("local")(res,req,function(){
      res.redirect("/profile")
    })
  })
});
      
      
router.post('/login',passport.authenticate("local",{
  successRedirect: "/profile",
  failureRedirect: "/"
}),function(req,res){
});

router.get("/logout",function(req,res){
       req.logOut(function(err){
        if (err) {return next(err);}
        res.redirect('/');
       })
})

function isLoggedIn(){
  if(req,isAuthentic.next();
    res.redirect("/profile")
}
      
      



module.exports = router;
