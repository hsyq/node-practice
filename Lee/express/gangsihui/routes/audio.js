const express = require('express');
const router = express.Router();
const Audio = require('../models/Audio.js');

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
