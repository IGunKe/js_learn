<template>
    <h1>{{ sum }}</h1>
    <button @click="sum++">add+1</button>
</template>

<script>
import { reactive, computed, ref, watch } from 'vue';
export default {
    name: 'Hello',
    watch: {
        // 简写
        /* sum(newValue, oldValue) {
            console.log(newValue, oldValue);
        } */
        sum: {
            // 立即监视，页面一加载就执行
            immediate: true,
            deep: true,
            handler(newValue, oldValue) {
                console.log(newValue, oldValue);
            }
        }
    },
    setup() {
        let sum = ref(0);
        let person = reactive({
            name: 'xdj',
            age: 12,
            job: {
                a: {
                    b: 1
                }
            }
        })
        //直接监视reactive时deep失效
        watch(person, (newValue, oldValue) => {
                console.log(newValue, oldValue);
        }, {
            immediate: true
        })
        return {
            sum
        };
    }
};
</script>
