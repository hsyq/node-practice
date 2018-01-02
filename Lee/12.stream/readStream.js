var fs = require('fs');

var rs = fs.createReadStream('read.txt',{encoding:'utf8'});

rs.on('open',function(){
    "use strict";
    console.log("打开文件");
});

rs.on('data',function(data){
    "use strict";
    console.log(data);
});

rs.on('end',function(){
    "use strict";
    console.log("读取完成");
});

rs.on('close',function(){
    "use strict";
    console.log("关闭文件");
});