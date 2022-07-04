//1. 引入模块
const fs = require("fs");
//2. 调用方法
/* fs.readFile("es6/hello.md", (err, data) => {
  //如果err，抛出err
  if (err) throw err;
  //否则
  console.log(data.toString());
}); */
//3. Promise封装
const promise = new Promise(function(resolve, reject) {
    fs.readFile("es6/hello.md", (err, data) => {
      //如果err，抛出err
      if (err) {
          reject(err);
      } 
      resolve(data);
    });
});

promise.then(function(value) {
    console.log(value.toString());
}, function(error) {
    console.error(error);
});