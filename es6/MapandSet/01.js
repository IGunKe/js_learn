//特点：可以用任何类型做键，区别于对象
let map = new Map();
/* 
 new Map() —— 创建 map。
 map.set(key, value) —— 根据键存储值。
 map.get(key) —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。
 map.has(key) —— 如果 key 存在则返回 true，否则返回 false。
 map.delete(key) —— 删除指定键的值。
 map.clear() —— 清空 map。
 map.size —— 返回当前元素个数。
*/
map.set('1', 'hello');//'1' => 'hello'
map.set(1, 'world');//1 => 'world'
console.log(map.get(1));//'world'
console.log(map.get('1'));//'hello'
console.log(map.has(1));//true
//console.log(map.delete('1'));//true
//console.log(map.clear());//undefined
console.log(map.size);
//不同于对象，会把键都转化为字符串
//与对象不同，键不会被转换成字符串。键可以是任何类型。

//Map 是怎么比较键的？SameValueZero算法

//链式调用
map.set(1, '12')
	.set(2, '22')
	.set(3, '32');
	console.log(map);

//map迭代
/* 
map.keys() —— 遍历并返回一个包含所有键的可迭代对象，
map.values() —— 遍历并返回一个包含所有值的可迭代对象，
map.entries() —— 遍历并返回一个包含所有实体 [key, value] 的可迭代对象，for..of 在默认情况下使用的就是这个
*/

for (let item of map.keys()) {
	console.log(item);
}//1,1,2,3
for (let item of map.values()) {
	console.log(item);
}
for (let key of map.entries()) {
	console.log(key);
}
//Map 保留了此顺序。
map.forEach((val, key) => {
	console.log(key+":"+val);
});
//Object.entries() 对象转map
const obj = {
	id: 12,
	nmae: 'xdj'
}
let map1 = new Map(Object.entries(obj));
console.log(map1);

//Object.fromEntries  map 转对象
let obj1 = Object.fromEntries(map);
console.log(obj1);