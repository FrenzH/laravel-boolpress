import Vue from "vue";
import VueRouter from "vue-router";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import PostsIndex from "./pages/PostsIndex";
import PostsDetail from "./pages/PostsDetail";
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/", name: "home", component: Home },
        {
            path: "/posts",
            name: "posts-index",
            component: PostsIndex,
        },
        {
               path:"/posts/:id",
               name:"posts-detail",
               component:PostsDetail
        },

        { path: "/about", name: "about", component: About },
        { path: "/contacts", name: "contacts", component: Contacts },

    ],
});

export default router;
