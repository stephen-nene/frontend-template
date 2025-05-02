import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/shadcn/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/shadcn/card";
import { Rocket, Ghost, Home, RefreshCw, AlertCircle, Search, Terminal, Moon, Sun, FileSearch, Info, Settings, Code } from "lucide-react";
import { Input } from "@/components/shadcn/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

import {useUserStore} from "@/store/useUserStore";

const Error404 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isExploring, setIsExploring] = useState(false);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const { darkMode } = useUserStore((state) => state.darkMode);
  const setDarkMode = useUserStore((state) => state.toggleDarkMode);
  const [theme, setTheme] = useState("system"); // system, light, dark

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Initial terminal output
    setTerminalOutput([
      "$ system diagnostics running...",
      `$ ERROR 404: Route "${location.pathname}" not found`,
      "$ checking possible solutions...",
      "$ type 'help' for options"
    ]);
  }, [location.pathname]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      toast.promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1500);
        }),
        {
          loading: "Searching...",
          success: `Found results for "${searchQuery}"`,
          error: `No results found for "${searchQuery}"`,
        }
      );
    }
  };

  const addTerminalOutput = (command) => {
    const newOutput = [...terminalOutput, `$ ${command}`];
    
    if (command === "help") {
      newOutput.push(
        "Available commands:",
        "- home: navigate to homepage",
        "- explore: discover our site",
        "- refresh: reload current page",
        "- clear: clean terminal",
        "- theme <light|dark|system>: change theme",
        "- about: show system information",
        "- ls: list available routes",
        "- history: show recent pages visited",
        "- status: check system status"
      );
    } else if (command === "home") {
      navigate("/");
      newOutput.push("Navigating to homepage...");
    } else if (command === "explore") {
      setIsExploring(true);
      newOutput.push("Launching exploration mode...");
    } else if (command === "refresh") {
      newOutput.push("Refreshing page...");
      setTimeout(() => window.location.reload(), 500);
    } else if (command === "clear") {
      setTerminalOutput([]);
      return;
    } else if (command.startsWith("theme")) {
      const themeArg = command.split(" ")[1];
      if (themeArg === "light" ) {
        // setTheme(themeArg);
        setDarkMode(false);
        newOutput.push(`Theme set to ${themeArg}`);
      }else if (themeArg === "dark") {
        // setTheme(themeArg);
        setDarkMode(true);
        newOutput.push(`Theme set to ${themeArg}`);
      }
      else if (themeArg === "system") {
        // setTheme(themeArg);
        setDarkMode(darkMode);
        newOutput.push(`Theme set to ${themeArg}`);
      } 
       else {
        newOutput.push("Usage: theme <light|dark|system>");
      }
    } else if (command === "about") {
      newOutput.push(
        "System Information:",
        "- Browser: " + navigator.userAgent,
        "- Current URL: " + window.location.href,
        "- Time: " + new Date().toLocaleTimeString(),
        "- System Version: 1.4.0"
      );
    } else if (command === "ls") {
      newOutput.push(
        "Available routes:",
        "- /",
        "- /features",
        "- /blog",
        "- /pricing",
        "- /contact",
        "- /dashboard"
      );
    } else if (command === "history") {
      newOutput.push(
        "Recent navigation history:",
        "- " + document.referrer || "(no referrer)",
        "- " + location.pathname + " (current)",
      );
    } else if (command === "status") {
      newOutput.push(
        "System Status: Online",
        "Server: Operational",
        "Database: Connected",
        "API: Responsive",
        "Last check: " + new Date().toLocaleTimeString()
      );
    } else {
      newOutput.push(`Command not found: ${command}`);
    }

    setTerminalOutput(newOutput);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center 
                     bg-gradient-to-br from-blue-50 to-gray-100 
                     dark:from-gray-900 dark:to-gray-800 p-4 
                     transition-colors duration-300`}>
      <div 
        className="w-full max-w-2xl"
      >
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-8 h-8 text-red-500 dark:text-red-400" />
                <div>
                  <CardTitle className="text-3xl flex items-center gap-2 text-gray-800 dark:text-gray-100">
                    404 <Ghost className={cn("w-6 h-6", isHovered && "animate-bounce")} />
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 dark:text-gray-300">
                    Houston, we have a problem!
                  </CardDescription>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setDarkMode()}
                className="rounded-full"
              >
                {darkMode === "dark" ? 
                  <Sun className="h-5 w-5 text-yellow-400" /> : 
                  <Moon className="h-5 w-5 text-blue-600" />
                }
              </Button>
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">
                The page at <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded font-mono">{location.pathname}</code> doesn't exist.
              </p>
              
              <div className="flex gap-2 mt-4">
                <Button 
                  variant="default" 
                  onClick={() => navigate("/")}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800"
                >
                  <Home className="mr-2 h-4 w-4" /> Go Home
                </Button>
                
                <Button 
                  variant="outline" 
                  onClick={() => window.location.reload()}
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 
                            dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <RefreshCw className="mr-2 h-4 w-4" /> Retry
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-gray-800 dark:text-gray-200">Looking for something specific?</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Search our site..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  className="bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
                />
                <Button 
                  onClick={handleSearch}
                  className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-700 dark:hover:bg-blue-800"
                >
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="flex items-center gap-2 mb-3">
                <Terminal className="w-5 h-5 text-green-500 dark:text-green-400" />
                <p className="font-mono text-sm text-gray-800 dark:text-gray-200">Debug Terminal</p>
              </div>
              
              <div className="bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-sm h-48 overflow-y-auto border border-gray-700 dark:border-gray-800">
                {terminalOutput.map((line, i) => (
                  <p key={i} className={i < 4 ? "text-gray-400" : "text-gray-200"}>
                    {line}
                  </p>
                ))}
              </div>
              
              <Input 
                placeholder="Type 'help' for options"
                className="mt-2 font-mono bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-600"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    addTerminalOutput(e.currentTarget.value);
                    e.currentTarget.value = "";
                  }
                }}
              />
            </div>
          </CardContent>

          <CardFooter className="flex justify-between border-t border-gray-200 dark:border-gray-700 pt-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Need help? Contact support
            </p>
            <Button 
              variant="ghost" 
              className="text-blue-600 hover:text-blue-700 hover:bg-blue-50
                        dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-gray-700"
            >
              <Rocket className="mr-2 h-4 w-4" /> Emergency Beam
            </Button>
          </CardFooter>
        </Card>

        {isExploring && (
          <div className="mt-6 animate-fadeIn">
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-gray-200 dark:border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">Explore Our Site</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/features")}
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 
                            dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <FileSearch className="mr-2 h-4 w-4" /> Features
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/blog")}
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 
                            dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <Code className="mr-2 h-4 w-4" /> Blog
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/pricing")}
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 
                            dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <Info className="mr-2 h-4 w-4" /> Pricing
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => navigate("/contact")}
                  className="border-gray-300 text-gray-700 hover:bg-gray-100 
                            dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  <Settings className="mr-2 h-4 w-4" /> Contact
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Error404;