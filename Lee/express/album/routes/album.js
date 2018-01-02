var express = require('express');
//var router = express.Router();
const File = require('../models/file.js');

exports.showAlbum = function(req, res, next) {
 //    const albumname = req.params.albumName.;
 //    console.log("dfdfdfd");
 //    //具体业务交给model
	// File.getAlbumImgByName(albumname,function(err,imgArray){

	// 	if(err){
	// 		next(); //交给下面的中间件
	// 		return;
	// 	}
	// 	res.render(album,{
	// 		"albumname":albumname,
	// 		"images":imgArray
	// 	});
	// })

  console.log(req.params.albumName);
  res.send('dfdfdfd');
};

//module.exports = router;
