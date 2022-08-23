<template>
    <slot name="qwe"></slot>
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="sum++">+1</button>
    <hr />
    <h2>当前消息为: {{ msg }}</h2>
    <button @click="msg += '!'">修改</button>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue';

export default {
    name: 'Demo',
    // //vue2
    // watch: {
    //     //写法一
    //     // sum(newValue, oldValue) {
    //     //     console.log('变化了 :', newValue, oldValue);
    //     // }
    //     //写法二
    //     sum: {
    //         immediate: true, //立即执行
    //         handler(newValue, oldValue) {
    //             console.log('变化了 :', newValue, oldValue);
    //         }
    //     }
    // },
    setup(props, context) {
        let sum = ref(0);
        let msg = ref('hello vue');

        //监视一个ref
        watch(sum, (newValue, oldValue) => {
            console.log('变化了 :', newValue, oldValue);
        }, {
            immediate: true
        });

        /* //监视多个ref, 此时的newValue和oldValue为数组
        watch([sum, msg], (newValue, oldValue) => {
            console.log('变化了 :', newValue, oldValue);
        }); */
        
        watchEffect(() => {

        })
        return {
            sum,
            msg
        };
    }
};
</script>