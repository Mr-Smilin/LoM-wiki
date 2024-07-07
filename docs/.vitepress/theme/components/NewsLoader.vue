<script setup>
    import {fs} from 'fs';

    //read json whose path '/docs/other/news/newsList.json'

    try {
        const newsObjects = fs.readFileSync('/docs/other/news/newsList.json', 'utf-8');
        console.log(newsObjects);
    } catch (err) {
        console.error(err);
    }
</script>

<template>
    <div v-for="newsObject in newsObjects"><!--newsObject--></div>
</template>

<style scoped>

</style>