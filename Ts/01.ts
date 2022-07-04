//使用 : 指定变量的类型，: 的前后有没有空格都可以。
function sayHello(person: string) {
    if (typeof person === 'string') {
        return 'hello, ' + person;
    } else {
        throw new Error('person is ont a string');
    }

}
//保证运行时的参数类型，还是得手动对类型进行判断
let user = 'Tom';
console.log(sayHello(1));
