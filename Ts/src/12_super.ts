(function() {
    class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        sayHello() {
            console.log('动物再叫');
            
        }
    }

    class Dog extends Animal {
        sayHello(): void {
            //super获取父类的属性方法
            super.sayHello();
            console.log('狗在叫。。');
        }
    }

    const dog = new Dog('狗');
    dog.sayHello();
    
})();