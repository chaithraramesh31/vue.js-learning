import { createRouter, createWebHashHistory } from "vue-router";
import PageView from './components/PageView.vue';
import CreatePage from './components/CreatePage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: PageView},
        {path: '/create', component: CreatePage}
    ]
})

export default router;