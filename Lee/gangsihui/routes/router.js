const router = require('express').Router();

exports.showIndex = function (req,res,next) {
	res.send('hello');
}

const data = {
	"album_name":"坑王驾到",
	"album_desc":"爱奇艺郭德纲",
	"img_url":"http://xmly.com"
};

exports.getAlbumsList = function(req,res,next){
	res.json(data);
}

