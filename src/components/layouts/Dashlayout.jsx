import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import {  TopNav } from "./DashNav";
import DashNav from "./DashNav";
const DashLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Close sidebar by default on mobile screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };

    // Set initial state
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Toggle sidebar function to pass to TopNav
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <TopNav toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 pt-16"> {/* Add pt-16 to account for fixed top nav */}
        <DashNav isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        
        <main className={`flex-1 transition-all duration-300 p-6 ${sidebarOpen ? "lg:ml-64" : ""}`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashLayout;