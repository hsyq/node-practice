var http = require('http');
var fs = require('fs');
var mime = require('mime');

var server = http.createServer(server);

server.listen(8080,"localhost");

function server(request,response){
	var url = request.url;
	if(url == '/'){
		response.statusCode = 200;  
		response.setHeader("Content-type","text/html;charset=utf-8");
		response.setHeader('name','nodejs');
		fs.readFile('index.html',function(err,data){
		console.log(err);
		response.write(data); //写响应体
		response.end(); 
	});
	} else {
		static(url,response);
	}

	function static(url,response){
		response.setHeader("Content-type",mime.getType(url)+';charset=utf-8');
		fs.readFile(url.slice(1),function(err,data){
			response.write(data);
			response.end();
		});
	}
}


