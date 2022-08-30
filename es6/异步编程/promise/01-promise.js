function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello world!');
        }, 1000);
    });
}

//new Promise构造器之后，会返回一个promise对象

asyncFunction()
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    });
