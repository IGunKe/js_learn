<script>
import { ref, reactive } from 'vue';
export default {
    name: 'App',
    setup() {
        //基础类型用ref
        let name = ref('张三');
        let age = ref(12);
        //响应式数据，包装为一个对象 RefImpl
        let sex = ref('男');
        //对象等类型用reactive
        let job = reactive({
            type: '计算机',
            salary: 1200
        });

        function changeInfo() {
            //直接修改不可行
            name.value = '李四';
            age.value = 20;
            sex.value = '女';
            job.value.type = '医生';
        }

        function addSex() {
            
            job.sex = 'nv';
        }
        //setup中返回的值可以在模版中直接使用
        return {
            name,
            age,
            sex,
            job,
            changeInfo,
            addSex
        };
    }
};
</script>

<template>
    <h2>姓名: {{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>性别： {{ sex }}</h2>
    <h2>工作： {{ job.type }}</h2>
    <h4>job: {{job.sex}}</h4>
    <button @click="changeInfo">修改</button>
    <button @click="addSex">添加</button>
    <button @click="delName">删除</button>
</template>

<style scoped></style>