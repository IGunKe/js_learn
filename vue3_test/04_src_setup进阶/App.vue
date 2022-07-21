<template>
    <Hello msg="hello" @hello="hello">
        <span>hello world</span>
    </Hello>
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
