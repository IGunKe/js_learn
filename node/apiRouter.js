const express = require('express');
const router = express.Router();

router.get('/get', (req, res) => {
    //获取URL中的参数
    const query = req.query;
    //响应
    res.send({
        status: 200,
        msg: 'GET ok',
        data: query
    });
});

router.post('/post', (req, res) => {
    const body = req.body;
    res.send({
        status: 200,
        msg: 'POST ok',
        data: body
    });
});

module.exports = router;