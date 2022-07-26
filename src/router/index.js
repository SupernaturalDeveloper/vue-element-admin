import Vue from 'vue'
import VueRouter from 'vue-router'

const HomeView = () => import("@/views/home/HomeView")
const LoginView = () => import("@/views/login/LoginView")
Vue.use(VueRouter)

const routes = [

  {
    path: "/home",
    name: "home",
    component: HomeView
  },
  {
    path: "/",
    name: "login",
    component: LoginView
  }
>>>>>>> dev
]

const router = new VueRouter({
  routes
})

export default router
