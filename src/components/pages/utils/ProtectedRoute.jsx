import { lazy, Suspense } from "react";
import { useUserStore } from "@/store/useUserStore.js";
import LoadingSpinner from "./LoadingSpinner.jsx";

// Lazy load all the components
const Unauthorised = lazy(() => import("./Unauthorised.jsx"));
const NotLoggedIn = lazy(() => import("./NotLoggedIn.jsx"));
const NotActivate = lazy(() => import("./NotActivate.jsx"));
const Suspended = lazy(() => import("./Suspended.jsx"));
const ComingSoon = lazy(() => import("./ComminSoon.jsx"));

const ProtectedRoute = ({ children, allowedRoles, allowPendingAccess }) => {
  const { user, darkMode } = useUserStore();

  // Wrap each return in Suspense
  if (!user || !Object.keys(user).length) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <NotLoggedIn darkMode={darkMode} />
      </Suspense>
    );
  }

  if (user.status === "suspended") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Suspended darkMode={darkMode} />
      </Suspense>
    );
  }

  if (
    allowedRoles &&
    allowedRoles.length > 0 &&
    !allowedRoles?.includes(user.role)
  ) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <Unauthorised darkMode={darkMode} />
      </Suspense>
    );
  }

  if (user.status !== "active" && !allowPendingAccess) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <NotActivate darkMode={darkMode} />
      </Suspense>
    );
  }

  return children;
};

export default ProtectedRoute;
