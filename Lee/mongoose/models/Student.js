//数据库中的Schema，为数据库对象的集合，一个用户一般对应一个schema。
// schema 概要、计划、图标
// schema 结构
// Student.js  像一个类
const mongoose = require('mongoose');
const db = require('./db.js');
//创建了一个schema结构
const studentSchema = new mongoose.Schema({
    name     :  {type : String},
    age      :  {type : Number},
    sex      :  {type : String}
});
//创建静态方法
studentSchema.statics.findUserByName = function(name,callback){
    this.model('Student').find({name:name},callback);
}
//创建实例方法
studentSchema.methods.findAllAll = function(callback){
    this.model('Student').find(callback);
}
//创建一个学生模型，就是学生类
//类是基于 schema创建的
const studentModel = db.model('Student',studentSchema);
module.exports = studentModel;
