<template>
    <div class="product-detail">
        <simple-header name="商品详情"></simple-header>
        <div class="detail-content">
            <div class="detail-swipe-wrap">
                <van-swipe class="my-swipe" indicator="#1baeae">
                    <van-swipe-item
                        v-for="(item,index) in state.detail.goodsCarouselList"
                        :key="index" 
                    >
                        <img v-lazy="item" alt="">
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="product-info">
                <div class="product-title">
                    {{ state.detail.goodsName }}
                </div>
                <div class="product-desc">免邮费 顺丰快递</div>
                <div class="product-price">
                    <span>￥{{ state.detail.sellingPrice }}</span>
                </div>
            </div>
            <div class="product-intro">
                <ul>
                    <li>概述</li>
                    <li>参数</li>
                    <li>安装服务</li>
                    <li>常见问题</li>
                </ul>
                <div class="product-content" v-html=" state.detail.goodsDetailContent "></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue'
import { useRoute } from 'vue-router'
import { getDetail } from '@/service/detail'
import SimpleHeader from '../components/SimpleHeader.vue'
// router 是所有的route 集合

const route = useRoute(); // 当前的路由
const state = reactive({
    detail: {}
})

onMounted(async () => {
    // console.log(route);
    const { id } = route.params 
    const { data} = await getDetail(id)  // 异步
    state.detail = data 
})

</script>

<style lang="stylus" scoped>

</style>