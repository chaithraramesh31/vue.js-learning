<template>
    <!-- <p>edit {{props.index}}</p> -->
    <p>edit {{route.params.index}}</p>
</template>

<script setup>
import {useRoute} from 'vue-router';

const route = useRoute();
// const props = defineProps(['index']);
</script>