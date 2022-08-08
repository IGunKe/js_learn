var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog.prototype.bark = function () {
        alert('哇哇哇');
    };
    return Dog;
}());
var dog = new Dog('问问', 12);
console.log(dog);
