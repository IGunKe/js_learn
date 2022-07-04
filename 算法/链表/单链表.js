//节点
function ListNode(val) {
    this.val = val;
    this.next = null;
}

//链表类
function LinkedList() {
    this.length = 0;
    this.head = null;
}
// 向链表中追加节点
LinkedList.prototype.append = function (val) {
    let node = new ListNode(val);
    //console.log(node);
    if (!this.head) {
        this.head = node;
        return;
    }

    let cur = this.getElementAt(this.length);
    console.log(cur);
    cur.next = node;

    this.length++;
    return;
}

// 在链表的指定位置插入节点
LinkedList.prototype.insert = function (index, val) {
    if (index < 0 || index > this.length) return false;

    let node = new ListNode(val);

    if (index === 0) {
        node.next = this.head.next;
        this.head = node;
    }
    let cur = this.getElementAt(index - 1);
    node.next = cur.next;
    cur.next = node;
    this.length++;
    return true;
}

// 删除链表中指定位置的元素，并返回这个元素的值
LinkedList.prototype.removeAt = function (index) {
    if (index < 0 || index > this.length) {
        return false;
    }
    let cur = this.head;
    if (index === 0) {
        this.head = cur.next;
    }
    let prev = this.getElementAt(index - 1);
    prev.next = prev.next.next;
    this.length--;
    return true;
}

// 删除链表中对应的元素
LinkedList.prototype.remove = function (val) {
    let index = this.indexOf(val);
    return this.removeAt(index);
}

// 获取链表中给定元素的索引
LinkedList.prototype.indexOf = function (val) {
    let cur = this.head;
    for (let i = 0; i < this.length; i++) {
        if (cur.val === val) return i;
        cur = cur.next;
    }
    return -1;
}

// 获取链表中某个节点
LinkedList.prototype.find = function (val) {
    let cur = this.head;
    while (cur) {
        if (cur.val === val) {
            return cur;
        }
        cur = cur.next;
    }
    return null;
}

// 获取链表中索引所对应的元素
LinkedList.prototype.getElementAt = function (index) {
    if (index < 0 || index > LinkedList.length) {
        return null;
    }
    let cur = this.head;
    while (index--) {
        cur = cur.next;
    }
    return cur;
}

// 判断链表是否为空
LinkedList.prototype.isEmpty = function () {
    return this.length;
}

// 获取链表的长度
LinkedList.prototype.size = function () {
    return this.length;
}

// 获取链表的头元素
LinkedList.prototype.getHead = function () {
    return this.head;
}

// 清空链表
LinkedList.prototype.clear = function () {
    this.head = null;
    this.length = 0;
}

// 序列化链表
LinkedList.prototype.join = function (string) {
    let cur = this.head;
    let str = '';
    while (cur) {
        str += cur.val;
        if (cur.next) {
            str += string
        }
        cur = cur.next;
    }
    return str;
}
let linked = new LinkedList();
linked.append(11);
linked.append(22);
linked.append(33);
linked.append(44);


console.log(linked.join('---'))