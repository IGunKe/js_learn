<script>
    export default {
        name: 'App',
        //vue3中可以使用vue2的写法
        data() {
            return {
                sex: '男'
            }
        },
        //不可以是一个async函数
        setup() {
            let name = '张三';
            let age = 12;

            function sayHello() {
                alert(`我叫${name}, 今年${age}岁`);
                console.log(this);
            }

            //setup中返回的值可以在模版中直接使用
            return {
                name,
                age,
                sayHello
            }
        }
    }
</script>

<template>
  <h1>我是app组件</h1>
  <h2>姓名: {{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>性别: {{sex}}</h2>
  <button @click="sayHello">点击</button>
</template>

<style scoped>

</style>
