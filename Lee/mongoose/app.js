const db = require('./models/db.js');
//定义了一个模型，学生模型，“学生类”
const Student = require('./models/Student.js');
//实例化了一个学生类
const xiaoming =new Student({'name':'小明','age':18,'sex':'男'});
//保存这个学生类
// .save() 是对象的方法。不是类的方法
xiaoming.save(function(err){
   if(err){}
    console.log('数据存储成功');
   db.close();
});
/*xiaoming.findAllAll(function(err,result){
    console.log('查找所有成功');
    console.log(result);
    db.close();
});*/