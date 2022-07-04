const express = require('express');
//创建服务器实例
const app = express();

app.use(express.json());
//cors用于解决跨域问题
const cors = require('cors');
app.use(cors());
//导入路由
const router = require('./apiRouter');

app.use('/api', router);

//启动服务器
app.listen(80, () => {
    console.log("ok");
});