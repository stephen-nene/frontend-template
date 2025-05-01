import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Menu, X, Moon, Sun, User, LogOut, ChevronDown, ChevronRight, 
  Bell, Settings, Users, FileText, BarChart3, Home, ShoppingCart, Layers 
} from "lucide-react";
import { useUserStore } from "@/store/useUserStore";

// DashNav component with improved responsiveness
 const DashNav = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  const { user, darkMode } = useUserStore();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  
  // Role-based navigation items
  const navItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <Home size={20} />,
      roles: ["user", "admin", "editor", "manager"]
    },
    {
      name: "Analytics",
      icon: <BarChart3 size={20} />,
      roles: ["admin", "manager"],
      subLinks: [
        { name: "Overview", path: "/dashboard/analytics" },
        { name: "Reports", path: "/dashboard/analytics/reports" },
        { name: "Statistics", path: "/dashboard/analytics/statistics" }
      ]
    },
    {
      name: "Content",
      icon: <FileText size={20} />,
      roles: ["admin", "editor"],
      subLinks: [
        { name: "Articles", path: "/dashboard/content/articles" },
        { name: "Media", path: "/dashboard/content/media" }
      ]
    },
    {
      name: "Users",
      icon: <Users size={20} />,
      roles: ["admin"],
      subLinks: [
        { name: "All Users", path: "/dashboard/users" },
        { name: "Permissions", path: "/dashboard/users/permissions" }
      ]
    },
    {
      name: "Products",
      icon: <ShoppingCart size={20} />,
      roles: ["admin", "manager"],
      subLinks: [
        { name: "Inventory", path: "/dashboard/products/inventory" },
        { name: "Categories", path: "/dashboard/products/categories" }
      ]
    },
    {
      name: "Settings",
      path: "/dashboard/settings",
      icon: <Settings size={20} />,
      roles: ["user", "admin", "editor", "manager"]
    }
  ];

  // Filter nav items based on user role
  const filteredNavItems = navItems.filter(item => 
    user && user.role && item.roles.includes(user.role)
  );

  // Toggle category expansion
  const toggleCategory = (categoryName) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  // Toggle collapsed view (for desktop)
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // Check if a link is active
  const isLinkActive = (path) => {
    return location.pathname === path;
  };

  // Check if any sublink is active
  const isSubLinkActive = (subLinks) => {
    return subLinks?.some(subLink => location.pathname === subLink.path);
  };

  // Handle subitem clicks in collapsed mode
  const handleCollapsedSubItemClick = (item) => {
    if (!isCollapsed) return;
    
    toggleCategory(item.name);
  };

  // Overlay click handler for mobile
  const handleOverlayClick = () => {
    if (window.innerWidth < 1024) {
      toggleSidebar();
    }
  };

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && window.innerWidth < 1024 && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={handleOverlayClick}
        ></div>
      )}
      
      {/* Sidebar */}
      <div 
        className={`fixed top-0 bottom-0 left-0 z-40 pt-16 transition-all duration-300 
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          ${isCollapsed && isOpen ? "w-20" : "w-64"}
          lg:translate-x-0 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800`}
      >
        <div className="h-full flex flex-col">
          {/* Sidebar Header */}
          
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
            {!isCollapsed && (
              <span className="font-bold text-xl dark:text-white">
                Dashboard
              </span>
            )}
            <button
              onClick={toggleCollapse}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 lg:block hidden"
            >
              {isCollapsed ? <ChevronRight size={20} /> : <ChevronDown size={20} />}
            </button>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 lg:hidden"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav Items */}
          <div className="flex-1 py-4 overflow-y-auto">
            <ul className="space-y-2 px-2">
              {filteredNavItems.map((item) => (
                <li key={item.name}>
                  {item.subLinks ? (
                    <div>
                      <button
                        onClick={() => {
                          toggleCategory(item.name);
                          handleCollapsedSubItemClick(item);
                        }}
                        className={`flex items-center justify-between w-full px-3 py-2 text-left rounded-md text-sm font-medium transition-colors
                          ${
                            expandedCategories[item.name] || isSubLinkActive(item.subLinks)
                              ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
                              : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                          }`}
                      >
                        <div className="flex items-center">
                          <span className="mr-3">{item.icon}</span>
                          {(!isCollapsed || !isOpen) && <span>{item.name}</span>}
                        </div>
                        {(!isCollapsed || !isOpen) && (
                          <span>
                            {expandedCategories[item.name] ? (
                              <ChevronDown size={16} />
                            ) : (
                              <ChevronRight size={16} />
                            )}
                          </span>
                        )}
                      </button>
                      
                      {/* Regular expanded submenu */}
                      {expandedCategories[item.name] && !isCollapsed && (
                        <ul className="mt-1 pl-6 space-y-1">
                          {item.subLinks.map((subLink) => (
                            <li key={subLink.name}>
                              <Link
                                to={subLink.path}
                                className={`block px-3 py-2 rounded-md text-sm ${
                                  isLinkActive(subLink.path)
                                    ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                                    : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`}
                              >
                                {subLink.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Collapsed mode - show sublinks as popover on hover */}
                      {isCollapsed && isOpen && expandedCategories[item.name] && (
                        <div className="absolute left-20 mt-0 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 z-50">
                          <ul className="py-1">
                            {item.subLinks.map((subLink) => (
                              <li key={subLink.name}>
                                <Link
                                  to={subLink.path}
                                  className={`block px-4 py-2 text-sm ${
                                    isLinkActive(subLink.path)
                                      ? "bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white"
                                      : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                  }`}
                                >
                                  {subLink.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                        isLinkActive(item.path)
                          ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <span className="mr-3">{item.icon}</span>
                      {(!isCollapsed || !isOpen) && <span>{item.name}</span>}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
          
          {/* User Info at Bottom */}
          {!isCollapsed && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                  {user?.avatarUrl ? (
                    <img src={user.avatarUrl} alt={user?.name} className="rounded-full" />
                  ) : (
                    <span className="text-sm font-medium">
                      {user?.name?.charAt(0) || "U"}
                    </span>
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {user?.name || "User"}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                    {user?.role || "User"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Updated TopNav component with mobile toggle
export const TopNav = ({ toggleSidebar }) => {
  const location = useLocation();
  const { darkMode, toggleDarkMode, user, loggedIn, logOut } = useUserStore();
  const [notifications, setNotifications] = useState(3); // Example state for notifications
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full h-16 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 lg:px-6">
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center">
          {/* Mobile menu button */}
          <button 
            onClick={toggleSidebar}
            className="p-2 mr-2 rounded-md text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 lg:hidden"
          >
            <Menu size={24} />
          </button>
          
          <span className="text-lg font-semibold dark:text-white">
            {location.pathname.split('/').filter(Boolean).map(segment => 
              segment.charAt(0).toUpperCase() + segment.slice(1)
            ).join(' / ')}
          </span>
        </div>
        
        <div className="flex items-center space-x-4">
          {/* Notifications */}
          <button className="relative p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
            <Bell size={20} />
            {notifications > 0 && (
              <span className="absolute top-0 right-0 block w-2 h-2 rounded-full bg-red-500"></span>
            )}
          </button>
          
          {/* Dark mode toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>
          
          {/* User menu */}
          <div className="relative">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
                {user?.avatarUrl ? (
                  <img src={user.avatarUrl} alt={user?.name} className="rounded-full" />
                ) : (
                  <span className="text-sm font-medium">
                    {user?.name?.charAt(0) || "U"}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// export /{  TopNav };
export default DashNav;