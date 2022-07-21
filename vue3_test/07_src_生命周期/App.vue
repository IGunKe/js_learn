<template>
    <button @click="toggle">toggle</button>
    <Hello v-if="isShow" />
</template>

<script>
import Hello from './components/Hello.vue';
import { onBeforeMount, onMounted, onUnmounted, ref } from 'vue';
export default {
    name: 'App',
    components: {
        Hello
    },
    setup() {
        let isShow = ref(true);
        function toggle() {
            if (isShow.value === true) {
                isShow.value = false;
            } else {
                isShow.value = true;
            }
        }
        //生命周期组合式api
        onBeforeMount(() => {
            //函数体
            console.log('---beforeMount---');
        });
        onMounted(() => {
            console.log('---mounted---');
        });
        onUnmounted(() => {
            console.log('---unmounted---');
        });
        return {
            isShow,
            toggle
        };
    },
    beforeCreate() {
        console.log('---beforeCreate---');
    },
    created() {
        console.log('---created---');
    },
    beforeMount() {
        console.log('---beforeMount---');
    },
    mounted() {
        console.log('---mounted---');
    },
    beforeUnmount() {
        console.log('---beforeUnmount---');
    },
    unmounted() {
        console.log('---unmounted---');
    }
};
</script>

<style></style>
