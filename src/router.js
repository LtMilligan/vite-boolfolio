import { createRouter, createWebHistory } from "vue-router";
import PageProjects from "./pages/PageProjects.vue";
import Homepage from "./pages/Homepage.vue";
const router = createRouter({
    history: createWebHistory(),
    routes: [{
        path: '/',
        name: 'homepage',
        component: Homepage,
    },
    {
        path: '/myprojects',
        name: 'myprojects',
        component: PageProjects
    }]
})
export { router };