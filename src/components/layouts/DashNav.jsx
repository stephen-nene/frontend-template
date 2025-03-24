import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, LogOut, ChevronRight } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import { useUserStore } from "../../store/useUserStore";
import { toast } from "sonner";

const DashNav = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { toggleDarkMode, user, loggedIn, logOut } = useUserStore();

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  // Navigation items
  const navItems = [
    { name: "My Tender", path: "/dashboard/" },
    { name: "My products", path: "/dashboard/products" },
    { name: "Subscriptions", path: "/dashboard/subscriptions" },
    { name: "Profile", path: "/dashboard/profile" },
  ];

  return (
    <>
      {/* Sidebar - Mobile overlay */}
      <nav className="fixed  top-0 z-10 w-full border-b bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white">
        <div className="px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between h-16">
            {/* Left side - Menu button */}
            <div className="flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <Menu size={24} />
              </Button>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              {/* Dark mode toggle button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="rounded-full p-1"
              >
                <Sun className="hidden dark:block text-yellow-400" />
                <Moon className="block dark:hidden" size={20} />
              </Button>

              {/* User menu */}
              {loggedIn ? (
                <div className="flex items-center space-x-3">
                  <Avatar className="h-8 w-8 bg-gray-500 dark:bg-gray-400">
                    <AvatarImage
                      src={user?.avatarUrl || ""}
                      alt={user?.name || "User"}
                    />
                    <AvatarFallback>
                      {user?.name?.charAt(0) || "SN"}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => toast.error("Logout Success")}
                    className="rounded-md hidden md:flex"
                  >
                    <LogOut size={16} className="mr-1" />
                  </Button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium bg-blue-500 dark:bg-blue-600 text-white hover:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Login
                </Link>
              )}
            </div>
          </div>

        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transition-opacity lg:hidden ${
          sidebarOpen ? "opacity-10" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleSidebar}
      />


      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 flex flex-col transition-all duration-300 transform 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} 
        bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-r border-gray-200 dark:border-gray-800
        lg:relative lg:inset-0`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          <Link to="/dashboard" className="flex items-center">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="lg:hidden"
          >
            <X size={24} />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto pt-5 pb-4">
          <nav className="mt-5 px-2 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`group flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors 
                ${
                  location.pathname === item.path
                    ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {item.name}
                <ChevronRight
                  size={16}
                  className={`ml-auto transition-transform ${
                    location.pathname === item.path ? "rotate-90" : ""
                  }`}
                />
              </Link>
            ))}
          </nav>
        </div>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <Button
            variant="destructive"
            size="sm"
            onClick={() => {
              toast.error("Logout Success");
              logOut();
            }}
            className="w-full border border-gray-200 dark:border-gray-800"
          >
            <LogOut size={16} className="mr-2" />
            Sign out
          </Button>
        </div>
      </div>

    </>
  );
};

export default DashNav;
