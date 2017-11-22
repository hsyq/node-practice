const express = require('express');
const fs = require('fs');

const app = express();

app.get('/',function(req,res){
	fs.readFile('index.html',function(err,data){
		if(err) throw err;
		res.send(data);
	})
	
});