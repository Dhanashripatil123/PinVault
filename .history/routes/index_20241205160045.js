var express = require('express');
var router = express.Router();
const passport = require('passport');

const local

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
