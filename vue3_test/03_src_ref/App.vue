<template>
    <h1>我是APP组件</h1>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ job.type }}</h2>
    <button @click="changeInfo">修改</button>
</template>

<script>
import { ref } from 'vue';
export default {
    name: 'App',
    setup() {
        // vue2中的data和方法在vue3中放在setup()
        //data
        let name = ref('xdj');
        let age = ref(12);
        let job = ref({
            type: '前端'
        });
        
        function changeInfo() {
            name.value = 'qqqq';
            age.value = 22;
            //虽然数据改变了但是页面并没有响应式的修改
            //需要交给ref
            job.value.type = 'hello';
            console.log(name, age, job);
        }
        //如果返回一个对象，可以返回数据，方法，
        return {
            name,
            age,
            job,
            changeInfo
        };
    }
};
</script>

<style></style>
