const mysql= require('mysql');

const connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'666',
	port:'3306',
	databse:'test'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution',function(err,results,fields){
	if(err) throw err;
	console.log('The solution is:'+  results[0].solution);
});

