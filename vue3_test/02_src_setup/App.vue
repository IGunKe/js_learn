<template>
    <h1>我是APP组件</h1>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <button @click="sayHi">say</button>
    <br>
    <button @click="test">vue2读取vue3</button>
</template>

<script>
import {h} from 'vue'
export default {
    name: 'App',
    data() {
        return {
            sex: '男'
        }
    },
    methods: {
        test() {
            //vue2可以读取setup中的数据，反过来不行
            console.log(this.age);
        }
    },
    setup() {
        // vue2中的data和方法在vue3中放在setup()
        //data
        let name = 'xdj';
        let age = 12;

        //methods
        function sayHi() {
            alert(`我叫${name}, 今年${age}`);
            console.log(this);
        }
        //如果返回一个对象，可以返回数据，方法，
        return {
            name,
            age,
            sayHi
        }
        //如果返回一个渲染函数
        // return (h) => h(name, age);
    }
};
</script>

<style></style>
