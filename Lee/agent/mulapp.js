var express = require('express');
var proxy = require('http-proxy').createProxyServer();
var app = express();

app.listen(80);
// 目标:访问不同的服务器不要加端口号
// 应用服务器A a.node.cn
var app3000 = express();

app3000.get('/',function(req,res,next){
    "use strict";
    res.send('a.node.cn:3000');
});
app3000.listen(3000);
// 应用服务器B b.node.cn
var app4000 = express();

app4000.get('/',function(req,res,next){
    "use strict";
    res.send('b.node.cn:4000');
});
app4000.listen(4000);