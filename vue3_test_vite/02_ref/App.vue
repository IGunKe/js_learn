<script>
import {ref} from 'vue'
export default {
    name: 'App',
    setup() {
        let name = '张三';
        let age = 12;
        //响应式数据，包装为一个对象 RefImpl
        let sex = ref('男');

        function changeInfo() {
            //直接修改不可行
            name = '李四';
            age = 20;
            console.log(sex);
            sex.value = '女';
        }
        //setup中返回的值可以在模版中直接使用
        return {
            name,
            age,
            sex,
            changeInfo
        };
    }
};
</script>

<template>
    <h2>姓名: {{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>性别： {{sex}}</h2>
    <button @click="changeInfo">修改</button>
</template>

<style scoped></style>