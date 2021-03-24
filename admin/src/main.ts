import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from '@/plugins/element'
import '@/assets/less/style.less'

const app = createApp(App)
app.use(store)
app.use(router)
// 添加 element 组件
element(app)
app.mount('#app')
