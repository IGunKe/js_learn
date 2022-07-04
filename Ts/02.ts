///JavaScript 的类型分为两种：原始数据类型（Primitive data types）和对象类型（Object types）。

//原始数据类型包括：布尔值、数值、字符串、null、undefined 以及 ES6 中的新类型 Symbol 和 ES10 中的新类型 BigInt。

//boolean
let isDone : boolean = false;

//number
let isNumber: number = 6;
//JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
//任意值any
 let num: any = 'sss';

//未申明类型时是默认any
//使用接口interfaces定义对象的类型

interface Person {
    name: string;
    age?: number;
}
//在这里，内容必须一致，不然会报错
//如果想不完全匹配，可以使用？：
//仍然不允许添加未定义的属性
let tom:Person = {
    name: 'Tom'
}
//有时候我们希望一个接口允许有任意的属性