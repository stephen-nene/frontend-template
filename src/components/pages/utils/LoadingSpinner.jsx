import React from "react";
import { Loader2 } from "lucide-react";
import { Loader, LoaderPinwheel } from "lucide-react";

const LoadingSpinner = ({
  size = "md",
  variant = "default",
  text = "Loading...",
  showText = true,
}) => {
  // Size mapping
  const sizeMap = {
    sm: "h-4 w-4",
    md: "h-6 w-6",
    lg: "h-8 w-8",
    xl: "h-12 w-12",
  };

  // Variant mapping for colors
  const variantMap = {
    default: "text-blue-500 dark:text-blue-400",
    primary: "text-purple-600 dark:text-purple-400",
    secondary: "text-green-500 dark:text-green-400",
    warning: "text-amber-500 dark:text-amber-400",
    danger: "text-red-600 dark:text-red-400",
  };

  // Choose spinner based on variant
  const SpinnerIcon = variant !== "default" ? Loader : LoaderPinwheel;

  return (
    <div className="bg-gray-100 dark:bg-gray-800  flex flex-col items-center justify-center min-h-screen w-full animate-in fade-in duration-300">
      <div
        className={`relative flex items-center justify-center p-2 rounded-full 
                     bg-gray-100 dark:bg-gray-800 
                      dark:hover:bg-gray-700 
                     transition-all duration-300 
                     shadow-md hover:shadow-lg`}
      >
        {/* <LoadingSpinner
          className={`${sizeMap[size]} ${variantMap[variant]} animate-spin`}
        /> */}

        <SpinnerIcon
          className={`${sizeMap[size]} ${variantMap[variant]} animate-spin`}
        />
      </div>

      {showText && (
        <p className="mt-3 text-gray-700 dark:text-gray-300 font-medium text-sm">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
