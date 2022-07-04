Promise的始终状态：
1：初始化：pending
2：成功：fulfilled(resolve)
3：失败: rejected(reject)

Promise的状态一旦改变将不会发生变化，then中的函数只会调用一次

创建Promise对象
1：new Promise(fn);
    fn的参数(resolve, reject)
2: then

创建XHR的promise对象
function getUrl(url) {
    return new Promise(function (resolve, reject) {
        let xhr = new XHRHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(new Error(xhr.statusText));
            }
        }
        xhr.onerror = function() {}
        xhr.send();
    });
}

var url = '';
getUrl(url)
    .then(val => {})
    .catch(err=> {});


new Promise()的快捷方式
new Promise(resolve => {
    resolve('hello');
});
等价于 Promise.resolve('hello');
同理：Promise.reject()也一样;他们的返回值也是Promise对象