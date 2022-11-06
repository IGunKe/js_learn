import { defineStore } from 'pinia';
//定义仓库
//需要一个唯一的名称，作为第一个参数传递
export const useTest = defineStore('test', {
    state: () => {
        return {
            count: 1,
            age: 12,
            name: 'xdj'
        };
    },
    //类似于computed 可以帮我们去修饰我们的值
    getters: {},
    //可以操作异步 和 同步提交state
    actions: {
        addCount() {
            this.count++;
        }
    }
});
