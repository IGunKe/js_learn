<template>
    <h1>{{ msg }}</h1>
    <slot></slot>
    <br>
    <button @click="test">add</button>
    
</template>

<script>
export default {
    name: 'Hello',
    props: ['msg'],
    emits: ['hello'],
    setup(props, context) {
        function test() {
            context.emit('hello')
        }
        return {
            test
        }
    }
};
</script>
