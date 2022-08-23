<script>
import Demo from './components/Demo.vue';
export default {
    name: 'App',
    components: {
        Demo
    },
    setup() {}
};
</script>

<template>
    <Demo>
        <template v-slot:qwe>
            <h1>hello</h1>
        </template>
    </Demo>
</template>

<style scoped></style>