const path = require('path');
//console.log(__dirname);
let temp = path.join(__dirname,'/path.js');
console.log(path.basename(temp,'.'));

// console.log(process.env);

console.log(path.parse(temp));
