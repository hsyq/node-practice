// http://blog.csdn.net/shelly1072/article/details/55001453

// request模块demo
const request = require('request');

// 最简单的示例
// var url = "https://www.baidu.com";
// request.get(url,function(err,res,body){
// 	if(!err && res.statusCode ==200 ){
// 		console.log(body);
// 	}

// 	console.log("request 请求成功!");
// })

// 保存图片到本地
const fs = require('fs');

let url2 = "http://a.hiphotos.baidu.com/image/h%3D300/sign=7562e0d02134349b6b066885f9eb1521/91ef76c6a7efce1bcd59c900a651f3deb58f658d.jpg";
request(url2).pipe(fs.createWriteStream('db.jpg'));

// 将本地文件上传到网络空间
// 将网络文件上传到网络空间
// 完成http认证
// 定制header
