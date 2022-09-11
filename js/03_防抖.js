//使用场景: 输入框输入搜索,拖拽( mousemove )
//不是每次操作后执行函数.在频繁操作的最后一次操作结束后在设置的时间内没有触发操作时才执行回调
//利用闭包保存同一个timer
function fandou(fn, delay, immediate) {
    let timer;
    return function() {
        let self = this;
        let arg = arguments;
        clearTimeout(timer);
        if (immediate) {
            const callNow = !timer;
            timer = setTimeout(() => {
                timer = null;
            }, delay);
            if (callNow) fn.apply(self.arg);
        }
    }
}