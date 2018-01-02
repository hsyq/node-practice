const express = require('express');
const request = require('request');
const router = express.Router();
const Audio = require('../models/Audio.js');
const fs = require('fs');

router.get('/bianli', function(req, res, next) {
	// 张广泰回家
	const arr1 = [48223818,
	48223820,
	48223822,
	48223824,
	48223826,
	48223827,
	48223836,
	48223838,
	48229992,
	48229995,
	48229999,
	48230001,
	48230002,
	48230004,
	48230006,
	48230008,
	48230010,
	48230011,
	48235603,
	48235605,
	48235610,
	48235611];
	// 精品单口
	const arr = [48346925,48346926,48346930,48346932,48346934,48346938,48346987,48346991,
	48346992,48346995,48346996,48346998,48347050,48347052,48347055,48347056,48347059,48347061,
	48347096,48347098,48347100,48347103,48347106,48347155,48347158,48347160,48347161,48347163,
	48347209,48347213,48347250,48347251,48347252,48347255,48347258,48347260,48347312,48347314,
	48347332,48347349,48347353,48347417,48347419,48347420,48347422,48347425,48347472,48347476,
	48347478,48347528,48347535,48347571,48347572,48347575,48347617,48347623,48347630,48347673,
	48347675,48347680,48347723,48347724,48347727,48347730,48347799,48347802,48347893,48347895,
	48347900,48347903,48347904,48347907,48347967,48347970,48347976,48347978,48347980,48347982,
	48348118,48348121,48348123,48348274,48348276,48348279,48348280,48348315,48348318,48348320,
	48348321,48348322,48348324,48348383,48348386,48348389,48348390,48348395,48348441,48348442,
	48348443,48348446];
	for(let i = 0;i<arr.length;i++){
		const url = 'http://www.ximalaya.com/tracks/' + arr[i] + '.json';
		request(url,function(err,response,body){
			if(!err && response.statusCode == 200){
				const data = JSON.parse(body);
				console.log(data);
				const aid = data.id;
				const title = data.title;
				const artist = "郭德纲";
				const album_title = data.album_title;
				const album_id = data.album_id;
				const play_path = data.play_path_64;
				const duration = data.duration;
				const img_path = data.cover_url;

				const audio1 = {
			   	aid:aid,
				title:title,
				artist:artist,
				album_title:album_title,
				album_id:album_id,
				play_path:play_path,
				duration:duration,
				img_path:img_path
			   };
			   /* 写入数据库 */
				/*Audio.create(audio1,function(err){
					if(err){
						console.log(err);
					}
					console.log('插入成功');
					// db.close();
				});*/

				/* 写入json文件 */
				const audio2 = '{"aid":'+ aid +',"title":"'+title+'","artist":"'+artist+'","album_title":"'+album_title+'","album_id":'+album_id+',"play_path":"'+play_path+'","duration":'+duration+',"img_path":"'+ img_path +'"}\r\n';
				fs.writeFile('audio.json',audio2,{'flag':'a'},function(err){
					if(err){
						console.log(err);
					}
					console.log('写入成功');
				});
			   
			}
		});

	}
	 res.send('写入成功!');
});


router.get('/read/:id', function(req, res, next) {
	const id = req.params.id;
	Audio.findOneById(id,function(err,data){
		if(err){
			console.log(err);
		}
		console.log(data);
		console.log('查询成功');
		res.json({
			status:1,
			audio:data[0]
		});
	});
});

module.exports = router;
