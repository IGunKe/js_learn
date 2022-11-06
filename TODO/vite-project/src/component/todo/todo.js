import { ref, onUpdated, reactive, onMounted, provide, nextTick } from 'vue';
// 用户输入
const inputStr = ref('');
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

onMounted(() => {
    count.value = localStorage.getItem('count');
    if (JSON.parse(localStorage.getItem('list')) === null) {
        return;
    }
    inputList.push(...JSON.parse(localStorage.getItem('list')));
    //console.log(...inputList);
    otherList.push(...inputList);
});
onUpdated(() => {
    //console.log(inputStr.value);
});
const addList = () => {
    let str = 'text' + count.value;
    //console.log(str);
    //存入消息
    //存入消息索引
    if (inputStr.value === '') {
        return;
    }
    inputList.push({
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
const getDo = () => {
    otherList.splice(0);
    inputList.forEach((item) => {
        if (item.flag === 1) {
            otherList.push(item);
        }
    });
};
const getDone = () => {
    otherList.splice(0);
    inputList.forEach((item) => {
        if (item.flag === 0) {
            otherList.push(item);
        }
    });
};
const getAll = () => {
    otherList.splice(0);
    inputList.forEach((item) => {
        otherList.push(item);
    });
};
//编辑
const editList = () => {
    inputList.forEach((item) => {
        if (item.name === flagName.value) {
            item.content = inputStr.value;
            localStorage.setItem('list', JSON.stringify(inputList));
            inputStr.value = '';
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
export default {
    addList,
    getDo,
    getEdit,
    getDel,
    getCount,
    editList,
    getAll,
    getDone
};
