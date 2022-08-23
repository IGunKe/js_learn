<template>
    <slot name="qwe"></slot>
    姓：<input type="text" v-model="person.firstName" /><br />
    名：<input type="text" v-model="person.lastName" /><br />
    <small>全名: {{ person.fullName }}</small><br>
    <input type="text" v-model="person.fullName" />
</template>

<script>
import { reactive, computed } from 'vue';

export default {
    name: 'Demo',
    // computed: {
    //     fullName() {
    //         return this.person.firstName + ' ' + this.person.lastName;
    //     }
    // },
    setup(props, context) {
        let person = reactive({
            firstName: '张',
            lastName: '三'
        });
        // //简写，未考虑修改情况
        // person.fullName = computed(() => {
        //     return person.firstName + " " + person.lastName
        // })

        person.fullName = computed({
            get() {
                return person.firstName + ' ' + person.lastName;
            },
            set(value) {
                const newName = value.split(' ');
                person.firstName = newName[0];
                person.lastName = newName[1];
            }
        });

        return {
            person
        };
    }
};
</script>