console.log(new Set());

// 数组拼接并去重
var arr1 = [1,2,3,4,5];
var arr2 = [1,2,6,7,8];

function fn(a,b) {
    "use strict";
    let arr = [...arr1,...arr2];
    return Array.from(new Set(arr));
}

console.log(fn(arr1,arr2));

// 数组交集
function fn(a,b) {
    "use strict";

}
