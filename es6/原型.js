//es6之前通过构造函数实现对象
//对象创建方法：1.字面量  2.new Object() 3. 自定义构造函数
function Star(uname, age) {
    this.uname = uname;
    this.age = age;
    /* this.sing = function() {
        console.log('song');
    } */
}
Star.prototype.sing = function() {
    console.log('song1');
}
const p1 = new Star('xdj1', 12);
const p2 = new Star('xdj2', 12);
//实例成员，this指向的都是,通过实例对象访问
p1.sing(); //song
//缺点：new一次构造一个内存空间，浪费内存
//因此，用prototype
//构造函数通过prototype分配的函数是共享的
//把不变的方法放在原型对象上
p2.sing()
/* 
1.原型：一个对象，也叫原型对象 
2，作用： 共享数据，减少内存浪费
*/
/* 
对象原型指实例对象中的属性： __proto__ 指向构造函数的原型对象*/
//方法的查找规则：如果实例对象有目标方法则直接调用，没有，则通过__proto__访问原型对象
console.log(Star.prototype === p1.__proto__);