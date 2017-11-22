var fs = require('fs');

// 读取文件信息
fs.stat('file.txt',function(err,stats){
	if(err){
		console.log(err)
	}
	// 打印文件信息
	console.log(stats);
	// 检测文件类型
	console.log("是否为文件(isFile) ?"+stats.isFile());
	console.log("是否为目录(isDirectory) ?" + stats.isDirectory());

})

// 写入文件
fs.writeFile('input.txt',"欢迎来到Nodejs的世界！",function(err){
	if(err){
		return console.log(err);
	}

	console.log("数据写入成功！");
})


// 异步读取
fs.readFile('input.txt', function (err, data) {
   if (err) {
       return console.error(err);
   }
   console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");