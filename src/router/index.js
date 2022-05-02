import { createRouter, createWebHistory } from "vue-router";
import HomexView from "./Home/";
import HomesView from "./Homes/";

const routes = [];

function allRouters (data) {
    const rt = data;
    for (const i in rt) {
        routes.push(rt[i]);
    }
}

allRouters(HomexView);
allRouters(HomesView);

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
