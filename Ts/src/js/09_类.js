"use strict";
class Person {
    constructor(name) {
        this.name = 'xdj1';
        this.name = name;
    }
    sayHello() {
        console.log('hello');
    }
}
Person.age = 12;
let per = new Person('xdj2');
console.log(per);
per.sayHello();
