// 创建10字节的buffer实例
var buf1 = new Buffer(10);

// 通过给定的数组创建 Buffer 
var buf2 = new Buffer([10,20,30,40,50]);

// 通过一个字符串来创建 Buffer 实例
var buf3 = new Buffer("buffer实例","utf-8");

var buf4 = new Buffer(265);
var length = buf4.write("where？！");
console.log(length);

var buf5 = new Buffer(26);
for(let i = 0;i<26;i++){
	buf5[i] = i+97;
}

var string1 = buf5.toString("utf-8",0,5);
var string2 = buf5.toString("utf-8",0,25);
var string3 = buf5.toString("ascii");
console.log(string1);
console.log(string2);
console.log(string3);
// console.log(a);
var buf6 = new Buffer('www.runoob.com');
var json = buf6.toJSON(buf6);

console.log(json);

// buffer与字符串的长度
var str = "你好世界世界你好";
var buf22 = new Buffer(str);
console.log(str.length);
console.log(buf22);
console.log(buf22.length);

console.log(str[0]);
str[0] = '大';
console.log(str);

var buf44 = new Buffer(13);
console.log(buf44.length);

let fs = require('fs');
var data = fs.readFileSync('text.txt');
console.log(data);
console.log(data.length);

