var event = require("events");
var eventEmitter = new event.EventEmitter();

eventEmitter.on("cat",function(arg){
	console.log("cat1:"+arg)
});

eventEmitter.on("cat",function(arg){
	console.log("cat2:"+arg)
});

eventEmitter.emit("cat","喵喵喵");

var listener1 = function(){
	console.log("监听器listener1执行……");
}

var listener2 = function(){
	console.log("监听器listener2执行……");
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connect', listener1);
eventEmitter.on("connect",listener2);

eventEmitter.emit("connect");

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");
