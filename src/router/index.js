import { createRouter, createWebHistory } from "vue-router"; //import router
//import component
import AboutView from "@/components/views/AboutView.vue";
import SawahView from "@/components/views/SawahView.vue";
import PantaiView from "@/components/views/PantaiView.vue";
import PuraView from "@/components/views/PuraView.vue";
import GalleryView from "@/components/views/GalleryView.vue";
import HomeView from "@/components/views/HomeView.vue";

const routes = [ //membuat peta route
  { path: '/', name: 'Home', component: HomeView },
  { path: '/gallery', name: 'Gallery', component: GalleryView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/sawah', name: 'Sawah', component: SawahView },
  { path: '/pantai', name: 'Pantai', component: PantaiView },
  { path: '/pura', name: 'Pura', component: PuraView },
];

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes
});
export default router;
