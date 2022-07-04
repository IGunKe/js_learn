const express = require('express');
const app = express();

//中间件
const mw = (req, res, next) => {
    next();
}
//app.use()注册全局中间件
//中间件的作用：共享统一的req，res
app.listen(80, () => {
    console.log('ok');
});