//防止属性可以被任意修改
//添加修饰符
(function() {
    class Person {
        //私有属性
        private _name: string;
        private _age: number;

        constructor(name: string, age: number) {
            this._name = name;
            this._age = age;
        }
        //外部获取采用get和set
    }

    const per = new Person('tom', 13);
})();