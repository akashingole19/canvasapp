import Home from '@/views/Home.vue'
import ImageComponent from '@/components/ImageComponent.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/image/:fullName', name: 'Image', component: ImageComponent, props: true },
  ]

  const router = createRouter({
    history: createWebHistory(),
    routes, 
 })

  export default router