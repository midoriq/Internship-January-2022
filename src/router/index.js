import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Archive from "../views/Archive.vue";
import Cities from "../views/Cities.vue";
import Add from "../views/Add.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/archive",
        name: "Archive",
        component: Archive,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/cities",
        name: "Cities",
        component: Cities,
    },
    {
        path: "/add",
        name: "Add",
        component: Add,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
