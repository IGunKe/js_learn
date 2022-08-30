//从前的变量声明
/* let a = 1;
let b = 2;
let c = 3; */

//es6---模式匹配，从左到右
let [a, b, c] = [1, 2, 3];

console.log(a, b, c);

//可以设定默认值
let [x, y = '1'] = [1];

console.log(x, y);

