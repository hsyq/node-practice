var express = require('express');
var router = express.Router();
var fs = require('fs');

var PATH = './public/data/';//配置文件路径

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('data', { title: 'data' });
});

/* 读取数据模块*/ 
// /data/read?type=it
router.get('/read',function(req,res,next){
	const type = req.query.type; //req.query得到查询字符串的对象，通过点语法得到具体参数值
	//console.log(type);
	fs.readFile(PATH + type + '.json',function(err,data){
		if(err){
			console.log(err);
		}

		const COUNT = 50;//返回最多50行数据  
        const obj = [];  

       /* try{  
            obj = JSON.parse(data.toString());//这里做异常处理，如果文件中存储的不是json格式的字符串（比如空文件）这里会抛出异常  
        }catch(e){  
            obj =[];  
        }  
          
        if(obj.length > COUNT){  
                obj = obj.slice(0,COUNT);//返回前50行数据  
  
        }  */
        const dataStr = data.toString();
        //console.log(dataStr);
        //console.log(typeof dataStr);
        dataJson = JSON.parse(dataStr);
        //console.log(dataJson);
		res.json({
			status:0,
			data:dataJson
		});
	});
});

module.exports = router;
