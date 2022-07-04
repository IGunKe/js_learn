//http模块：创建http服务器
//ip地址： 计算机的唯一地址，唯一标识
/* 步骤
1。  导入http模块
2.   创建实例
3.   绑定事件on，监听请求
4.   启动服务器listen(端口号， callback)
*/
const http = require("http");

const server = http.createServer();

server.on('request', (req, res) => {
    //req请求对象
    //req.url客户端请求的URL地址
    const url = req.url;
    const method = req.method;
    //res.end(str)响应内容
    const str = '你好！nodejs'+" " + url +" "+ method;
    //res.end()会出现乱码问题，手动设置响应头内容的编码格式
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    res.end(str);
});


server.listen(80, () => {

});