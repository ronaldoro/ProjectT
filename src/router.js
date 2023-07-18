import Vue from 'vue';
import VueRouter from 'vue-router';
//import Home from "./views/Home";
import InfiniteChallenge_start from "./views/Enter/InfiniteChallenge/StartView"
import InfiniteChallenge_Question from "./views/Enter/InfiniteChallenge/QuestionView"
import About from "./views/About";

Vue.use(VueRouter);

const router = new VueRouter( {
    // mode: "history",
    routes: [{
        path:"/", 
        component: InfiniteChallenge_start
    },
    {
        path:"/InfiniteChallenge_Question",
        component: InfiniteChallenge_Question
    },
    {
        path:"/about",
        component: About
    }
    ]
});

export default router;