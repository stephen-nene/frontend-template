import React, { useEffect, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// import ProtectedRoute from "../ProtectedRoute.jsx";
import ProtectedRoute from "../pages/utils/ProtectedRoute.jsx";

import Navbar from "../../components/layouts/Navbar.jsx";
import DashNav from "../../components/layouts/DashNav.jsx";
import Footer from "../../components/layouts/Footer.jsx";

import { routes } from "./route.jsx";

import LoadingSpinner from "../pages/utils/LoadingSpinner.jsx";
import { getCurrentUser } from "../../services/requests/auth.js";
import { Toaster } from "sonner";

import { useUserStore } from "../../store/useUserStore.js"

import "../../assets/styles/App.css";
const App = React.forwardRef((props, ref) => {
  const { login, loggedIn, darkMode } = useUserStore();
  const location = useLocation();
  const isDashboard = location.pathname.startsWith("/dashboard");

  // console.log(loggedIn)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Runs when the pathname changes

  // useEffect(() => {
  //   if (loggedIn === false) {
  //     const getUser = async () => {
  //       await getCurrentUser(login);
  //     };
  //     getUser();
  //   }
  // }, []);

  const renderRoute = (route) => {
    const RouteComponent = route.element;

    if (route.protected) {
      return (
        <Route
          key={route.path}
          path={route.path}
          element={
            <ProtectedRoute
              allowedRoles={route.roles || []}
              allowPendingAccess={route.allowPendingAccess}
            >
              <Suspense fallback={<LoadingSpinner size='xl' variant="primary" />}>
                <RouteComponent />
              </Suspense>
            </ProtectedRoute>
          }
        >
          {route.children && route.children.map(renderRoute)}
        </Route>
      );
    }

    return (
      <Route
        key={route.path}
        path={route.path}
        element={
          <Suspense fallback={<LoadingSpinner />}>
            <RouteComponent />
          </Suspense>
        }
      >
        {route.children && route.children.map(renderRoute)}
      </Route>
    );
  };

  // console.log(darkMode)

  return (
    <div className={`${darkMode ? "dark " : ""} `}>
      {!isDashboard && <Navbar />}

      <div className="bg-white   min-h-screen ">
        <Routes>{routes.map(renderRoute)}</Routes>
      </div>
      {/* <Footer /> */}
      {!isDashboard && <Footer />}
      <Toaster
        visibleToasts={4}
        richColors={true}
        closeButton={true}
        theme={darkMode ? "dark" : "light"}
        position="top-right"
      />
    </div>
  );
});

export default App;
