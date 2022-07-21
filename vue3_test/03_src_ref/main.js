import { createApp } from 'vue';
// vue3不在使用vue构造函数，通过工厂函数createApp直接使用
import App from './App.vue';
//实例化
const app = createApp(App);
//挂载
app.mount('#app');

/* const vm = new Vue({
    el: '#app',
    render: (h) => h(App)
});
 */
console.log(app);
