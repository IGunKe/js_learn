//set “值的集合”（没有键），它的每一个值只能出现一次。
/* 
 new Set(iterable) —— 创建一个 set，如果提供了一个 iterable 对象（通常是数组），将会从数组里面复制值到 set 中。
 set.add(value) —— 添加一个值，返回 set 本身
 set.delete(value) —— 删除值，如果 value 在这个方法调用的时候存在则返回 true ，否则返回 false。
 set.has(value) —— 如果 value 在 set 中，返回 true，否则返回 false。
 set.clear() —— 清空 set。
 set.size —— 返回元素个数。
*/
let set = new Set();
set.add(1);
set.add('1');
set.add(3);
console.log(set);//Set(3) { 1, '1', 3 }
console.log(set.has(1));//true
console.log(set.has('3'));//false
set.delete(1);
console.log(set);
console.log(set.size);//2
/* 
 set.keys() —— 遍历并返回一个包含所有值的可迭代对象，
 set.values() —— 与 set.keys() 作用相同，这是为了兼容 Map，
 set.entries() —— 遍历并返回一个包含所有的实体 [value, value] 的可迭代对象，它的存在也是为了兼容 Map。
 */
