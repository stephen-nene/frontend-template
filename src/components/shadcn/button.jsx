import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex hover:text-black cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-green-500 text-white shadow-xs hover:bg-green-600/90 focus:ring-2 focus:ring-green-300",
        destructive:
          "bg-rose-500 text-white shadow-xs hover:bg-rose-700/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-red-500/40 dark:bg-rose-800",
        warning:
          "bg-yellow-500 text-black shadow-xs hover:bg-yellow-600 focus:ring-2 focus:ring-yellow-300 dark:bg-yellow-700",
        info: "bg-blue-500 text-white shadow-xs hover:bg-blue-600 focus:ring-2 focus:ring-blue-300 dark:bg-blue-800",
        success:
          "bg-emerald-500 text-white shadow-xs hover:bg-emerald-600 focus:ring-2 focus:ring-emerald-300 dark:bg-emerald-800",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-lime-500 text-black shadow-xs hover:bg-lime-600/80 focus:ring-2 focus:ring-lime-300",
        ghost:
          "hover:bg-gray-200 bg-gray-300 dark:bg-gray-200/40 dark:hover:bg-gray-400/50 text-black hover:bg-gray-500",
        link: "text-blue-500 underline-offset-4 hover:underline",
        devMode:
          "bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white shadow-md hover:shadow-lg hover:brightness-110 transition-all duration-200 ease-in-out focus:ring-4 focus:ring-purple-300 dark:focus:ring-purple-700",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  children,
  disabled,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size }), className)}
      {...(!asChild && { disabled: disabled || loading })}
      {...props}
    >
      {loading ? <Loader className="animate-spin" /> : children}
    </Comp>
  );
}

export { Button, buttonVariants };