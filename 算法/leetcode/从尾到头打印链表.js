//输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
// 输入： head = [1, 3, 2]
// 输出：[2, 3, 1]
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 节点定义
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
// 链表定义
class LinkedList {
    constructor(head = null) {
        this.head = head;
    },
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    },
    clear() {
        this.head = null;
    },
    getFirst() {
        return this.head;
    }
}
let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;
let linked = new LinkedList(node1);

console.log(linked.head.next.val);
// var reversePrint = function (head) {
//     let arr = [];
//     while (head !== null) {
//         arr.unshift(head.val);
//         head = head.next;
//     }
//     return arr;
// };

// console.log(reversePrint(head));