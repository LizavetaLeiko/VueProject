import { createApp } from 'vue'
import components from '@/components/ui/index'
import App from './App.vue'

const app = createApp(App)

components.forEach(item =>{
  app.component(item.name, item)
})

app.mount('#app')
