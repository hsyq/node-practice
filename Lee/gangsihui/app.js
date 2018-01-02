const express = require('express');
const app = express();
const db = require('./models/db.js');
const Audio = require('./models/Audio.js');
const router = require('./routes/router.js');

/*let a1 = {
	aid:10001,  
	title:"张广泰回家12",  
	artist:"郭德纲", 
	episode:12,   
	albumName:'张广泰回家',  
	url:'https://www.kunwu.com/api/read/10001',  
	length:"20:45", 
	imgUrl:'https://www.kunwu.com/img/345.jpg'   
}
Audio.create(a1,function(err){
	if(err){
		console.log(err);
	}
	console.log('插入成功');
	db.close();
});*/
app.use(express.static('public'));

app.get('/',router.showIndex);
app.get('/getAlbumsList',router.getAlbumsList);

app.listen(3000);
console.log('启动成功');
