const mysql= require('mysql');

const connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'666',
	port:'3306',
	databse:'test'
});

connection.connect();

let sql1 = 'select * from websites' ;
let sql2 = 'select * from websites where id = 4';
connection.query('SELECT 1 + 1 AS solution',function(err,results,fields){
	if(err) throw err;
	console.log('The solution is:'+  results[0].solution);
});

