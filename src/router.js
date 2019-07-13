import Vue from "vue";
import Router from "vue-router";
import userPage from "./views/UserPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
  {
    path: "/",
    name: "userPage",
    component: userPage
  }
  ]
});
