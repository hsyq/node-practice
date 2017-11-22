var http = require('http');
var url = require('url');
var proto = {};

function createServer(){
	function app(req,res,next){

	}
	// assign类似copy，把proto属性拷贝到app对象中
	Object.assign(app,proto); 
	app.stack = [];
}
proto.use = function(handle){
	this.stack.push(handle)
}

