import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About";
import Users from "../views/Users.vue";
import UserDetails from "../views/UserDetails.vue";
import UserPosts from "../views/UserPosts.vue";
import PostComments from "../views/PostComments";

const routes = [
  
  {
    path: "/",
    name: "users",
    component: Users,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
  {
    path: "/users/:id",
    name: "userDetails",
    component: UserDetails,
  },
  {
    path: "/users/:id/post",
    name: "userPosts",
    component: UserPosts,
  },
  {
    path: "/post/:id/comment",
    name: "postComments",
    component: PostComments,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
