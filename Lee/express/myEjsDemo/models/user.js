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
	// 连接数据库
	const useDataSql ='USE' + DB_NAME;
	connection.query(userDataSql,function(err){
		if(err){
			console.log("USE Error:" + err.toString());
		}
		console.log("Use database" + DB_NAME);
	})

	// 保存数据
	User.prototype.save = function(callback){
		const user = {
			username: this.username,
            userpass: this.userpass
		}
		var insertUser_Sql = "INSERT INTO userinfo(id,username,userpass) VALUES(0,?,?)";

        connection.query(insertUser_Sql, [user.username, user.userpass], function (err,result) {
            if (err) {
                console.log("insertUser_Sql Error: " + err.message);
                return;
            }

            connection.release();

            console.log("invoked[save]");
            callback(err,result);                     
        });       
    };

    //根据用户名得到用户数量
    User.getUserNumByName = function getUserNumByName(username, callback) {

        var getUserNumByName_Sql = "SELECT COUNT(1) AS num FROM userinfo WHERE username = ?";

        connection.query(getUserNumByName_Sql, [username], function (err, result) {
            if (err) {
                console.log("getUserNumByName Error: " + err.message);
                return;
            }

            connection.release();

            console.log("invoked[getUserNumByName]");
            callback(err,result);                     
        });        
    };

    //根据用户名得到用户信息
    User.getUserByUserName = function getUserNumByName(username, callback) {

        var getUserByUserName_Sql = "SELECT * FROM userinfo WHERE username = ?";

        connection.query(getUserByUserName_Sql, [username], function (err, result) {
            if (err) {
                console.log("getUserByUserName Error: " + err.message);
                return;
            }

            connection.release();

            console.log("invoked[getUserByUserName]");
            callback(err,result);                     
        });        
    };
});