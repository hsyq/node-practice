/*
  输入一个字符串，返回base64
 */
function tranBase(str){
    "use strict";
    let buf = new Buffer(str);
    let length = buf.length;
    console.log(length);
    let arr = [];

    for(let i = 0;i<length;i++){
       let  binary = (buf[i]).toString(2);
       arr[i] = binary;
    }
    console.log(arr);
    let newstr = arr.join('');
    console.log(newstr);
}

//let str = "ABCDEFGHIJKLMNOPQRSTUVWXVZ";
//str = str + str.toLocaleLowerCase();
//str = str + '0123456789';
//str = str + '+/';

tranBase('珠');