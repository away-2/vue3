// 路由对象
// 路由类型的设置
// 数组的配置
// 路由的懒加载
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue' // 页面级别组件  路径 ../ 相对

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',   // 根路径   login 
            // http  状态码  3XX  跳转  向浏览器发送了一个3XXhttp状态码
            redirect: '/home'  // 跳转
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        }
    ]
})

export default router