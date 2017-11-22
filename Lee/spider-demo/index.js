var http = require("http");
var fs = require("fs");
var cheerio = require("cheerio");  //扩展模块

const wz = "http://news.baidu.com";

var strHtml="";
var results=[];
http.get(wz,function(res){
    res.on("data",function(chunk){
        strHtml+=chunk;
    })
    res.on("end",function(){

        //console.log(strHtml);

        var $=cheerio.load(strHtml);

        $("#channel-all li").each((iten,i)=>{
            console.log($(i).text());
        })
    });
})        
