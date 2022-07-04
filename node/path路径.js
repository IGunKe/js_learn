//path路径模块
const { log } = require("console");
const path = require("path");

const pathStr1 = path.join('/a', '/b', '/v');
console.log(pathStr1);//  \a\b\v

const pathStr2 = path.join("/a", "/b","../", "/v");
console.log(pathStr2);//  \a\v
//注意../会抵消一层上一级路径

//path.basename(path, "扩展名")
const fileName = path.basename('1.txt');
console.log(fileName);// 1.txt
const name = path.basename('1.txt', ".txt");
console.log(name);// 1

//path.extname(path) 获取扩展名
const extname = path.extname('1.txt');
console.log(extname); // .txt
