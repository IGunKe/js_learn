const express = require('express');
//解析请求体数据
const qs = require('querystring');

const app = express();
app.use((req, res, next) => {
    let str = '';
    //'data'事件，获取数据
    req.on('data', (chunk) => {
        str += chunk;
    });
    req.on('end', () => {
        const body = qs.parse(str);
        res.body = body;
        console.log(body);
        next();
    });
    
});
app.post('/api', (req, res) => {
    //console.log(req.body);
    res.send(res.body);
});
app.listen(80, ()=> {
    console.log('ok');
});