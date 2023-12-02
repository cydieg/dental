import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'

//Admin
import Appointment from '../views/Admin/Appointment.vue'
import Chat from '../views/Admin/Chat.vue'
import ClinicManagement from '../views/Admin/ClinicManagement.vue'
import Mapping from '../views/Admin/Mapping.vue'
import Statistics from '../views/Admin/Statistics.vue'
import Visualization from '../views/Admin/Visualization.vue'
import DoctorManagement from '../views/Admin/DoctorManagement.vue'
import StaffManagement from '../views/Admin/StaffManagement.vue'
import PatientManagement from '../views/Admin/PatientManagement.vue'
import Dashboard from '../views/Admin/Dashboard.vue'
import Report from '../views/Admin/Report.vue'

//Staff
import StaffDashboard from '../views/Staff/StaffDashboard.vue'
import scheduling from '../views/Staff/scheduling.vue'
import StaffChat from '../views/Staff/StaffChat.vue'

//Patient
import PatientDashboard from '../views/Patient/PatientDashboard.vue'
import PatientAppointment from '../views/Patient/PatientAppointment.vue'
import PatientChat from '../views/Patient/PatientChat.vue'
import PatientMapping from '../views/Patient/PatientMapping.vue'



const routes = [
  {
    path: '/',
    name: 'Landing Page',
    component: LandingPage
  },

  //Admin
  {
    path: '/dashboard/appointment',
    name: 'appointment',
    component: Appointment
  },
  {
    path: '/dashboard/chat',
    name: 'chat',
    component: Chat
  },
  {
    path: '/dashboard/clinic_management',
    name: 'clinic_management',
    component: ClinicManagement
  },
  {
    path: '/dashboard/mapping',
    name: 'mapping',
    component: Mapping
  },
  {
    path: '/dashboard/statistics',
    name: 'statistics',
    component: Statistics
  },
  {
    path: '/dashboard/visualization',
    name: 'visualization',
    component: Visualization
  },
  {
    path: '/dashboard/clinic_management/staff_management',
    name: 'staff_management',
    component: StaffManagement
  },
  {
    path: '/dashboard/clinic_management/doctor_management',
    name: 'doctor_management',
    component: DoctorManagement
  },
  {
    path: '/dashboard/clinic_management/patient_management',
    name: 'patient_management',
    component: PatientManagement
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard/report',
    name: 'report',
    component: Report
  },

  //Staff
  {
    path: '/staff_dashboard',
    name: 'staff dashboard',
    component: StaffDashboard
  },
  {
    path: '/staff_dashboard/staff_scheduling',
    name: 'staff scheduling',
    component: scheduling
  },
  {
    path: '/staff_dashboard/staff_chat',
    name: 'staff chat',
    component: StaffChat
  },

  //Patient
  {
    path: '/patient_dashboard',
    name: 'patient dashboard',
    component: PatientDashboard
  },
  {
    path: '/patient_dashboard/patient_appointment',
    name: 'patient_appointment',
    component: PatientAppointment
  },
  {
    path: '/patient_dashboard/patient_chat',
    name: 'patient_chat',
    component: PatientChat
  },
  {
    path: '/patient_dashboard/patient_mapping',
    name: 'patient_mapping',
    component: PatientMapping
  },

 
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
