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
        let person = reactive({
            type: '前端'
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
