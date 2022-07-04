//优先队列中元素的添加和移除是依赖优先级的。
//实现最小优先队列
// 定义最小优先队列
function MinPriorityQueue() {
    this.items = [];

    this.enqueue = enqueue;
    // this.dequeue = dequeue;
    // this.front = front;
    this.isEmpty = isEmpty;
    // this.size = size;
    // this.clear = clear;
    // this.print = print;

    function enqueue(ele, priority) {
        const queueElement = {
            element: ele,
            priority: priority
        }
        if (this.isEmpty()) {
            this.items.push(queueElement);
        } else {
            let added = false;
            for (let i = 0; i< this.items.length; i++) {
                if (queueElement.priority < this.items[i].priority) {
                    this.items.splice(i,0,queueElement);
                    added = true;
                    break;
                }
            }
            if (!added) {
                this.items.push(queueElement);
            }
        }
    }
    function isEmpty() {
        return this.items.length === 0;
    }
}
const queue = new MinPriorityQueue();
queue.enqueue('cdcd', 2);
queue.enqueue('ashd', 5);
queue.enqueue('ashd', 4);
console.log(queue.items);