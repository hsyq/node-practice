//这个模块里面封装了所有对数据库的常用操作
const MongoClient = require('mongodb').MongoClient;
const setting = require('./setting.js');


//不管数据库什么操作，都是先连接数据库，所以我们可以把连接数据库
//封装成为内部函数
function _connectDB(callback){
	const url = setting.dburl+setting.dbname;
	MongoClient.connect(url,function(err,db){
		callback(err,db);
	});
}

//插入数据
exports.insertOne = function(collectionName,json,callback){
	_connectDB(function(err,db){
		db.collection(collectionName).insertOne(json,function(err,result){
			callback(err,result);
			db.close();
		})
	});
}

//查找数据，找到所有数据。args是个对象{"pageamount":10,"page":10}
//