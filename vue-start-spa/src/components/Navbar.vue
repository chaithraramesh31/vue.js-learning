<template>
    <nav 
    :class="[`navbar-${theme}`,`bg-${theme}`, 'navbar', 'navbar-expand-lg']"
    >
        <div class="container-fluid">
            <a class="navbar-brand" href="#">My Vue</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li v-for="(page, index) in publishedPages" class="nav-item" :key="index"> -->
                <!-- <a 
                    class="nav-link" 
                    :class="{active: activePage == index}"
                    aria-current="page" 
                    :href="page.link.url"
                    :title="`This link goes to the ${page.link.text} page`"
                    @click.prevent="navLinkClick(index)"
                >{{ page.link.text }}</a> -->
                <!-- v-bind: is same as : and v-on:click="" is same as @-->
                <navbar-link
                v-for="(page, index) in publishedPages" class="nav-item" :key="index"
                :page="page"
                :index="index"
                ></navbar-link>
                <li>
                    <router-link 
                        to="/pages"
                        class="nav-link" 
                        active-class="active emphasize"
                        aria-current="page" 
                    >Pages</router-link> 
                </li>
            <!-- </li> -->
            </ul>
            <form class="d-flex">
                <button class="btn btn-primary" @click.prevent="changeTheme()">Toggle Navbar</button>
            </form>
        </div>
    </nav>
</template>

<script>
import NavbarLink from './NavbarLink.vue'
export default {
    components: {
        NavbarLink
    },
    inject: ['$pages'],
    created(){
        this.getThemeSetting();
        this.pages = this.$pages.getAllPages();
    },
    computed: {
        publishedPages() {
            return this.pages.filter(p => p.published)
        }
    },
    data() {
        return {
            theme: 'dark',
            pages: []
        }
    },
    methods: {
        changeTheme() {
            // let theme = 'light'
            if(this.theme == 'light'){
                this.theme = 'dark'
            }else{
                this.theme = 'light'
            }
            // this.theme = theme
            this.storeThemeSetting()
        },
        storeThemeSetting() {
            localStorage.setItem('theme', this.theme)
        },
        getThemeSetting() {
            let theme = localStorage.getItem('theme');
            if(theme){
                this.theme = theme;
            }
        }
    }
}
</script>
