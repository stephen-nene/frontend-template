import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils"; // Assuming this is a utility for combining class names

function Progress({ className, value, ...props }) {
  // Determine the progress bar color based on the value
  let indicatorClassName = "";
  if (value > 90) {
    indicatorClassName = "bg-green-500"; // Green when value > 90
  } else if (value > 70) {
    indicatorClassName = "bg-blue-500"; // Blue when value > 70
  } else {
    indicatorClassName = "bg-yellow-500"; // Yellow when value <= 70
  }

  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-gray-900 relative h-2 w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className={cn(
          "h-full w-full flex-1 transition-all",
          indicatorClassName
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
