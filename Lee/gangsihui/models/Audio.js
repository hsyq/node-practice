const mongoose = require('mongoose');
const db = require('./db.js');

const audioSchema = new mongoose.Schema({
	aid:{type:Number},  // 音频id
	title:{type:String},  // 音频标题
	artist:{type:String}, // 艺术家
	episode:{type:String},   // 第几集 
	albumName:{type:String},   // 专辑名
	url:{type:String},   //  播放地址
	length:{type:String}, // 音频长度
	imgUrl:{type:String}   // 音频封面
});

audioSchema.statics.findAll = function(callback){
	this.model('Audio').find(callback);
}

const audioModel = db.model('Audio',audioSchema);
module.exports = audioModel;