<template>
    <li class="warning iconfont icon-0-31" ref="warn" :class="animateChange">
        Please enter the content
    </li>
</template>
<script setup>
import { onMounted, reactive,ref} from 'vue';

const animateChange = reactive(['animate__animated']);
//加载进入动画

const isOk = ref(true);
const emit = defineEmits(['destroyCom']);
onMounted(() => {
    isOk.value = false;
    if (animateChange.length === 1) {
        animateChange.push('animate__bounceInRight');
    } else {
        animateChange.pop();
        animateChange.push('animate__bounceInRight');
    }
    //加载离开动画
    setTimeout(() => {
        animateChange.pop();
        animateChange.push('animate__bounceOutRight');
        emit('destroyCom', isOk);
    }, 4000);
});
</script>

<style lang="scss">
.warning {
    display: inline-block;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    // transform: translateX(-240px);
    background-color: red;
    
}
</style>
