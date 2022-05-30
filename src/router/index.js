import { createRouter, createWebHistory } from "vue-router";
//import { findById } from "@/helpers";
//import store from "@/store";
import Homepage from "../pages/Homepage.vue";
import ThreadShow from "../pages/ThreadShow.vue";
import ThreadList from "../components/ThreadList.vue";
import ThreadCreate from "../pages/ThreadCreate";
import NotFound from "../pages/NotFound.vue";
import Profile from "../pages/Profile.vue";
import Forum from "../pages/Forum.vue";
import ForumList from "../components/ForumList.vue";
import SignUp from "../pages/SignUp.vue";
//import SignIn from "../pages/Forum.vue";

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
/*
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import( "@/pages/NotFound"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    const scroll = {};
    if (to.meta.toTop) scroll.top = 0;
    if (to.meta.smoothScroll) scroll.behavior = "smooth";
    return scroll;
  },
});
router.afterEach(() => {
  store.dispatch("clearItems", {
    modules: ["categories", "forums", "posts", "threads"],
  });
});

router.beforeEach(async (to, from) => {
  await store.dispatch("auth/initAuthentication");
  store.dispatch("unsubscribeAllSnapshots");
  if (to.meta.requiresAuth && !store.state.auth.authId) {
    return { name: "SignIn", query: { redirectTo: to.path } };
  }
  if (to.meta.requiresGuest && store.state.auth.authId) {
    return { name: "Home" };
  }
}); */

/* import { createRouter, createWebHistory } from "vue-router";
import { findById } from "@/helpers";
import store from "@/store";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import SignUp from "../components/SignUp.vue";
import Login from "../components/Login.vue";
import Profile from "../pages/Profile.vue";
import Board from "../pages/Board.vue";
import Subject from "../pages/Subject.vue";
import SubComment from "../pages/SubComment.vue";
import PasswordReset from "../components/PasswordReset.vue";
import User from "../components/User.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/logout",
      name: "logOut",
      component: LogOut,
    },
    {
      path: "/user",
      name: "profile",
      component: Profile,
    },
    {
      path: "/user/edit",
      name: "profileedit",
      component: Profile,
    },
    {
      path: "/threadboard",
      name: "threadboard",
      component: threadBoard,
    },
    {
      path: "/threadedit",
      name: "threadedit",
      component: threadEdit,
    },
    {
      path: "/threaddelete",
      name: "threaddelete",
      component: threadDelete,
    },
    {
      path: "/threadcreate",
      name: "threadcreate",
      component: threadCreate,
    },
    {
      path: "/passwordreset",
      name: "passwordreset",
      component: PasswordReset,
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
