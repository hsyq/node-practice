const express = require('express');
const router = express.Router();
const Book = require('../models/Book.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
	Book.delete(req.query.id,function(err,result){
		if(err) console.log(err);
    	res.send('删除成功：' + result);
	});
});

module.exports = router;
