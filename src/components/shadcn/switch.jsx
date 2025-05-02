import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

function Switch({ className, ...props }) {
  return (
    <SwitchPrimitive.Root
      className={cn(
        "peer inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-sm outline-none transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",

        // Light mode
        "data-[state=checked]:bg-blue-600 data-[state=unchecked]:bg-gray-300",

        // Dark mode
        "dark:data-[state=checked]:bg-blue-500 dark:data-[state=unchecked]:bg-gray-600",

        // Focus ring
        "focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2",

        // Disabled state
        "disabled:opacity-50 disabled:cursor-not-allowed",

        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block size-4 rounded-full bg-white shadow-md transition-transform",

          "data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0",

          // Dark mode thumb
          "dark:bg-gray-100"
        )}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };