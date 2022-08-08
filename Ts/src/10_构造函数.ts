class Dog{
    name: string;
    age: number;
    
    //构造函数
    constructor(name:string, age: number) {
        this.name = name;
        this.age = age
    }

    bark() {
        alert('哇哇哇');
    }
}

const dog = new Dog('问问', 12);

console.log(dog);
