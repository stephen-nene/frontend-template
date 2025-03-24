"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
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

function Select({ ...props }) {
  return <SelectPrimitive.Root data-slot="select" {...props} />;
}

function SelectGroup({ ...props }) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />;
}

function SelectValue({ ...props }) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />;
}

function SelectTrigger({
  className,
  variant = "default",
  size = "md",
  children,
  ...props
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        // Base styles
        "flex w-full items-center justify-between gap-2 rounded-md border bg-white dark:bg-gray-800 shadow-sm",
        "text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900",
        "transition-all duration-200",

        // States
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/20 dark:aria-invalid:border-red-500",

        // Apply variant and size
        variants[variant],
        sizes[size],

        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-70" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({ className, children, position = "popper", ...props }) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          // Base styles
          "relative z-50 min-w-[8rem] overflow-hidden rounded-md border shadow-md",
          "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100",

          // Animations
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",

          // Positioning
          position === "popper" && [
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1",
            "data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          ],

          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" && [
              "h-[var(--radix-select-trigger-height)]",
              "w-full min-w-[var(--radix-select-trigger-width)]",
            ]
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectItem({ className, children, ...props }) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        // Base styles
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none",
        "text-gray-900 dark:text-gray-100",
        "focus:bg-gray-100 dark:focus:bg-gray-700",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",

        className
      )}
      {...props}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectLabel({ className, ...props }) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn(
        "px-2 py-1.5 text-xs font-medium",
        "text-gray-500 dark:text-gray-400",
        className
      )}
      {...props}
    />
  );
}

function SelectSeparator({ className, ...props }) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn(
        "-mx-1 my-1 h-px",
        "bg-gray-200 dark:bg-gray-700",
        className
      )}
      {...props}
    />
  );
}

function SelectScrollUpButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
