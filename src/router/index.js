import Vue from 'vue'
import VueRouter from 'vue-router'

const HomeView = () => import("@/views/home/HomeView")
const LoginView = () => import("@/views/login/LoginView")
Vue.use(VueRouter)

const routes = [

  {
    path: "/",
    redirect: "home"
  },
  {
    path: "/home",
    name: "home",
    component: HomeView
  },
  {
    path: "/login",
    name: "login",
    component: LoginView
  }
>>>>>>> dev
]

const router = new VueRouter({
  routes
})

export default router
