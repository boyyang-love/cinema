import Vue from "vue";
import VueRouter from "vue-router";
import MovieRouter from "./movie";
import MineRouter from "./mine";
import CinemaRouter from "./cinema";

Vue.use(VueRouter);

const routes = [
  MovieRouter,
  MineRouter ,
  CinemaRouter,
  {
    path:'/*',
    redirect:'/movie'
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass:"active"
});

export default router;
