import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./config/axiosApi";
import packLaguages from "@/lang/";
import resquesMixin from "@/libGlobal/resques";
import resquesAMixin from "@/libGlobal/resquesA";

window.laguages = packLaguages;
window.langLocal = (window.localStorage.getItem("langLocal") !== null) ? window.localStorage.getItem("langLocal") : "en"; // en | es
window.messages = {
    "en": {lang: window.laguages.en},
    "es": {lang: window.laguages.es}
};
window.lang = window.messages[window.langLocal].lang;

createApp(App)
    .mixin(resquesMixin)
    .mixin(resquesAMixin)
    .use(store)
    .use(router)
    .mount("#app");
