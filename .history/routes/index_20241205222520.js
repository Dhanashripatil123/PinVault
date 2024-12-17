var express = require('express');
var router = express.Router();
var user = require('./users')
const passport = require('passport');
const localStrategy = require('passport-local');

passport.use(new localStrategy(user.authenticate()));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/profile', function(req, res, next) {
  res.render('my new car');
});

router.get('/Register', function(req, res) {
  var userdata = new user({
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

router.post("/login",passport.authenticate())


module.exports = router;
