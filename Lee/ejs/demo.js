const ejs = require('ejs');
const fs = require('fs');

fs.readFile('demo.ejs',function(err,data) {
	if(err) throw err;
	const temp = data.toString(); //忘了toString会报错：this.templateText.replace is not a function
	// ejs的数据来源于json
	const dataJson = {
		title:'哈哈哈',
		a:'8'
	};
	const html = ejs.render(temp,dataJson);
	console.log(html);
});