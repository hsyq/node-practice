// 建立一个服务器，需要node提供的核心模块 http 
var http = require('http');

//创建一个服务
var server = http.createServer(server);

//监听特定端口
server.listen(8080,"localhost");

function server(request,response){
	console.log(request.method);  //获取请求方法：get,put,push...
	console.log(request.url);
	console.log(request.headers);

	response.statusCode = 200;  //设置状态码
	 //设置相应类型，编码为utf-8
	response.setHeader("Content-type","text/html;charset=utf-8");
	response.setHeader('name','nodejs');
	response.write(new Date().toString()); //写响应体
	response.end(); // 响应完毕要结束
}
