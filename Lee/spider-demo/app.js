const request = require('request');
const cheerio = require("cheerio"); 

const url = "http://localhost:8080";

request.get(url,function(err,res,body){
    if(err){
        console.log(err);
    }
    else if(res.statusCode == 200){
        // console.log(body);

        let $ = cheerio.load(body); // 将全文赋值给$
        console.log($('.apple', '#fruits').text());
        console.log($('li[class=orange]').html());
    }   
})

console.log("spider success");

