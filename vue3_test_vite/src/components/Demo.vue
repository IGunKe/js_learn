<template>
    <slot name="qwe"></slot>
    <h2>当前求和为: {{ sum }}</h2>
    <button @click="sum++">+1</button>
    <hr />
    <h2>当前消息为: {{ msg }}</h2>
    <button @click="msg += '!'">修改</button>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect, onBeforeMount } from 'vue';

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
        //组合式生命周期钩子
        //beforeCreate和created被setup替代
        onBeforeMount(() => {
            console.log('beforeMount');
        })
    }
};
</script>