// 此时 是 将字符串转成一个类似数组的对象
{
    let [x,y,z] = '123';
    console.log(x, y, z); // 1 2 3
}

{
    let [x,y,z] = '123456';
    console.log(x, y, z); // 1 2 3
}

let [x,y,z] = '1';
console.log(x, y, z); // 1 undefined undefined

// includes()
let str = 'hello2018';
console.log(str.includes('l'));

// startsWith()  是不是以某个字符作为开头
// endsWith() 是不是以某个字符作为结尾

console.log(str.repeat(3));

console.log(typeof NaN);