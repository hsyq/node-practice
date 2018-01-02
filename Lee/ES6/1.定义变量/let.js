/**
 * Created by taylo_000 on 2017/12/27.
 */
var a = 1;
if(a) {
    console.log(a);
}
if(a) {
    console.log(a);
    var a = 14;
}

if(a) {
    let a = 14;
    console.log(a);
}
if(a) {
    // console.log(a);
    let a = 14;
}

// 自执行函数的简单写法
{
    let a = 12;
    console.log(a)
}