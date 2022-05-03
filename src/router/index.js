import { createRouter, createWebHistory } from "vue-router";
import HomexView from "./Home/";
import HomesView from "./Homes/";

const importRouter = [HomexView, HomesView];
const routes = [];

function allRoutersX (data) {
    for (const j in data) {
        const rt = data[j];
        for (const i in rt) {
            routes.push(rt[i]);
        }
    }
}
allRoutersX(importRouter);

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
