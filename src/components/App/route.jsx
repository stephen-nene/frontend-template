// routes.js
import { lazy } from "react";

const AuthRoutes = {
  Login: lazy(() => import("../pages/auth/Login.jsx")),
  Register: lazy(() => import("../pages/auth/Signup.jsx")),
  Reset: lazy(() => import("../pages/auth/Reset.jsx")),
  Forgot: lazy(() => import("../pages/auth/Forgot.jsx")),
  Activate: lazy(() => import("../pages/auth/Activate.jsx")),
};

const DashRoutes = {
  DashboardLayout: lazy(() =>
    import("../../components/layouts/Dashlayout.jsx")
  ),
  Dashboard: lazy(() => import("../pages/dash/Dashboard.jsx")),
  Profile: lazy(() => import("../pages/dash/Profile.jsx")),

  // Users: lazy(() => import("../Components/pages/dash/Users.jsx")),
};

import Home from "../pages/public/Home.jsx";
import Shop from "../pages/public/Shop.jsx";

import Contact from "../pages/public/Contact.jsx";
import About from "../pages/public/About.jsx"
import Blogs from "../pages/public/Blogs.jsx";
import Training from "../pages/public/Training.jsx";
import TenderTraining from "../pages/public/TenderTraining.jsx"
import Knowledgehub from "../pages/public/Knowledgehub.jsx"

// import Training from "../pages/public/training.jsx";
import Error404 from "../pages/utils/Error404.jsx";
import ComingSoon from "../pages/utils/ComminSoon.jsx";

// Route configurations
export const routes = [
  // Public Routes
  { path: "/", element: Home },
  { path: "/shop", element: Shop },
  { path: "/contact", element: Contact },
  { path: "/blogs", element: Blogs },
  { path: "/about", element: About },
  { path: "/knowledge-hub", element: Knowledgehub },
  { path: "/training", element: Training },
  { path: "/tender-training", element: TenderTraining },

  // authentication routes
  { path: "/login", element: AuthRoutes.Login },
  { path: "/register", element: AuthRoutes.Register },
  { path: "/forgot", element: AuthRoutes.Forgot },
  { path: "/activate/:token", element: AuthRoutes.Activate },
  { path: "/reset/:token", element: AuthRoutes.Reset },

  // Protected Routes
  {
    path: "/profile",
    element: DashRoutes.Profile,
    protected: true,
    allowPendingAccess: true,
  },
  // Dashboard Routes
  // {
  //   path: "/dashboard/home",
  //   element: DashRoutes.Dashboard,
  //   protected: true,
  //   roles: ["admin", "user"],
  // },

  {
    path: "/dashboard/",
    element: DashRoutes.DashboardLayout,
    protected: true,
    roles: ["admin", "user"],
    children: [
      {
        path: "",
        element: DashRoutes.Dashboard,
        protected: true,
        roles: ["admin", "user"],
      },
      {
        path: "products",
        element: DashRoutes.Dashboard,
        protected: true,
        roles: ["admin", "user"],
      },
      {
        path: "profile",
        element: DashRoutes.Profile,
        protected: true,
        roles: ["admin", "user"],
      },

      // Add other dashboard routes as needed
      { path: "*", element: Error404 }, // For routes that aren't implemented yet
    ],
  },

  // 404 Route
  { path: "*", element: Error404 },
  { path: "/commingsoon", element: ComingSoon },
];
