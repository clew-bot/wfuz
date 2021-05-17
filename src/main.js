import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import store from "./store";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
import SecretPage from "./pages/SecretPage";
import Register from "./pages/Register";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD1YXIvTZyoPNWOXacIe--hRkRcqfIJBQ8",
  authDomain: "vuetester-34562.firebaseapp.com",
  projectId: "vuetester-34562",
  storageBucket: "vuetester-34562.appspot.com",
  messagingSenderId: "688126937817",
  appId: "1:688126937817:web:8fa6cd926e3ae3a79d4cc8",
  measurementId: "G-PHEE6Z1RJ6",
};
firebase.initializeApp(firebaseConfig);

Vue.prototype.$axios = axios;
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",

  routes: [
    { path: "/", component: HomePage, name: "home" },
    { path: "/login", component: LoginPage },
    { path: "/register", component: Register },
    {
      path: "/secret",
      component: SecretPage,
      name: "secret",
      meta: { requiresAuth: true },
    },
  ],
});
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
