<template>
    <h1>{{ sum }}</h1>
    
    <button @click="sum++">add+1</button>
</template>

<script>
import { reactive, computed, ref, watch, onMounted, onBeforeUnmount } from 'vue';
import usePoint from '../hooks/usePoint.js'
export default {
    name: 'Hello',
    setup() {
        let sum = ref(0);
        let point = usePoint();
        return {
            sum,
            point
        };
    }
};
</script>
