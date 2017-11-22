var http = require("http");
var fs = require("fs");

http.createServer(function(req,res){
    fs.readFile('index.html',function(err,data){
        if(err){
            console.log(err);
        }
        res.writeHeader(200,{'Content-type':'text/html;charset=utf-8'});
    res.end(data);
    });
    
}).listen(8080,"localhost") 
console.log('server run at 8080');     
