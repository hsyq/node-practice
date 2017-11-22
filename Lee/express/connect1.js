var http = require('http');
var url = require('url');

//响应的数据源
var articles = {
	'1':'第一篇文章内容',
	'2':'第二篇文章内容',
	'3':'第三篇文章内容'
}

http.createServer(function(req,res){
	// 所有程序都要使用的代码
	let urlObj = url.parse(req.url,true);
	let pathname = urlObj.pathname;
	let query = urlObj.query;

	if(pathname == '/'){
		res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
		res.end('<ul><li><a href="/a?id=1">第一篇</a></li><li><a href="/a?id=2">第二篇</a></li><li><a href="/a?id=3">第三篇</a></li></ul>');
	} else if(pathname == '/a' ){
		res.writeHead(200,{'Content-type':'text/html;charset=utf-8'});
		res.end(articles[query.id]);
	} else {
		res.end("404");
	}
}).listen(8080);

console.log("server 8080 启动成功");

