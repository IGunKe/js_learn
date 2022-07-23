class Person {
    name: string = 'xdj';

    //静态属性只能通过类访问
    static age: number = 12;

    sayHello() : void {
        console.log('hello');
    }
}

let per = new Person();

console.log(per.sayHello());