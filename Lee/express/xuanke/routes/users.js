var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('这里是 /user');
});

router.get('/xiaoming', function(req, res, next) {
  res.send('这里是 /user/xiaoming');
});


module.exports = router;
