var express = require('express');
var router = express.Router();

const data = {
	title:'昆吾'
};
router.get('/', function(req, res, next) {
  res.render('index',data);
});

module.exports = router;
