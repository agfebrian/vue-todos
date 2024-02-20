import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { BiPencilFill, BiTrashFill, HiSearch, BiXLg } from 'oh-vue-icons/icons'

addIcons(BiPencilFill, BiTrashFill, HiSearch, BiXLg)

const app = createApp(App)

app.component('VIcon', OhVueIcon)
app.mount('#app')
