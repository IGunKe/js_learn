const fs = require("fs");

/* fs.readFile('./hello.txt', (err,val) => {
    if (err) throw err;
    console.log(val.toString());
}); */

//promise封装
const promise = new Promise((resolve, reject) => {
    fs.readFile("./hello.txt", (err, val) => {
        if (err) {
            reject(err);
        }
        resolve(val.toString());
    });
});
//通过then方法处理结果
promise.then((val)=> {
    console.log(val + 'api');
},(err) => {
    console.error(err);
});