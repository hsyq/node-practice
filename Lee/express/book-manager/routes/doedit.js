var express = require('express');
var router = express.Router();
const Book = require('../models/Book.js');

router.get('/', function(req, res, next) {
	 const conditions = {};
     const update = {};
     const options = {upsert : true};
   //Book.update(conditions, update, options, function(err){
  // 	if(err){
  // 		res.send('更新失败!');
  // 	}
  	// res.send('更新成功!');
 // });
  console.log(req.query);
  //res.send('123');
});

module.exports = router;
