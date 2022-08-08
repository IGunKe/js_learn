//在 TypeScript中使用接口（Interfaces）来定义对象的类型

//定义接口
interface Person1 {
    readonly id: number,//只读属性
    name: string,
    age?: number, //但是， 实际使用时希望属性是可选的 用?:
    [propName: string]: any//一个接口允许有任意的属性
}
//定义的变量比接口少了一些属性是不允许的,多一些属性也是不允许的
//赋值的时候，变量的形状必须和接口的形状保持一致
let tom: Person1 = {
    id: 1212,
    name: 'tom',
    age: 12
}

//但是， 实际使用时希望属性是可选的 用?:
