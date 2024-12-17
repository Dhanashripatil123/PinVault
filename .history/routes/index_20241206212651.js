var express = require('express');
var router = express.Router();
var usermodel = require('./users')
const passport = require('passport');
const localStrategy = require('passport-local');

passport.use(new localStrategy(usermodel.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/profile',isLoggedIn, function(req, res, next) {
  res.render('my new car');
});

router.get('/Register', function(req, res) {
  var userdata = new usermodel({
    username:String,
    secret:String,
  });
 user.register(username,req.body.password)
 .then(function(registereuser){
      passport.authenticate("local")(req,res,function(){
        res.redirect('./profile')
      })
 })
});

router.post("/login",passport.authenticate("local",{
  successRedirect: " /profile",
   " /login"
}),function(req,res){})

router.get("/logout",function(req,res,next){
     req.logout(function(err){
      if (err) {return next(err);}
      res.redirect('/');
     });
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}

module.exports = router;
