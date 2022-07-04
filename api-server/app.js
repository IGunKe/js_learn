//导入模块
const express = require('express');
//创建服务器
const app = express();

const joi = require('@hapi/joi');
//跨域访问
const cors = require('cors');
app.use(cors());

//封装全局处理错误消息的函数
app.use((req, res, next) => {
    res.cc = (err, status = 1) => {
        res.send({
                status,
                msg: err instanceof Error ? err.message : err
        });
    }
    next();
});
//解析urlencoded表单
app.use(express.urlencoded({extended: false}));

//导入路由---注册用户模块
const userRouter  = require('./router/user');
app.use('/api', userRouter);


app.use((err, req, res, next) => {
    if (err instanceof joi.ValidationError)
    {
        return res.cc(err);
    }
    //未知错误
    return res.cc(err);
});
//启动服务器
app.listen(80, () => {
    console.log('server start ok');
});