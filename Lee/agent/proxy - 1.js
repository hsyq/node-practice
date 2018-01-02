var express = require('express');
var request = require('request');
var app = express();

function proxy(req,res,target){
    request(target,function(err,response,body){
        if(!err && response.statusCode == 200){
            res.end(body);
        }
    });
}
function proxyPass(config){
    return function (req,res,next){
        let target = config[req.hostname];
        console.log(req.hostname);
        proxy(req,res,target);
    }
}
app.use(proxyPass({
    "a.node.cn":"http://localhost:300",
    "b.node.cn":"http://localhost:4000"
}));

app.listen(80);
// 目标:访问不同的服务器不要加端口号
// 应用服务器A a.node.cn
let app3000 = express();

app3000.get('/',function(req,res,next){
    "use strict";
    console.log(req.hostname);
    res.send('a.node.cn:3000');
});
app3000.listen(3000);
// 应用服务器B b.node.cn
let app4000 = express();

app4000.get('/',function(req,res,next){
    "use strict";
    console.log(req.host);
    res.send('b.node.cn:4000');
});
app4000.listen(4000);