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


var express = require('express');
var router = express.Router();
var usermodel = require("./users");
var postmodel = require("./Posts");
const passport = require('passport');
const localStrategy = require('passport-local');

// Configure passport with local strategy using usermodel authentication
passport.use(new localStrategy(usermodel.authenticate()));

// Home route
router.get("/", function (req, res) {
  res.render("index", { title: 'Express' });
});

// Login route
router.get("/login", function (req, res) {
  res.render('login');
});

// Feed route (assuming 'feed' template exists)
router.get("/feed", function (req, res) {
  res.render('feed');
});

// Profile route, protected by isLoggedIn middleware
router.get('/profile', isLoggedIn, function (req, res, next) {
  res.render('profile');
});

// Registration route
router.post('/register', function (req, res) {
  const { username, email, fullname } = req.body;
  const userdata = new usermodel({ username, email, fullname });

  // Register the user
  usermodel.register(userdata, req.body.password)
    .then(function () {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/profile"); // Redirect to profile after successful registration
      });
    })
    .catch(function (err) {
      console.error("Registration failed:", err);
      res.redirect('/register'); // In case of error, redirect to register page
    });
});

// Login route with passport authentication
router.post('/login', passport.authenticate("local", {
  successRedirect: "/profile", // Redirect to profile if login is successful
  failureRedirect: "/login" // Redirect back to login if login fails
}), function (req, res) {
  // This callback is not necessary because the redirect happens through passport
});

// Logout route
router.get("/logout", function (req, res) {
  req.logout(function (err) {
    if (err) { return next(err); }
    res.redirect('/'); // Redirect to home page after logout
  });
});

// Middleware to check if user is authenticated
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next(); // Proceed to the next middleware/route if the user is authenticated
  }
  res.redirect("/login"); // Redirect to login page if not authenticated
}

module.exports = router;



