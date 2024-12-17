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
var usermodel = require("./users")
var postmodel = require("./Posts");
const passport = require('passport');
const upload = require('./multer')

const localStrategy = require('passport-local');
passport.use(new localStrategy(usermodel.authenticate()));


router.get("/",function(req,res){
     res.render("index",{ title:'Express'});
})

router.get("/login",function(req,res){
      
      res.render('login',{error: req.flash('error')});
})

router.get("/feed",function(req,res){
     res.render('feed');
})

router.post("/upload" , isLoggedIn, upload.single('file'),function(req,res,next){
     if(!req.file){
      return res.status(404).send("no file were given");
      // jo file upload hui hai use save karo as a post and uska post id user and post ko userid do
     }
     const user = await
})

router.get('/profile',isLoggedIn,async function(req,res,next){
  const user = await usermodel.findOne({
    username: req.session.passport.user
  })
  console.log(user);
  
  res.render('profile',{user});
});

router.post('/register',function(req,res){
  const { username, email, fullname } = req.body
  const userdata = new usermodel({ username, email,fullname})

  usermodel.register(userdata, req.body.password)
  .then(function(){
    passport.authenticate("local")(req,res,function(){
      res.redirect("/profile")
    })
  })
});
      
      
router.post('/login',passport.authenticate("local",{
  successRedirect: "/profile",
  failureRedirect: "/login"
}),function(req,res){
});

router.get("/logout",function(req,res,next){
       req.logOut(function(err){
        if (err) {return next(err);}
        res.redirect('/');
       })
})

function isLoggedIn(req,res,next){
  if (req.isAuthenticated()) {     
  return next();
  }
  res.redirect("/login")
}
      
module.exports = router;