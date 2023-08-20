<template>
    <div class="container">
        <h1>Page Title</h1>
        <p>{{$route.params.index}}</p>
        <!-- <h1>{{page.pageTitle}}</h1>
        <p>{{page.content}}</p> -->
    </div>
</template>

<script>
export default {
 created(){
    // console.log(this.$route.params);
 }
}
</script>