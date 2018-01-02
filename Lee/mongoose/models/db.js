/**
 * Created by taylo_000 on 2017/12/4.
 */
const mongoose = require('mongoose');
// createConnection 会为每个用户创建一个连接请求
const db = mongoose.createConnection('mongodb://localhost:27017/test');


db.on('error', function(error) {
    console.log(error);
});
//监听open事件
db.once('opne',function(err){
    if(err){
        console.log(err);
    }
    console.log('数据库连接成功');
});

module.exports = db;