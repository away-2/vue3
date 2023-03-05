# vue3
学习vue3
# Vue的世界
    可以从小程序迁移过来
    - 组件思想   components
       wxml + wxss + js  可复用的组件
       页面由组件构成，比标签高一个级别
    - 数据驱动思想  不需要找DOM节点， setData() 自动更新 ?
    - wx:for 指令  v-for
    - 路由 
        /pages + app.json tabbar  目录下就是页面路由
        wx.navigator({
            url:''
        })
        vue ? vue-router 

- 现代web App单页应用  SPA  Single  Page  Application   10年   6年
     vue   https://unpkg.com/vue@next
     - 根节点  启动我们的web App

- Vue
    1. 现代当红的前端框架， 好学， 简单
    2. 组件化， 数据驱动  思想
    3. Vue  是命名空间
          Vue.
    4. Vue.version  vue  最新版  vue3
    5. 对照小程序， 迁移学习
         - template  wxml
          模板{{}}  组件  指令.....
        - js   data（）{

        }

- v-on:click    @click  代替   
     this.content = ''  this  直接引用 data 里的数据
     this.$data.content = ''
     vue ?  比react 更友好， 方便入门， 学习成本低
     API  设计人性化  
     v-on:   事件绑定    v-bind：  值绑定

- Vue  底层源码
   1. data {}  如何被监听， 重新编译模板？  Proxy  es6
   2. Vue  世界为什么要杜绝DOM  编程  #app   ?
         DOM  编程慢...

- 占位符与数据绑定的区别
     普通的html  里输出的   占位符{{}}
     标签的属性   或组件的props 里  数据绑定
     - v-bind：value 绑定值  ：value   v-bind可省略 单向数据绑定
         v-on:input  绑定事件   v-on  简写为@
     - 单向数据 ？
          v-bind:value  +  v-on:input   复杂  出现在  表单元素中
     - 双向数据绑定
         v-model =  v-bind:value + v-on:input



writable（可写）、enumerable（可枚举/可遍历）和configurable（可配置）。
aaaaa





