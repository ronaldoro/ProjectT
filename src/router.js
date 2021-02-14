import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);

const router = new VueRouter( {
    mode: "history",
    routes: [{
        path:"/", 
        component: Home
    }, //기본 path일 경우 Home을 Load하겠다
    {
        path:"/about",
        component: About
    }
    ]
});

export default router;