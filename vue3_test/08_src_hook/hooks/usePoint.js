import {
    reactive,
    onMounted,
    onBeforeUnmount
} from 'vue';
//与vue2中的mixin类似
export default function () {
    let point = reactive({
        x: 0
    });

    function test(e) {
        point.x = e.pageX + 'px';
        console.log(e.pageX);
    }
    onMounted(() => {
        document.addEventListener('click', test);
    });
    onBeforeUnmount(() => {
        document.removeEventListener('click', test);
    });
    return point;
}
