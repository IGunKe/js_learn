// 青蛙跳台阶问题
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。
// 求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
// 1  1
// 2  2
// 3  111 12 21  3
// 4 1111 112  121 211 22 5
//fn(n) = fn(n-1) + fn(n-2)
function fn(n) {
    //递归
    // if (n === 1) {
    //     return 1;
    // }
    // if (n === 2) {
    //     return 2;
    // }
    // return fn(n - 1) + fn(n - 2);
    //动态规划
    if (n === 0) {
        return 1;
    }
    if (n <= 2) {
        return n;
    }
    let a = 1;
    let b = 2;
    let temp = 0;
    for (let i = 3; i <=n; i++) {
        temp = (a + b) % 1000000007;
        a = b;
        b = temp;
    }
    return temp;
}
console.log(fn(7));