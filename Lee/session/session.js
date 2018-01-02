const express = require('express');
const session  = require('express-session');

const app = express();

// 使用 cookieParser 中间件，cookieParser(secret, options)
// 其中 secret 用来加密 cookie 字符串（下面会提到 signedCookies）
// 未使用签名的存储在req.cookies，使用签名的存在 req.signedCookies
// options 传入上面介绍的 cookie 可选参数
// 若需要使用签名，需要指定一个secret,字符串,否者会报错
//app.use(cookiePareser('Simon'));
app.use(cookieParser()); // 未使用签名
app.get('/', function (req, res) {  
// 如果请求中的 cookie 存在 isVisit, 则输出 cookie
   // 否则，设置 cookie 字段 isVisit, 并设置过期时间为1分钟	
  // 通过req.cookies可以取到传过来的cookie，并把它们转成对象。
  if (req.cookies.isVisit) {     
    console.log(req.cookies);
    res.send("再次欢迎访问");
  } else {
    res.cookie('isVisit', 1, {maxAge: 60 * 1000});
    res.send("欢迎第一次访问");
  }
});

app.listen(3000);
console.log('Server is running at ');