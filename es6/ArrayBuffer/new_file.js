//创建，上传，下载
//二进制格式：ArrayBuffer，Uint8Array，DataView，Blob，File

//ArrayBuffer----固定长度的连续内存空间的引用
let buffer = new ArrayBuffer(16);
//长度16, 
//声明：ArrayBuffer 与 Array 没有任何共同之处：不是数组
/* 
它的长度是固定的，我们无法增加或减少它的长度。
它正好占用了内存中的那么多空间。
要访问单个字节，需要另一个“视图”对象，而不是 buffer[index]
*/
//通过视图访问arraybuffer
console.log(buffer.byteLength);
console.log(buffer);

//创建视图
let view = new Uint32Array(buffer);
console.log(view.length);

view[0] = 123456;

for (let num of view) {
	console.log(num);
}