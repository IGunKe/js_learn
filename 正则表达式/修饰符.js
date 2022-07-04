//i：表示忽略大小写， 放在双斜杠后面
const re1 = /a/ig;
const str = 'helloaA'
//方法test()用于匹配检测,如果字符串中有匹配的值返回 true
console.log(re1.test(str));
//方括号
//方括号用于查找某个范围内的字符：
//[abc] 含a, b, c的
const re2 = /[abc]/;
console.log("re2: "+re2.test('a'));
//   ^  表示除了什么以外
const re3 = /[^abc]/;
console.log("re3: " + re3.test('d'));
//范围为a-z, 数字同理
const re4 = /[a-z]/;
console.log("re4: " + re4.test('d'));
//查找任何指定的选项。必须要用圆括号（）
const re5 = /(red|blue|green)/;
console.log("re5: " + re5.test('red'));
