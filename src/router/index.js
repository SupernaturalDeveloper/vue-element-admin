import Vue from 'vue'
import VueRouter from 'vue-router'

const HomeView = () => import("@/views/home/HomeView")
const LoginView = () => import("@/views/login/LoginView")
const OverView = () => import("@/views/home/components/OverView")
const RegisterView = () => import("@/views/home/components/RegisterView")
const ManagementView = () => import("@/views/home/components/ManagementView")
const DictionariesView = () => import("@/views/home/components/DictionariesView")
Vue.use(VueRouter)
const routes = [

  {
    path: "/home",
    component: HomeView,
    children: [
      {
        path: "",
        component: OverView
      }, {
        path: "register",
        component: RegisterView
      }, {
        path: "management",
        component: ManagementView
      }, {
        path: "dictionaries",
        component: DictionariesView
      }

    ]
  },
  {
    path: "/",
    name: "login",
    component: LoginView
  }

]

const router = new VueRouter({
  routes,
  mode: "history"
})

export default router
