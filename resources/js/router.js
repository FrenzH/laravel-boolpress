import Vue from "vue";
import VueRouter from "vue-router";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/", name: "home", component: Home },

        { path: "/about", name: "about", component: About },
        { path: "/contacts", name: "contacts", component: Contacts },

    ],
});

export default router;
