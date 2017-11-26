const mysql = require('mysql');
const DB_NAME = 'nodesample';

const pool = mysql.createPool({
	host:'localhost',
	user:'user',
	password:'666',
});

pool.on('connection',function(connection){
	connection.query('SET session auto_increment_increment=1');
});

function User(user){
	this.username = username;
	this.password = password;
}
module.exports = User;

pool.getConnection(function(err,connection){
	const useDataSql ='USE' + DB_NAME;
	connection.query(userDataSql,function(err){
		if(err){
			console.log("USE Error:" + err.toString());
		}
		console.log("Use database" + DB_NAME);
	})

	console.log();
});