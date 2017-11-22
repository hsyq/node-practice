var http = require('http');
var fs = require('fs');
var mime = require('mime');
var url = require('url');

var server = http.createServer(server);

server.listen(8080,"localhost");

function server(request,response){
	var urlObj = url.parse(request.url,true);
	console.log(urlObj.query.name,urlObj.query.age);

	response.statusCode = 200;
	response.setHeader('Content-type','text/html;charset=utf-8');
	response.write("hello");
	response.end();
}


