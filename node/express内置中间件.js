const express = require('express');

const app = express();

//解析json格式的请求体
//app.use(express.json());
//解析x-www-urlencoded

app.use(express.urlencoded({extended: false}));

app.post('/api', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

app.listen(80, () => {
    console.log("ok");
});