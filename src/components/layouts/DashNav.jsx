import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  ChevronDown,
  UserPlus,
  Shield,
  FileText,
  BarChart,
  Mail,
  HelpCircle
} from "lucide-react";

const navItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <LayoutDashboard size={18} />,
  },
  {
    name: "Analytics",
    path: "/dashboard/analytics",
    icon: <BarChart size={18} />,
  },
  {
    name: "User Management",
    icon: <Users size={18} />,
    subLinks: [
      { name: "All Users", path: "/dashboard/users", icon: <Users size={16} /> },
      { name: "Add User", path: "/dashboard/users/add", icon: <UserPlus size={16} /> },
      { name: "Roles", path: "/dashboard/users/roles", icon: <Shield size={16} /> },
    ],
  },
  {
    name: "Content",
    icon: <FileText size={18} />,
    subLinks: [
      { name: "Pages", path: "/dashboard/content/pages" },
      { name: "Posts", path: "/dashboard/content/posts" },
      { name: "Media", path: "/dashboard/content/media" },
    ],
  },
  {
    name: "Messages",
    path: "/dashboard/messages",
    icon: <Mail size={18} />,
  },
  {
    name: "Settings",
    path: "/dashboard/settings",
    icon: <Settings size={18} />,
  },
  {
    name: "Help",
    path: "/dashboard/help",
    icon: <HelpCircle size={18} />,
  },
];

const DashNav = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (name) => {
    setExpandedItems(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r dark:border-gray-800 shadow-lg z-40">
      <div className="flex items-center p-6 border-b dark:border-gray-800">
        <div className="font-bold text-xl text-gray-900 dark:text-white">
          Admin Panel
        </div>
      </div>
      
      <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-5rem)]">
        {navItems.map((item) => (
          <div key={item.name} className="mb-2">
            {item.subLinks ? (
              <div>
                <button
                  onClick={() => toggleExpand(item.name)}
                  className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition
                    ${expandedItems[item.name] 
                      ? 'bg-gray-100 dark:bg-gray-800 text-blue-600 dark:text-blue-400'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                >
                  <span className="flex items-center gap-3">
                    {item.icon}
                    {item.name}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`transform transition-transform ${
                      expandedItems[item.name] ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {expandedItems[item.name] && (
                  <div className="ml-6 mt-2 space-y-1">
                    {item.subLinks.map((sub) => (
                      <NavLink
                        key={sub.name}
                        to={sub.path}
                        className={({ isActive }) =>
                          `flex items-center gap-2 px-4 py-2 rounded-md text-sm transition
                          ${isActive
                            ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                          }`
                        }
                      >
                        {sub.icon}
                        <span>{sub.name}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition
                  ${isActive
                    ? 'bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`
                }
                end
              >
                {item.icon}
                {item.name}
              </NavLink>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default DashNav;