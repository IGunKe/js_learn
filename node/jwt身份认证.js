const express = require('express')

const app = express();

//jwt身份认证模块
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

//跨域访问
const cors = require('cors');
app.use(cors());

const parser = require('body-parser');
app.use(parser.urlencoded({
    extended: false
}));


//定义secret密钥
const secretKey = 'xxtoken';
//解析还原jwt，成功后将信息挂载到req,使得req中有req.user
app.use(expressJWT({
    secret: secretKey,
    algorithms: ["HS256"]
}).unless({
    path: [/\/api\//]
}));

//登陆
app.post('/api/login', (req, res) => {
    if (req.body.username !== 'admin' || req.body.password !== '123456') {
        return res.send({
            status: 400,
            msg: 'login filed'
        });
    }
    const userInfo = req.body;
    //将登陆成功的用户信息存入session
    // req.session.user = req.body;
    // req.session.isLogin = true;
    //登陆成功后生成jwt， 参数：用户信息对象，secretKey，有效期
    const tokenStr = jwt.sign({
        username: userInfo.username
    }, secretKey, {
        expiresIn: '200s'
    });

    res.send({
        status: 200,
        msg: 'login ok',
        token: tokenStr
    });
});

app.get('/admin/userInfo', (req, res) => {
    console.log(req.user);
    res.send({
        status: 200,
        msg: 'ok',
        data: req.user
    });
});

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({status: 401, msg: 'no ok'});
    }
})
app.listen(80, () => {
    console.log('ok');
});