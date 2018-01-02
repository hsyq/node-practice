var fs = require("fs");

fs.readdir('123',function(err,files){
	if(err){
		console.log(err);
		return;
	}
	// console.log(__dirname);
	const array = [];
	for(let i =0;i<files.length;i++){
		fs.stat(__dirname+'/123/'+files[i],function(err,stats){
				if(err){
					console.log(err);
				}
				if(stats.isDirectory()){
				 array.push(files[i]); 
				 console.log(array);                                                        
				}
		});
	}
	console.log('dfdf');
});

