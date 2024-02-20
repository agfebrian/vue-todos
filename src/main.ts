import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiPencilFill, BiTrashFill } from 'oh-vue-icons/icons'

addIcons(BiPencilFill, BiTrashFill)

const app = createApp(App)

app.component('VIcon', OhVueIcon)
app.mount('#app')
