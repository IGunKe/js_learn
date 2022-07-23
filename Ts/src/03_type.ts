export {}
//number
let a: number = 12;
let b: number = 0b1010;//二进制

//string
let myName: string = 'Tom';

//void 空值
let myVoid: void = undefined;

function alertName(): void {
    alert('hello')
}

//null  undefined
//any 允许被赋值为任意类型。

let c: any = false;
a = c;
//unknown 不可以赋给其他变量
let d: unknown;
//类型断言, 告诉编译器变量的实际类型

let e: string = 'hello';
d = <string> e;