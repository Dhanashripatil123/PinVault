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
router.get('/Register', function(req, res, next) {
  var userdata = new user({
    username:String,
    secret
  })
});
router.get('/', function(req, res, next) {
  
});

module.exports = router;
