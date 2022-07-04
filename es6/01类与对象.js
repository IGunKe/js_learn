//对象： 属性 + 方法 ===》实例
//类 ：对象模版
//es6 创建类
class People {
    //构造函数,接收传递的参数
    constructor(uname) {
        this.name = uname;
    }
    say() {
        //console.log('hello');
        console.log(this.name);
    }
}

//实例化
const p1 = new People('xdj1');
const p2 = new People('xdj2');
p1.say();
p2.say();