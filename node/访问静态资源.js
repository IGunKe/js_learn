'use strict'
const express = require('express');

const app = express();

//向外暴露静态资源， 如果需要托管多个，则多次调用
//localhost/buddha.JPG
app.use(express.static('./public/images'));
//挂载路径前缀, 
//app.use() 注册中间件 用于对请求进行预处理
app.use('/public/images', express.static('./public/images'));
//中间件本质上为一个处理函数，参数必有req，res，next next用于链接下一个中间件
app.listen(80, () => {
    console.log("hello");
});

//全局安装nodemon，类似tomcat的热加载