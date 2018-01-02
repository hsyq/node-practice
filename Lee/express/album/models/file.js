const fs = require('fs');

// const File = {
// 	getAlbums:null
// };

exports.getAlbums = function(callback){
	// 异步读取文件目录
	// files是一个包含 “ 指定目录下所有文件名称的” 数组。
	fs.readdir('./uploads',function(err,files){
		if(err){
			console.log('没有找到uploads目录',null);
			// return;
		}
		const albums = [];
		(function iterator (i){
			if(i == files.length){
				 //遍历结束
				console.log(albums);
				callback(null,albums);
				return;
			}

			fs.stat('./uploads/'+files[i],function(err,stat){
				if(err){
					console.log(err);
					return;
				}
				if(stat.isDirectory){
					albums.push(files[i]);
				}
				iterator(i+1);
			})
		})(0)
	});
}

exports.getAlbumImgByName = function(albumname,callback){
	fs.readdir('./uploads/'+albumname,function(err,files){
		if(err){
			 callback("没有找到uploads文件",null);
			return;
		}
		const imgArray = [];
		(function itetator(i){
			if(i == files.length){
				console.log(allImages);
                callback(null,allImages);
				return;
			}
			fs.stat("./uploads/" + albumname + "/" + files[i],function(err,stats){
				 if(err){
                    callback("找不到文件" + files[i] , null);
                    return;
                }
				if(stats.isFile()){
					imgArray.push(files[i]);
				}
			});
			itetator(i+1)
		})(0);

	});
}
//module.exports = File;