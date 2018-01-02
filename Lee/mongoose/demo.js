const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test'); // 端口27017不需要体现

// 创建了一个模型。猫的模型。所有的猫，都有名字，是字符串。像定义了一个类。
const Cat = mongoose.model('Cat',{name:String});
// 实例化一只猫
let kitty = new Cat({name:'Zildjian'});
// 调用这只猫的save方法，保存这只猫
kitty.save(function(err){
	if(err){
		console.log(err);
	}
})