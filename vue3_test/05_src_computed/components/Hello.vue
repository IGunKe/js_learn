<template>
    <h1>{{ person.firstName }}</h1>
    <h1>{{ person.age }}</h1>
    <input type="text" v-model="person.firstName" />
    <br />
    <input type="text" v-model="person.age" />
    <h1>{{ person.fullName }}</h1>
</template>

<script>
import { reactive, computed } from 'vue';
export default {
    name: 'Hello',
    setup() {
        let person = reactive({
            firstName: 'xdj',
            age: 22
        });
        // person.fullName = computed(() => {
        //     return `hello + ${person.firstName}`;
        // });
        person.fullName = computed({
            get() {
                return `hello + ${person.firstName}`;
            },
            set(value) {
                
            }
        });
        return {
            person
        };
    }
};
</script>
