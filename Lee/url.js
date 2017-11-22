var url=require('url'); 
var urlObj = url.parse("http://user:pass@host.com:8080/p/a/t/h?query=string#hash");
 /*
  返回值：
  {
   protocol: 'http:',
    slashes: true,
    auth: 'user:pass',
    host: 'host.com:8080',
    port: '8080',
   hostname: 'host.com',
   hash: '#hash',
   search: '?query=string',
   query: 'query=string',
   pathname: '/p/a/t/h',
   path: '/p/a/t/h?query=string',
   href: 'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'
  }
没有设置第二个参数为true时，query属性为一个字符串类型
 */
console.log(urlObj);

url.format({
    protocol:"http:",
    host:"182.163.0:60",
    port:"60"
});
/*
返回值：
'http://182.163.0:60'
*/
*


1.返回结果去除了参数和锚点
2.返回结果标准url路径格式

 var url=require('url');  
    //指定相对路径  
    var url1=url.resolve('http://www.gongjuji.net/one/two/three','four');  
    console.log(url1); //http://www.gongjuji.net/one/two/four  
    //指定根目录的相对路径  
    var url3=url.resolve('http://www.gongjuji.net/one/two/three','/four');  
    console.log(url3); //http://www.gongjuji.net/four  
    //带参数的相对路径  
    var url2=url.resolve('http://www.gongjuji.net/one/two/three?name=zhangsan','four');  
    console.log(url2); //http://www.gongjuji.net/one/two/four  
    //非标准分隔符的原路径  
    var url4=url.resolve('http://www.gongjuji.net\\one#name1','/four');  
    console.log(url4);//http://www.gongjuji.net/four  
    //非标准分隔符的相对路径  
    var url5=url.resolve('http://www.gongjuji.net/one','\\two\\three');  
    console.log(url5);//http://www.gongjuji.net/two/three  