<template>
  <div class="continer mb-5">
    <nav-bar></nav-bar>
    <div style="max-width: 90%; width: 500px; margin: auto">
      <b v-if="$state.loading">loading</b>
    </div>
  </div>
</template>

<script setup>
import NavBar from './src/components/NavBar.vue';
import { reactive, onMounted } from 'vue' // composition  api
import API from './src/api/index'

// 状态可改变 
const state = reactive ({
  loading: true,
  posts:[]
})

onMounted(() =>{
  console.log('挂载了....')
  // API.getTopStories()
})

</script>

<style>
</style>
