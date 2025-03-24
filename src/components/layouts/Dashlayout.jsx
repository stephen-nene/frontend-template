import React from "react";
import { Outlet } from "react-router-dom";
import DashNav from "./DashNav";

export default function DashLayout() {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950">
      <DashNav />
      <main className="flex-1 pt-10 lg:pl-64">
        vhvhv
        <Outlet />
      </main>
    </div>
  );
}
