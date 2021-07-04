import { createRouter, createWebHistory } from "vue-router";
import Teams from "../views/Teams.vue";
import Matches from "../views/Matches.vue";
import Athletes from "../views/Athletes.vue";
import AthleteProfile from "../views/AthleteProfile.vue";

const routes = [
  {
    path: "/teams",
    name: "Teams",
    component: Teams,
  },
  {
    path: "/matches",
    name: "Matches",
    component: Matches,
  },
  {
    path: "/athletes",
    name: "Athletes",
    component: Athletes,
  },
  {
    name: "AthleteProfile",
    path: "/athletes/:id/profile",
    component: AthleteProfile,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
