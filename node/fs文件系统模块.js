//读取指定文件中的内容
//fs.readFile(path, [, 编码格式可选], callback);
const fs = require("fs");
fs.readFile('1.txt','utf8', (err, success) => {
    console.log(success);
});

//写入
//fs.writeFile(filepath,data, [, 编码格式可选],callback)
fs.writeFile("2.txt","abcd",(err, success) => {
    if (err === null) {
        console.log("文件写入成功！");
    }
    
});
