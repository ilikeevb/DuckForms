import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'
import Create from '../views/Create.vue'
import Form from '../views/Form.vue'
import MyForm from '../views/MyForm.vue'
import MyForms from '../views/MyForms.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/admin', name: 'Admin', component: Admin },
  { path: '/about', name: 'About', component: About },
  { path: '/create/:id', name: 'Create', component: Create },
  { path: '/myforms', name: 'MyForms', component: MyForms },
  { path: '/myform/:id', name: 'MyForm', component: MyForm },
  { path: '/form/:id', name: 'Form', component: Form },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
