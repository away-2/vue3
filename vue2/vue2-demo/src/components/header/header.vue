<template>
    <div class="header">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{ seller.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
     props: {
        seller : {
            type: Object
        }
     }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/stylus/mixin.styl';
.header
    position relative
    overflow hidden
    color #fff
    background rgba(7,17,27,0.5)
    .content-wrapper
        position relative
        padding 24px 12px 18px 24px 
        font-size 0
        .avatar
            display inline-block
            vertital-align top
            img 
                border-radius 2px 
        .content
            display inline-block
            margin-left 16px 
            .title
                margin 2px 0 8px 0
                .brand 
                    display inline-block
                    vertital-align top
                    width 30px
                    height 18px
                .name
                    margin-left 6px
                    font-size 16px
                    line-height 18px
                    font-weight bold

</style>