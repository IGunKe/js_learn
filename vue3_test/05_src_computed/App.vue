<template>
    <Hello/>
</template>

<script>
import Hello from './components/Hello.vue';
export default {
    name: 'App',
    components: {
        Hello
    },
    setup() {
        function hello() {
            alert('hello');
        }
        return {
            hello
        };
    }
};
</script>

<style></style>
