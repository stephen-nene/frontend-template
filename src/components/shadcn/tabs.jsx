"use client";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

// Define color variants for each tab
const tabVariants = {
  all: "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700",
  primary:
    "bg-yellow-100 text-yellow-900 dark:bg-yellow-800 dark:text-yellow-100 hover:bg-yellow-200 dark:hover:bg-yellow-700",
  secondary:
    "bg-green-100 text-green-900 dark:bg-green-800 dark:text-green-100 hover:bg-green-200 dark:hover:bg-green-700",
    tertiary:
    "bg-blue-100 text-blue-900 dark:bg-blue-800 dark:text-blue-100 hover:bg-blue-200 dark:hover:bg-blue-700",
  cancelled:
    "bg-red-100 text-red-900 dark:bg-red-800 dark:text-red-100 hover:bg-red-200 dark:hover:bg-red-700",
};

// Define active state colors (slightly stronger)
const activeTabVariants = {
  all: "data-[state=active]:bg-gray-300 dark:data-[state=active]:bg-gray-600",
  primary:
    "data-[state=active]:bg-yellow-300 dark:data-[state=active]:bg-yellow-600",
  secondary:
    "data-[state=active]:bg-green-300 dark:data-[state=active]:bg-green-600",
    tertiary:
    "data-[state=active]:bg-blue-300 dark:data-[state=active]:bg-blue-600",
  cancelled:
    "data-[state=active]:bg-red-300 dark:data-[state=active]:bg-red-600",
};

function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "flex space-x-2 bg-gray-50 dark:bg-gray-900 p-2 rounded-lg shadow-md",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, variant = "all", ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "inline-flex items-center data-[state=active]:border justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200",
        "focus:outline-none cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 dark:focus:ring-gray-600",
        "disabled:opacity-50 disabled:pointer-events-none",
        tabVariants[variant],
        activeTabVariants[variant],
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn(
        "flex-1 p-4 bg-white dark:bg-gray-950 rounded-md",
        className
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };