import { createWebHistory, createRouter } from "vue-router";
import Home from './pages/HomePage.vue';
import About from './pages/AboutPage.vue';
import Product from './pages/Product.vue';
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/product/:id",
    component: Product,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
