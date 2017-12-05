var express = require('express');
var router = express.Router();
const Book = require('../models/Book.js');

router.get('/', function(req, res, next) {
  Book.create(req.query,function(err){
  	// req.query可以取到 get请求的参数
  	if(err){
  		res.send('添加失败!');
  	}
  	res.send('添加成功!');
  });
  //console.log(req.query);
  //res.send('123');
});

module.exports = router;
