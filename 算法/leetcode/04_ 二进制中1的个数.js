// 二进制中1的个数
//编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    n = n.toString(2);
    n.split('').filter(val => val == 1).length;
    
};
hammingWeight(1);