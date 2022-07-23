<template>
    <button @click="toggle">toggle</button>
    <Hello v-if="isShow" />
</template>

<script>
import Hello from './components/Hello.vue';
import { ref } from 'vue';
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

        return {
            isShow,
            toggle
        };
    }
};
</script>

<style></style>
