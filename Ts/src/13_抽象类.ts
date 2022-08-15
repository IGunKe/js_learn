(function () { 
     //抽象类只可以被继承，
    abstract class Animal {
        name: string;

        constructor(name: string) {
            this.name = name;
        }
        //抽象方法,没有方法体
        abstract sayHello(): void;
    }

    class Dog extends Animal {
        sayHello(): void {
            //super获取父类的属性方法
            //super.sayHello(); 出错
            console.log('狗在叫。。');
        }
    }

    const dog = new Dog('狗');
    dog.sayHello();
})();
