<template>
    <h1>{{ name }}</h1>
    
    <button @click="name += '-'">add+1</button>
</template>

<script>
import { reactive,toRef, computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';

export default {
    name: 'Hello',
    setup() {
        let sum = ref(0);
        //shalllowReactive作用是只对第一层的属性进行响应式处理
        //shallowRef是ref的阉割版，不对对象进行响应式处理
        let person = shallowReactive({
            type: '前端',
            job : {
                jb1: {
                    salary: 20
                }
            }
        })
        //toRef的作用是将引用类型中的数据暴露出去，并且是响应式的
        const name = toRef(person, 'type');
        return {
            sum,
            person,
            name
        };
    }
};
</script>
