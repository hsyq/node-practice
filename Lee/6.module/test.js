var person = require('./exports'); // 参数为文件的路径（若参数不以./开头，系统会认为是node_modules寻找安装）
var Person = require('./Person.js');

console.log(person.guanyu.name);
console.log(person.age);
//console.log(module);

var xiaoming = new Person('xiaoming',123);
console.log(xiaoming.getName());
console.log(xiaoming.home);
console.log(xiaoming.hasOwnProperty("home"));
xiaoming.home = '北京';
console.log(xiaoming.hasOwnProperty("home"));
console.log(require);
console.log(require.cache);

//清除模块的缓存
//缓存是一个对象的属性，用null
delete require.cache[require.resolve('./person.js')];