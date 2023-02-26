<template>
<div class="continer mb-5">
    <nav-bar></nav-bar>
<div style="max-width: 90%;width: 500px;margin: auto;">
<b v-if="loading">loading</b>
</div>
</div>
</template>
<script>
import NavBar from './src/components/NavBar.vue';

// 放弃使用vue3  setup语法
// vue 2 繁琐 ， 为了面向对象而面向对象
export default{
    data(){
        return {
            loading:true
        }
    },
    components:{
        'nav-bar':NavBar
    },
    // 生命周期
    mounted(){
        console.log('挂载了......')
    }
}
</script>
<style>

</style>
