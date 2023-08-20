<template>
    <div>
        <h4>Pages</h4>
        <div class="text-end">
            <router-link to="/pages/create" class="btn btn-primary btn-sm">
                New Page
            </router-link>
        </div>
        <table class="table table-hover">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Link Text</th>
                    <th>Is Published</th>
                </tr>
            </thead>
            <tbody>
                <tr
                    v-for="(page, index) in $pages.getAllPages()"
                    :key="index"
                    @click.prevent="goToPage(index)"
                >
                    <td>{{page.pageTitle}}</td>
                    <td>{{page.link.text}}</td>
                    <td>{{page.published ? 'Yes' : 'No'}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import {ref, reactive, inject} from 'vue';
import {useRouter} from 'vue-router';

const $pages = inject('$pages');
const router = useRouter();
function goToPage(index) {
    router.push({path: `pages/${index}/edit`})
}





// const counter = ref(0); // this is similar to {value: 0}
// const data = reactive({counter: 0});
// function click() {
//     // counter.value++
//     data.counter++;
// }
</script>

<style scope>
    td:hover {
        cursor: pointer;
    }
</style>