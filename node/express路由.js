//路由 ----一种映射关系：客户端的请求与服务端的函数
//三部分：1。请求类型，2.请求的URL地址 3. 处理函数
//例如：app.get(''user, ()=>{});
const express = require("express");

const router = express.Router();

router.get('/user', (req, res) => {
    console.log('get ok');
});

module.exports = {
    router
}