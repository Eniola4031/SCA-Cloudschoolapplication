var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SCA Cloud School Application, this is my first assessment' });
});

module.exports = router;
