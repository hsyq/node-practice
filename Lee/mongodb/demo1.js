const db = require('./db.js');

const data = {
	'name':'小米红米Note4',
	'price':1099,
	'color':['red','gold','gray']
};
db.insertOne("phone",data,function(err,result){
	if(err){
		return;
	}
	console.log(result);
});


