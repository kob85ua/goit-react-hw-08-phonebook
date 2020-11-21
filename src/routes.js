import { lazy } from "react";

export default [
  {
    path: "/",
    label: "Home",
    exact: true,
    component: lazy(() => import("./components/Views/HomeView")/* webpackChunkName:"home_page" */),
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    label: "Register",
    exact: true,
    component: lazy(() => import("./components/Views/RegisterView")/* webpackChunkName:"register_page" */),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    label: "Login",
    exact: true,
    component: lazy(() => import("./components/Views/LoginView")/* webpackChunkName:"login_page" */),
    private: false,
    restricted: true,
  },
  {
    path: "/contacts",
    label: "Contacts",
    exact: true,
    component: lazy(() => import("./components/Phonebook/Phonebook")/* webpackChunkName:"contacts_page" */),
    private: true,
    restricted: false,
  },
];
