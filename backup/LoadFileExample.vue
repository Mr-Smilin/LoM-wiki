<script setup>
// this is an example for loading local file to do something
import axios from "axios";
import {withBase} from "vitepress";

var returnFileNameArray = [];
var newsObjects = [];
const sourceLink = withBase('/json/newsList.json');
getDialogueApi(sourceLink)
    .then(data => {
        // throw data into external array
        data.forEach((item) => {
            returnFileNameArray.push(item);
        })
    })
    .then(() => {
        // control process for logics
        returnFileNameArray.forEach((fileName) => {
            // target form <!--@include: ./parts/basics.md-->
            const PATH_TEMPLATE = '<!--@include: @/other/news/[fileName]-->';
            newsObjects.push(PATH_TEMPLATE.replace('[fileName]', fileName))
        });
        console.log("newsObjects");
        console.log({newsObjects});
    });

function getDialogueApi(source) {
    return axios.get(source)
        .then(response => {
            // get data
            return response.data;
        })
        .catch(error => {
            console.error('Error loading JSON file:', error);
        });

}
</script>

<template>
    <div v-for="(item, index) in newsObjects" :key="index">{{ item }}</div>
</template>

<style scoped>

</style>