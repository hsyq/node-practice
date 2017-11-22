var http = require('http');
//导入fs文件模块
var fs = require('fs');

//创建一个服务
var server = http.createServer(server);

//监听特定端口
server.listen(8080,"localhost");

//导入fs文件模块
function server(request,response){
	
	response.statusCode = 200;  
	response.setHeader("Content-type","text/html;charset=utf-8");
	response.setHeader('name','nodejs');
	//fs模块读取本地文件，第一个参数为路径，第二个参数为调用完成后执行的回调函数
	//回调函数的两个参数：第一个是调用失败后会把原因放到err，
	//第二个是没有调用失败后取文件的内容，将被写入 响应体
	fs.readFile('index.html',function(err,data){
		console.log(err);
		response.write(data); //写响应体
		response.end(); 
	});	
}
