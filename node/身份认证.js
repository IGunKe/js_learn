const express = require('express');

const app = express();

//带入express-session中间件
const session = require('express-session');
app.use(session({
    secret: 'itheima',
    resave: false,
    saveUninitialized: true
}));

//跨域访问
const cors = require('cors');
app.use(cors());

//解析数据
const parser = require('body-parser');
app.use(parser.json({extended: false}));
app.use(parser.urlencoded({extended: false}));

app.post('/api/login', (req, res) => {
    if (req.body.username !== 'admin' || req.body.password !== '123456')
    {
        return res.send({
            status: 1,
            msg: 'login filed'
        });
    }
    //将登陆成功的用户信息存入session
    req.session.user = req.body;
    req.session.isLogin = true;
    res.send({
        status: 0,
        msg: 'login ok'
    });
});

app.get('/api/username', (req, res) => {
    //从session中取数据
    if (req.session.isLogin === true) {
        res.send({
            status: 0,
            msg: 'ok',
            username: req.session.user.username
        });
    }
});

app.post('/api/logout', (req, res) => {
    //清空当前session信息
    req.session.destroy();
    res.send({
        status: 0,
        msg: 'out ok'
    });
});




app.listen(80, () => {
    console.log('ok');
});