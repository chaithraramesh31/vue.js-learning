<template>
    <div>
        <navbar></navbar>
        <router-view></router-view>
        <!-- <page-view 
            :page="pages[activePage]"
        ></page-view>
        <create-page
            @page-created="pageCreated"
        ></create-page> -->
    </div>
</template>
<!-- v-if="pages.length > 0" -->
<script>
import Navbar from './components/Navbar.vue';
export default {
    components: {
        Navbar
    },
    methods: {
        async getPages() {
            let res = await fetch('pages.json');
            let data = await res.json();
            this.pages = data;
        },
        pageCreated(pageObj) {
            this.pages.push(pageObj);
        },
    }
}
</script>