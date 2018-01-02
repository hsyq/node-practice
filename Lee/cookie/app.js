const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// 使用 cookieParser 中间件，cookieParser(secret, options)
// 其中 secret 用来加密 cookie 字符串（下面会提到 signedCookies）
app.use(cookieParser()); // 未使用签名
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //设置为false取不到body参数

app.get('/', function (req, res,next) {  
    res.render("login");
 
});

app.post('/',function(req,res,next){
    const username = req.body.username;
    const pwd = req.body.pwd;
    const user = {
      'username':username,
      'pwd':pwd
    };

    res.cookie('user',user,{maxAge:1000*60*5});
    res.redirect('/user');
});

app.get('/user',function(req,res){
  if(req.cookies.user){
        console.log(req.cookies.user);
        res.render('user',{user:req.cookies.user});
    }
    res.redirect('/');

})

app.listen(3000);
console.log('Server is running at ');