var express = require('express');
var app = express();
//socket.io公式：
var http = require('http').Server(app);
var io = require('socket.io')(http);
//session公式：
var session = require('express-session');
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));

//模板引擎
app.set("view engine","ejs");
//静态服务
app.use(express.static("./public"));

var alluser = [];

//中间件
//显示首页
app.get("/",function(req,res,next){
	res.render("index");
});
//确认登陆，检查此人是否有用户名，并且昵称不能重复
app.get("/check",function(req,res,next){
	var username = req.query.username;
	if(!username){
		res.send("必须填写用户名");
		return;
	}
	if(alluser.indexOf(username) != -1){
		res.send("用户名已经被占用");
		return;
	}
	alluser.push(username);
	//付给session
	req.session.username = username;
	res.redirect("/chatroom");
});
//聊天室
app.get("/chatroom",function(req,res,next){
	//这个页面必须保证有用户名了，
	if(!req.session.username){
		res.redirect("/");
		return;
	}
	res.render("chatroom",{
		"username" : req.session.username
	});
})

io.on("connection",function(socket){
	socket.on("liaotian",function(msg){
		console.log(msg);
		//把接收到的msg原样广播 
		io.emit("liaotian",msg);
	});
});

//监听
http.listen(3000);