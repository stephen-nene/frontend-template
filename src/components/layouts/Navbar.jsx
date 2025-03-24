import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, User, LogOut } from "lucide-react";
// import { useUserStore } from "../path/to/your/store"; // Update this path
import { Button } from "@/components/shadcn/button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/avatar";
import {useUserStore} from "@/store/useUserStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { darkMode, toggleDarkMode, user, loggedIn, logOut } = useUserStore();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact Us", path: "/contact" },
  ];


  // console.log(user);

  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b ${
        darkMode
          ? "bg-gray-900 border-gray-800 text-white"
          : "bg-white border-gray-200 text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span
                className={`font-bold text-xl ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                YourLogo
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === item.path
                      ? darkMode
                        ? "bg-gray-700 text-white"
                        : "bg-gray-100 text-gray-900"
                      : darkMode
                      ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Dark mode toggle button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className={`rounded-full p-1 `}
            >
              {darkMode ? (
                <Sun className=" text-yellow-400" />
              ) : (
                <Moon size={20} />
              )}
            </Button>

            {/* User menu */}
            {loggedIn ? (
              <div className="flex items-center space-x-3">
                <Avatar onClick={() => {}} className="h-8 w-8 cursor-pointer hover:bg-amber-200 hover:text-black">
                  <AvatarImage
                    src={user?.avatarUrl || ""}
                    alt={user?.name || "User"}
                  />
                  <AvatarFallback>
                    {user?.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
                {/* <Button
                  variant="destructive"
                  size="sm"
                  onClick={logOut}
                  className={`rounded-md`}
                >
                  <LogOut size={16} className="mr-1" />
                  Logout
                </Button> */}
                <Link
                  to="/dashboard"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium 
                    
                    dark:bg-green-600 dark: text-black dark:hover:bg-green-700
                      bg-green-500  hover:bg-green-600
                  `}
                >
                  <User size={16} className="mr-1" />
                  Dashboard
                </Link>
              </div>
            ) : (
              <Link
                to="/login"
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                  darkMode
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                {/* <User size={16} className="mr-1" /> */}
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className={`rounded-full mr-2 ${
                darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                darkMode
                  ? "text-gray-400 hover:text-white hover:bg-gray-700"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden ${darkMode ? "bg-gray-900" : "bg-white"}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? darkMode
                      ? "bg-gray-700 text-white"
                      : "bg-gray-100 text-gray-900"
                    : darkMode
                    ? "text-gray-300 hover:bg-gray-700 hover:text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            {loggedIn ? (
              <div className="flex items-center px-5">
                <Link
                  to="/dashboard"
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium 
                    
                    dark:bg-green-600 dark: text-black dark:hover:bg-green-700
                      bg-green-500  hover:bg-green-600
                  `}
                >
                  <User size={16} className="mr-1" />
                  Dashboard
                </Link>

                <Button
                  variant="destructive"
                  size="icon"
                  onClick={logOut}
                  className="ml-auto"
                >
                  <LogOut size={20} />
                </Button>
              </div>
            ) : (
              <div className="px-5">
                <Link
                  to="/login"
                  className={`block px-3 py-2 rounded-md text-base font-medium text-center ${
                    darkMode
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                  onClick={toggleMenu}
                >
                  Login
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
