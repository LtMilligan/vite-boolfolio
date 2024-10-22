import { createRouter, createWebHistory } from "vue-router";
import PageProjects from "./pages/PageProjects.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'Homepage',
        component: PageProjects,
    }]
})
export { router };