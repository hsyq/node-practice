const express = require('express');
const router = express.Router();
const File = require('../models/file.js');

router.get('/', function(req, res, next) {
	console.log("访问首页");

	// try {File.getAlbums();}
	// catch(err){throw err}
	// finally{
	// 		res.render('index', data);	
	 //}
	//错误的：传统思维，不是node的思维：
    //res.render("index",{
    //    "albums" : file.getAllAlbums()
    //});

    //这就是Node.js的编程思维，就是所有的东西，都是异步的
    //所以，内层函数，不是return回来东西，而是调用高层函数提供的
    //回调函数。把数据当做回调函数的参数来使用。
    File.getAlbums(function(err,albums){
    	if(err){
    		next();
    		return;
    	}
    	res.render('index',{
    		album:albums
    	});
    });
});

module.exports = router;

