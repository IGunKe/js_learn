var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function () {
    var Animal = /** @class */ (function () {
        function Animal(name, age) {
            this.name = name;
            this.age = age;
        }
        Animal.prototype.sayHello = function () {
            console.log('动物再叫。。。');
        };
        return Animal;
    }());
    var Dog = /** @class */ (function () {
        function Dog(name, age) {
            this.name = name;
            this.age = age;
        }
        Dog.prototype.sayHello = function () {
            console.log('汪汪汪');
        };
        return Dog;
    }());
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Cat;
    }(Animal));
    var cat = new Cat('咪咪', 3);
    var dog = new Dog('旺财', 12);
    console.log(dog);
    dog.sayHello();
    console.log(cat);
    cat.sayHello();
})();
