import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入主样式文件
import './index.scss'
import Button from './button'

createApp(App).use(Button).mount('#app')
