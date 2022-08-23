<template>
    <slot name="qwe"></slot>
</template>

<script>
export default {
    name: 'Demo',
    //与vue2相同
    props: ['msg'],
    //使用时用
    setup(props, context) {
        console.log(props.msg);
        console.log(context);
    }
};
</script>