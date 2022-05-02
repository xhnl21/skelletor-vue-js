import HomeDash from "../../views/Home/Home.vue";
import HomeAbout from "../../views/Home/HomeAbout.vue";
const routes = [
    {
        path: "/",
        name: "HomeDash",
        component: HomeDash,
        meta: { requiresAuth: false }
    },
    {
        path: "/about",
        name: "about",
        component: HomeAbout,
        meta: { requiresAuth: false }
    }
];
export default routes;