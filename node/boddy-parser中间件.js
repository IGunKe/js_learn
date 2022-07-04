const express = require('express');
//解析请求体
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.post('/api', (req, res) => {
    console.log(req.body);
    res.send('ok');
});

app.listen(80, () => {
    console.log('ok');
});