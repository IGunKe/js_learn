//1. 导入express模块
const express = require("express");

//express.static()托管静态资源，使得项目目录下的图片，css等可以访问
//2. 创建服务器
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json())
//监听get, post请求
//app.get(url, fun)
const str = {
    username: '123456',
    password: '123456'
}
const data = {
    status: 200,
    msg: 'ok'
}
app.get('/username', (req, res) => {
    //res.send() 响应请求
    res.send(str);
});
app.post('/login', (req, res) => {
    console.log(req.body);
    if (req.body.username ===str.username && req.body.password ===str.password) {
        res.send(data);
    }
    res.send({
        status: 400,
        msg: 'no ok'
    });
});
//req.query获取URL中携带的参数
app.get('/api', (req, res) => {
    let strData = req.query;
    console.log(strData);
    res.send({code: 'ok'});
});
//req.params 访问URL中的动态参数   如 “:id”
app.get('/api/:id/:name', (req, res) => {
    let data = req.params;//返回值为动态参数对象
    res.send(data);
})
//3。使用服务器
app.listen(8084, () => {
    console.log("hello");
});

