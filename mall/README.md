# vue3 写商城
- 简历需要

- 商业应用npm包
    - vant 有赞，  移动商城组件库
    - lib-flexible   移动适配库
    - vue-router  路由  

- 架构（目录的意义）
     vite  工程化   项目模板
     - src   开发目录
         - assets  静态资源目录
               css  image
               main.css  base.css  @import  模块化
         - views  页面级别组件

- 全家桶
    - vue-router
        - redirect
           流程如下
           - 用户通过访问 / 来到  /   path：'/'  -> /
           -假如  component: Home.vue  200 状态码表示成功
           - 但是 redirect 
                  没有直接给浏览器响应
                  给浏览器发送了一个跳转指令
                  再次发出请求 ！    /home    如何跳转？  在浏览器network之中可见 状态码 
                     200 – 服务器成功返回网页
                     404 – 请求的网页不存在
                     503 – 服务器超时
                    
                     2xx （成功）
                     表示成功处理了请求的状态码。

                     3xx （重定向）
                     要完成请求，需要进一步操作。

                     4xx（请求错误）
                     这些状态码表示请求可能出错，妨碍了服务器的处理

                     5xx（服务器错误）
                     这些状态码表示服务器在处理请求时发生内部错误。这些错误可能是服务器本身的错误，而不是请求出错。

- stylus
    css 全新写法， 写起来更快， 很多的高级功能
    - npm  i  stylus
          安装stylus   css  预编译器
          用全新的写法来写css， stylus， 帮我们自动编译成css

    - .vue style  lang="stylus"
    - 不用写{}  : ;  快速
        写了也没事
    - 表达父子元素的元素   css 模块
        缩进   自动加上父元素的限定

- main.js   入口文件，有哪些工作
       全局性视野
       - 完整的vue  全家桶
              router  SAP
       - 组件库
            vant element3  element-plus
            按需加载
            css库文件
       - css  准备工作
           - main.css
               - reset 
                - *, *:before, *:after  伪元素也要选中
                - 移动端box-sizing: border-box  IE盒模型   更有利于布局
                - font-family  -apple-system  PC  微软雅黑  sans-serif
                - 高分辨率手机   抗锯齿  让文字更清晰
                    text-rendering
                    -webkit-font-smoothing: antialiased;
            - 全局css   变量的申明   主题及样式的管理，   复用
       - 图标字体库     <link rel="stylesheet" href="https://at.alicdn.com/t/font_1623819_3g3arzgtlmk.css">
            iconfont
            引入第三方  link 
           - 移动应用 
               rem   适配   html fontsize  动态  1rem = 设计稿的多少 ？  750px   1rem = 75 
               第三方库  lib-flexible
               Mobile First   移动应用80%
               PC  工作   管理   后台

               
