import * as React from "react";
import { cn } from "@/lib/utils";

const variants = {
  default:
    "border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-500/30",
  primary:
    "border-blue-400 dark:border-blue-600 focus:border-blue-600 focus:ring-blue-600/30",
  secondary:
    "border-gray-400 dark:border-gray-500 focus:border-gray-600 focus:ring-gray-600/30",
  success:
    "border-green-400 dark:border-green-600 focus:border-green-600 focus:ring-green-600/30",
  warning:
    "border-yellow-400 dark:border-yellow-600 focus:border-yellow-600 focus:ring-yellow-600/30",
  danger:
    "border-red-400 dark:border-red-600 focus:border-red-600 focus:ring-red-600/30",
  info: "border-indigo-400 dark:border-indigo-600 focus:border-indigo-600 focus:ring-indigo-600/30",
};

const sizes = {
  sm: "h-8 px-2.5 py-1.5 text-xs",
  md: "h-10 px-3 py-2 text-sm",
  lg: "h-11 px-4 py-2 text-base",
  xl: "h-12 px-4 py-3 text-base",
};

function Input({
  className,
  type = "text",
  variant = "default",
  size = "md",
  disabled = false,
  ...props
}) {
  return (
    <input
      type={type}
      disabled={disabled}
      className={cn(
        // Base styles
        "block w-full rounded-md border bg-white dark:bg-gray-800 shadow-sm transition-all",
        "text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900",

        // File input styles
        "file:border-0 file:bg-gray-100 dark:file:bg-gray-700 file:text-gray-700 dark:file:text-gray-200",
        "file:rounded-md file:px-3 file:py-1.5 file:text-sm file:font-medium",
        "file:hover:bg-gray-200 dark:file:hover:bg-gray-600",

        // States
        "disabled:bg-gray-100 disabled:text-gray-500 dark:disabled:bg-gray-700 dark:disabled:text-gray-400",
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/20 dark:aria-invalid:border-red-500",

        // Apply variant and size
        variants[variant],
        sizes[size],

        className
      )}
      {...props}
    />
  );
}

export { Input };
