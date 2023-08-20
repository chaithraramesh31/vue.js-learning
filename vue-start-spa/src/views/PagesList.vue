<template>
    <div>
        <p>{{data.counter}}</p>
        <button @click.prevent="click" class="btn btn-primary">Increment</button>
    </div>
</template>

<script setup>
import {ref, reactive} from 'vue';
// const counter = ref(0); // this is similar to {value: 0}
const data = reactive({counter: 0});
function click() {
    // counter.value++
    data.counter++;
}
// export default {
//     data() {
//         return {
//             counter: 0
//         }
//     },
//     methods: {
//         click(){
//             this.counter++;
//         }
//     },
// }
</script>