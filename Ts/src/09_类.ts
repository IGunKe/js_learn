class Person {
    name: string = 'xdj1';

    //静态属性只能通过类访问
    static age: number = 12;

    constructor(name: string) {
        this.name = name;
    }

    sayHello(): void {
        console.log('hello');
    }
}

let per = new Person('xdj2');
console.log(per);


per.sayHello();
