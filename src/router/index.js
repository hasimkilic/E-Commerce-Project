import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/HomeView.vue"
import ProductDetail from "../views/ProductDetailView.vue";
import Login from "../views/LoginView.vue";
import Register from "../views/RegisterView.vue";
import GroceryCart from "../views/GroceryCartView.vue"

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: Home
  },
  {
    path:"/login",
    name:"LoginView",
    component: Login
  },
  {
    path:"/register",
    name:"RegisterView",
    component:Register
  },
  {
    path:"/urun/:title",
    name:'ProductDetailView',
    component: ProductDetail
  },
  {
    path:"/sepetim",
    name:"GroceryCartView",
    component: GroceryCart
  }
  
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
export default router;