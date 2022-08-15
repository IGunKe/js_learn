(function () {
    class Animal {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log('动物再叫。。。');
        }
    }

    class Dog {
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }

        sayHello() {
            console.log('汪汪汪');
        }
    }

    class Cat extends Animal {
        //继承父类的属性和方法
        //覆盖父类同名的方法
        sayHello(): void {
            console.log('喵喵喵。。。。'); 
        }
    }

    const cat = new Cat('咪咪', 3);
    const dog = new Dog('旺财', 12);
    console.log(dog);
    dog.sayHello();
    console.log(cat);
    cat.sayHello();
})();
