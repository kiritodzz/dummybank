import { createRouter, createWebHistory } from 'vue-router';
import BankCategoryForm from '../components/BankCategoryForm.vue';
import BankCategoryList from '../components/BankCategoryList.vue';
import MemberRegistrationForm from '../components/MemberRegistrationForm.vue';
import MemberInfoList from '../components/MemberInfoList.vue';
import MemberProfile from '../components/MemberProfile.vue';

const routes = [
  {
    path: '/',
    redirect: '/bank-category-form'
  },
  { path: '/bank-category-form', component: BankCategoryForm },
  { path: '/bank-category-list', component: BankCategoryList },
  { path: '/member-registration-form', component: MemberRegistrationForm },
  { path: '/member-info-list', component: MemberInfoList },
  { path: '/member-profile', component: MemberProfile },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
