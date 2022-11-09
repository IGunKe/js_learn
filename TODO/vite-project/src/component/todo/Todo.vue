<template>
    <div class="container">
        <div class="box">
            <div class="container-box">
                <div class="header">
                    <span class="iconfont icon-caidan"> To Do List</span>
                    <ul>
                        <li
                            @click="getDone"
                            :class="
                                isClick === 3 ? 'li-click-color' : 'li-color'
                            "
                        >
                            Done
                        </li>
                        <li
                            @click="getDo"
                            :class="
                                isClick === 2 ? 'li-click-color' : 'li-color'
                            "
                        >
                            Do
                        </li>
                        <li
                            @click="getAll"
                            :class="
                                isClick === 1 ? 'li-click-color' : 'li-color'
                            "
                        >
                            ALL
                        </li>
                    </ul>
                </div>
                <div class="input-content">
                    <input
                        type="text"
                        placeholder="Add new note"
                        v-model="inputStr"
                    />
                    <button @click="addList" v-if="isEdit" :class="btnAnimate">
                        ADD
                    </button>
                    <button
                        @click="editList"
                        v-if="!isEdit"
                        :class="btnAnimate"
                    >
                        EDIT
                    </button>
                </div>
                <div class="content">
                    <ul>
                        <List
                            v-for="(val, index) in otherList"
                            :list1="val"
                            :changeColor="
                                val.flag == 1 ? 'do-color' : 'done-color'
                            "
                            @doOk="getCount"
                            @delNote="getDel"
                            @editNote="getEdit"
                            :key="val.name"
                        />
                    </ul>
                </div>
            </div>
        </div>
        <dov class="warn">
            <ul>
                <Warn v-if="isWarn" @destroyCom="isOk"></Warn>
            </ul>
        </dov>
    </div>
</template>
<script setup>
import List from '../list/List.vue';
import Warn from '../warn/Warn.vue';
import { ref, onUpdated, reactive, onMounted } from 'vue';
import { useInputStore } from '../../store/store.js';
const inputStore = useInputStore();
// 用户输入
const inputStr = ref('');
// console.log(inputStr);
onUpdated(() => {
    //console.log(inputStr);
})
// 用户输入存储列表
const inputList = reactive([]);
// 计数
const count = ref(1);
// 是否处于编辑状态
const isEdit = ref(1);
// 被编辑的标识
const flagName = ref('');
//分类
const otherList = reactive([]);
//warn
const isWarn = ref(false);
const isOk = (val) => {
    setTimeout(() => {
        isWarn.value = val.value;
    }, 1000);
    //console.log(val.value);
};
//按钮更改
const isClick = ref(1);

onMounted(() => {
    count.value = localStorage.getItem('count');
    if (JSON.parse(localStorage.getItem('list')) === null) {
        return;
    }
    inputList.push(...JSON.parse(localStorage.getItem('list')));
    //console.log(...inputList);
    otherList.push(...inputList);
});

const addList = () => {
    let str = 'text' + count.value;
    //console.log(str);
    //存入消息
    //存入消息索引
    if (inputStr.value === '') {
        //输空警告
        isWarn.value = true;
        return;
    }
    isWarn.value = false;

    inputList.push({
        name: str,
        content: inputStr.value,
        flag: 1,
        count: count
    });
    //分组，便于显示动态查找
    otherList.push({
        name: str,
        content: inputStr.value,
        flag: 1,
        count: count
    });
    localStorage.setItem('list', JSON.stringify(inputList));
    count.value++;
    localStorage.setItem('count', count.value);
    inputStr.value = '';
    
};
const getDone = () => {
    otherList.splice(0);
    isClick.value = 3;
    inputList.forEach((item) => {
        if (item.flag === 0) {
            otherList.push(item);
        }
    });
};
const getDo = () => {
    otherList.splice(0);
    isClick.value = 2;
    inputList.forEach((item) => {
        if (item.flag === 1) {
            otherList.push(item);
        }
    });
};

const getAll = () => {
    otherList.splice(0);
    isClick.value = 1;
    inputList.forEach((item) => {
        otherList.push(item);
    });
};
//编辑
const editList = () => {
    if (btnAnimate.length === 1) {
        btnAnimate.push('animate__pulse');
    } else {
        btnAnimate.pop();
        btnAnimate.push('animate__pulse');
    }
    inputList.forEach((item) => {
        if (item.name === flagName.value) {
            item.content = inputStr.value;
            localStorage.setItem('list', JSON.stringify(inputList));
            inputStr.value = '';
            isEdit.value = 1;
            return;
        }
    });
};
//provide('updateList', inputList);
//获取图标变色标识
const getCount = (val) => {
    //console.log(val);
    inputList.forEach((e) => {
        if (e.name === val) {
            if (e.flag === 0) {
                e.flag = 1;
                localStorage.setItem('list', JSON.stringify(inputList));
            } else {
                e.flag = 0;
                localStorage.setItem('list', JSON.stringify(inputList));
            }
            return;
        }
    });
};
//获取子组件发来的删除标识
const getDel = (val) => {
    for (let i = 0; i < inputList.length; i++) {
        if (inputList[i].name === val) {
            inputList.splice(i, 1);
            otherList.splice(i, 1);
            localStorage.setItem('list', JSON.stringify(inputList));
            return;
        }
    }
};
//获取子组件发来的编辑标识
const getEdit = (val) => {
    isEdit.value = 0;
    inputStr.value = val.content;
    flagName.value = val.name;
    //console.log(val);
};
</script>

<style scoped lang="scss">
@import './todo.scss';
</style>
