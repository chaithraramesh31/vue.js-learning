import { createRouter, createWebHashHistory } from "vue-router";
import PageView from './views/PageView.vue';
import CreatePage from './views/CreatePage.vue';
import Pages from './views/Pages.vue';
import PagesList from './views/PagesList.vue';
import Editpage from './views/EditPage.vue';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/:index?', component: PageView, props: true},
        {
            path: '/pages',
            component: Pages,
            children:[
                {path: '', component: PagesList},
                {path: 'create', component: CreatePage},
                {path: ':index/edit', component: Editpage, props: true}
            ]
        } 
    ]
})

export default router;