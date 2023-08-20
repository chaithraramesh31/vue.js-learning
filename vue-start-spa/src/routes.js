import { createRouter, createWebHashHistory } from "vue-router";
import PageView from './components/PageView.vue';
import CreatePage from './components/CreatePage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/:index?', component: PageView, props: true},
        {path: '/create', component: CreatePage}
    ]
})

export default router;