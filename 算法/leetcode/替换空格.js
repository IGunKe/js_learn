//请实现一个函数， 把字符串 s 中的每个空格替换成 "%20"。
// 输入： s = "We are happy."
// 输出： "We%20are%20happy."
const s = "We are happy.";
var replaceSpace = function (s) {
    const arr = [...s];
    for (let i in arr) {
        if (arr[i] === ' ') {
            arr[i] = '%20';
        }
    }
    return arr.join('');
};

function fn(s) {
    return s.replace(' ', '%20');//缺点是只可以用一次
}
console.log(fn(s));
console.log(replaceSpace(s));