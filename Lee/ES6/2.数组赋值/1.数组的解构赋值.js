//let a = 1,b = 2,c = 3;

let [a,b,c] = [1,2,3];


/* 嵌套赋值 */
let [n,m,[s]] = [10,15,[18]];
console.log(m);
console.log(n);
console.log(s);

/* 省略赋值 */
let [x,,,y] = [1,2,3,4,5];
console.log(x);
console.log(y);

/* 不定参数赋值 */
let [e,...f] = [1,2,3,4,5];
console.log(e);
console.log(f);

let [,,r,,...q] = [1,2,3,4,5,6,7,8,9];
console.log(q);

/* 默认值 */
let [f1,f2=2] = [1];
console.log(f1);
console.log(f2);

let [f1,f2=2] = [1,3];
console.log(f1);
console.log(f2);


