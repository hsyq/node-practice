var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(server);

function server (req,res){
    // 解析请求，包括文件名
    let pathname = url.parse(req.url).pathname;

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1),function(err,data){
      if(err){
        res.statusCode = 404;
        res.setHeader("Content-type","text/html;charset=utf-8");
        res.write(err.toString());  //  res.write() 返回的内容跟响应头设置的应该一致
       
      }else{
      res.statusCode = 200;
      res.setHeader("Content-type","text/html;charset=utf-8");
      res.write(data.toString());
      }
        res.end();
    });
}

server.listen('8080','localhost');
// 控制台会输出以下信息
console.log('Server running at http://localhost:8080/');





