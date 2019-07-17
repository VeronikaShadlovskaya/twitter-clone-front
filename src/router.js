import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login.vue";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
    import("./components/Register.vue")
  },
  {
    path:"/userPage",
    name:"userPage",
    component: () =>
    import("./views/UserPage.vue")
  }
  ]
});
