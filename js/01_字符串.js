let str1 = 'java script';
//length：字符串长度方法返回包含的字符串中的空格中的字符数。
console.log(str1.length); //10
//访问字符串中的字符
console.log(str1[0]); //j
//大写
console.log(str1.toUpperCase()); //JAVASCRIPT
//小写
console.log(str1.toLowerCase()); //javascript
//切片，左闭右开
console.log(str1.substring(0, 4)); //Java
//split() 拆分字符串, 返回一个字符数组
console.log(str1.split(' '));

let str2 = '  hello world   hello';
console.log(str2.trim()); //hello world
//include（）：它接受一个子字符串参数，并检查字符串中是否存在子字符串参数。
console.log(str1.includes('java')); //true
//替换字符串
console.log(str2.replace('world', 'node').trim());
//concat()
console.log(str1.concat(str2)); //java script  hello world
//search：它采用子字符串作为参数，并返回第一个匹配项的索引。搜索值可以是字符串或正则表达式模式。
console.log(str1.search('java')); //0
// match：它采用子字符串或正则表达式模式作为参数，
// 如果有匹配项，则返回数组，如果没有匹配项，
// 则返回 null。让我们看看正则表达式模式是什么样的。
// 它以 / 符号开头，以 / 符号结尾。
console.log(str2.match('hello'));
// [
//   'hello',
//   index: 2,
//   input: '  hello world   hello'
//   groups: undefined
// ]
console.log(str2.match(/hello/g));//[ 'hello', 'hello' ]
//repeat（）：它采用一个数字作为参数，并返回字符串的重复版本。
console.log('hello'.repeat(2));//hellohello
//检查数据类型和强制转换
console.log(parseInt('12'));
console.log(parseInt('12.0'));
console.log(parseFloat('12.1'));
console.log(Number('12.2'));
console.log(Math.floor(3 / 2));
let a = 3;
console.log(a + ++a * a++);