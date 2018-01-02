var fs = require('fs');

var rs = fs.createReadStream('read.txt',{
    start:0,end:5,highWaterMark:3
});
var buffers = [];

rs.on('readable',function(){
    "use strict";
    // 注册 readable 事件之后
    // 从数据源读取数据到缓存区，直到缓存区满就停止读
    //当从缓存区read后，缓存区空了，再从数据源读取数据，再触发 readable事件
    //直到所有数据读取完，触发 end事件
    console.log("======readable======");
    var buff;
    while(null != (buff = rs.read(1)) ){
        buffers.push(buff);
    }
});

rs.on('end', function (){
    "use strict";
    var data = Buffer.concat(buffers);
        console.log(data.toString());
    console.log('读取结束');
});