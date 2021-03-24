import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from '@/plugins/element'
import '@/assets/less/style.less'

const app = createApp(App)
// 添加 element 组件
element(app)
app.use(store)
app.use(router)
app.mount('#app')
