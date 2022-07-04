function Stack() {
    this.items = [];

    //添加
    this.push = function(ele) {
        this.items.unshift(ele);
    }
    //删除
    this.pop = function() {
        return this.items.shift();
    }
    //查看栈顶
    this.peek = function() {
        return this.items[0];
    }
    //判空
    this.isEmpty = function() {
        return this.items.length === 0;
    }
    //清空
    this.clear = function() {
        this.items = [];
    }
    //长度
    this.size = function() {
        return this.items.length;
    }
    //打印
    this.print = function() {
        return this.items.join();
    }
}
let p = new Stack();
p.push(1);
p.push(2);
//console.log(p.peek());
//console.log(p.isEmpty());
//console.log(p.pop());
console.log(p.items);
console.log(p.print());
