import { createRouter, createWebHistory } from 'vue-router'
import ClientForm from '../pages/ClientForm.vue'
import Dashboard from '../pages/Dashboard.vue'
import Meeting from '../pages/Meeting.vue'
import Appointment from '../pages/Appointment.vue'
import View_customer from '../pages/View_customer.vue'
import Settings from '../pages/Settings.vue'
import Meeting_detail from '../pages/Meeting_detail.vue'

// add other pages as needed
const routes = [
  { path: '/', component: Dashboard },
  { path: '/client-form', component: ClientForm },
  { path: '/meetings', component: Meeting},
  { path: '/appointment', component: Appointment},
  { path: '/view-customer', component: View_customer},
  { path: '/settings', component: Settings},
  { path: '/meeting-detail', component: Meeting_detail},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

