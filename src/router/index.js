import { createRouter, createWebHistory } from "vue-router";
//import { findById } from "../helpers";
//import store from "../store";
import Homepage from "../pages/Homepage.vue";
import ThreadShow from "../pages/ThreadShow.vue";
import ThreadList from "../components/ThreadList.vue";
import ThreadCreate from "../pages/ThreadCreate";
import NotFound from "../pages/NotFound.vue";
import Profile from "../pages/Profile.vue";
import Forum from "../pages/Forum.vue";
import ForumList from "../components/ForumList.vue";
import SignUp from "../pages/SignUp.vue";
import LogIn from "../pages/LogIn.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Homepage,
    },
    {
      path: "/me",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/me/edit",
      name: "ProfileEdit",
      component: Profile,
      props: { edit: true },
    },
    {
      path: "/thread/:id",
      name: "ThreadShow",
      component: ThreadShow,
      props: true,
    },
    {
      path: "/threads",
      name: "ThreadList",
      component: ThreadList,
    },
    {
      path: "/thread/create",
      name: "ThreadCreate",
      component: ThreadCreate,
      props: true,
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp,
    },
    {
      path: "/login",
      name: "LogIn",
      component: LogIn,
    },
    {
      path: "/forum/:id",
      name: "Forum",
      component: Forum,
      props: true,
    },
    {
      path: "/forumlist",
      name: "ForumList",
      component: ForumList,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

/* router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/signup"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");
  if (authRequired && !loggedIn) {
    next("/login");
  } else {
    next();
  }
}); */

export default router;
