import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import Login from '../pages/Login.vue'
import FirstPage from '../pages/FirstPage.vue'
import Dashboard from '../pages/Dashboard.vue'
import ClientForm from '../pages/ClientForm.vue'
import Meeting from '../pages/Meeting.vue'
import Appointment from '../pages/Appointment.vue'
import ViewCustomer from '../pages/View_customer.vue'
import Settings from '../pages/Settings.vue'

const routes = [
  { path: '/', name: 'FirstPage', component: FirstPage },
  { path: '/login', name: 'Login', component: Login },

  {
    path: '/',
    component: MainLayout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'client-form', component: ClientForm },
      { path: 'meetings', component: Meeting },
      { path: 'appointment', component: Appointment },
      { path: 'view-customer', component: ViewCustomer },
      { path: 'settings', component: Settings },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
