<template>
    <li
        class="content-list animate__animated animate__zoomIn"
        :class="changeColor"
    >
        <span @click="doOk" :class="!list1.flag ? 'delText' : ''">{{
            list1.content
        }}</span>
        <div id="btn">
            <button
                class="iconfont icon-shanchu btn-color1"
                @click="delNote(list1.name)"
            ></button>
            <button
                class="iconfont icon-bianji btn-color2"
                @click="editNote(list1)"
            ></button>
        </div>
    </li>
</template>
<script setup>
import { getCurrentInstance, inject, onBeforeMount, onMounted, reactive } from 'vue';
const data = defineProps({
    list1: {
        default: [],
        type: Object
    },
    changeColor: {
        type: String
    }
});

//console.log(data.changeColor);
// console.log(data.list1);
const emit = defineEmits(['doOk', 'delNote', 'editNote']);
const doOk = () => {
    emit('doOk', data.list1.name);
};
//console.log(list);
const delNote = (val) => {
    emit('delNote', val);
};
const editNote = (val) => {
    emit('editNote', val);
};
</script>
<style lang="scss" scoped>
.content-list {
    display: inline-block;
    margin-top: 20px;
    width: 100%;
    height: 40px;
    background-color: $content-color;
    color: $font-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > span {
        display: inline-block;
        width: 80%;
        height: 40px;
        text-align: left;
        line-height: 40px;
        margin-left: 10px;
        color: $font-color;
        font-size: 14px;
        &.delText {
            text-decoration: line-through;
        }
    }
    #btn {
        button {
            margin-left: 5px;
            margin-right: 5px;
            background-color: transparent;
            cursor: pointer;
        }
        .btn-color1 {
            color: red;
        }
        .btn-color2 {
            color: #22c45e;
        }
    }
    &::before {
        content: '';
        display: inline-block;
        width: 6px;
        height: 100%;
        background-color: red;
    }
}
.do-color {
    &::before {
        background-color: red;
    }
}
.done-color {
    &::before {
        background-color: #22c45e;
    }
}
</style>
