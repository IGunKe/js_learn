import { defineStore } from 'pinia';
//定义仓库
//需要一个唯一的名称，作为第一个参数传递
export const useInputStore = defineStore('inputStore', {
    state: () => {
        return {
            inputContent: ''
        }
    },
    getters: {

    },
    actions: {
        
    }
})
