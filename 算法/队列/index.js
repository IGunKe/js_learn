function Queue() {
    this.items = [];

    //入队
    this.enqueue = function(ele) {
        this.items.push(ele);
    }
    //出队
    this.dequeue = function() {
        return this.items.shift();
    }
    //查看
    this.front = function() {
        return this.items[0];
    }
    //判空
    this.isEmpty = function() {
        return this.items.length === 0;
    }
    //长度
    this.size = function() {
        return this.items.length;
    }
    //清除
    this.clear = function() {
        this.items = [];
    }
    //打印
    this.print = function() {
        console.log(this.items.join(','));
    }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(3);
queue.enqueue(7);
console.log(queue.items);
queue.dequeue();
console.log(queue.items);
queue.print();
