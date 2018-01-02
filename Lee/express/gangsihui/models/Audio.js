const mongoose = require('mongoose');
const db = require('./db.js');

const audioSchema = new mongoose.Schema({
	aid:{type:Number},  // 音频id
	title:{type:String},  // 音频标题
	artist:{type:String}, // 艺术家
	album_title:{type:String},   // 专辑名
	album_id:{type:Number},   // 专辑名
	play_path:{type:String},   //  播放地址
	duration:{type:Number}, // 音频长度
	img_path:{type:String}   // 音频封面
});

// 获取所有声音
audioSchema.statics.findAll = function(callback){
	this.model('Audio').find(callback);
}

// 根据音频aid查询声音
audioSchema.statics.findOneById = function(id,callback){
	//const sid =  mongoose.Types.ObjectId(id); 
	//this.model('Audio').find({_id:sid},callback);
	this.model('Audio').find({aid:id},callback);
}

// 根据专辑album_id查询所有声音
audioSchema.statics.findAllByAlbum_id = function(id,callback){
	//const sid =  mongoose.Types.ObjectId(id); 
	//this.model('Audio').find({_id:sid},callback);
	this.model('Audio').find({album_id:id},callback);
}

// 根据专辑album_id查询所有声音
audioSchema.statics.findAllByAlbum_id = function(id,callback){
	//const sid =  mongoose.Types.ObjectId(id); 
	//this.model('Audio').find({_id:sid},callback);
	this.model('Audio').find({album_id:id},callback);
}

// 根据专辑album_id和声音aid查询声音
audioSchema.statics.findOneAudioByAudio_aid = function(id,aid,callback){
	//const sid =  mongoose.Types.ObjectId(id); 
	//this.model('Audio').find({_id:sid},callback);
	this.model('Audio').find({album_id:id,aid:aid},callback);
}


const audioModel = db.model('Audio',audioSchema);
module.exports = audioModel;