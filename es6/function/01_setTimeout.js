/* 
 setTimeout 允许我们将函数推迟到一段时间间隔之后再执行。
 setInterval 允许我们重复运行一个函数，从一段时间间隔之后开始运行，
 之后以该时间间隔连续重复运行该函数。
 */
function sayHi(a,b) {
	console.log(a+'-hi-'+b);
}
//传入一个函数，但不要执行它
let timerId = setTimeout(sayHi, 2000, 11, 22);
//setInterval(sayHi, 2000);
//取消调度
clearTimeout(timerId);

//setInterval语法与setTimeout相同
//取消调度clearInterval()