const express = require('express');

const app = express();

const cors = require('cors');
app.use(cors());

app.get('/student', (req, res) => {
    console.log('有人访问了server1');
    res.send({
        id: 12,
        name: 'xdj'
    });
})
app.listen(80, () => {
    console.log('http://127.0.0.1:8080/student');
});