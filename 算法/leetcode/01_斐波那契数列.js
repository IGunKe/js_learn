//斐波那契数列
// 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。
// 斐波那契数列的定义如下：
// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
/**
 * @param {number} n
 * @return {number}
 */ 
var fib = function(n) {
    //垃圾递归解法
    // if (n === 0) {
    //     return 0;
    // }
    // if (n === 1) {
    //     return 1;
    // }
    // return fib(n -1) + fib(n - 2);
    //动态规划,
    //原问题分解为相对简单的子问题的方式求解复杂问题的方法。动态规划常常适用于
    //有重叠子问题和最优子结构性质的问题。
    if (n < 2) {
        return n
    }
    let dt = [0, 1]
    for (let i = 2; i <= n; i++) {
        dt[i] = (dt[i - 1] + dt[i - 2]) % 1000000007
    }
    return dt[n]
};

console.log(fib(5))

