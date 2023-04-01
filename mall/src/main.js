import { createApp } from 'vue'
import App from './App.vue'
import { // 按需加载vant 组件
    Swipe,
    SwipeItem
} from 'vant'
import 'vant/lib/index.css'
import './assets/main.css'  // reset 
import 'lib-flexible/flexible'  // 移动端适配就做好了
import router from './router'   // 启动路由
// - 启用全家桶
//     router
//     store 
// 
// reset?  准备
// html  fontSize? rem 自适应 
const app = createApp(App)

app
    .use(Swipe)  // 
    .use(SwipeItem)
    // .use()
    .use(router) // SPA
app
    .mount('#app')