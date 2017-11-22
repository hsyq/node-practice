var querystring = require("querystring");

var json = {
	'name':'zhangsan',
	'age':'18',
	'subject':['chinese','math']
};

console.log(querystring.stringify(json));