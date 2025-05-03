import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon } from "lucide-react"
import { cn } from "@/lib/utils"

// Variants configuration
const accordionVariants2 = {
  default: {
    root: "space-y-1",
    item: "border-b border-gray-200 dark:border-gray-800 last:border-b-0",
    trigger: "text-gray-700 dark:text-gray-300",
    content: "text-gray-600 dark:text-gray-400"
  },
  bordered: {
    root: "border border-gray-200 dark:border-gray-800 rounded-lg divide-y divide-gray-200 dark:divide-gray-800",
    item: "px-4",
    trigger: "text-gray-900 dark:text-gray-100",
    content: "text-gray-600 dark:text-gray-400"
  },
  minimal: {
    root: "space-y-2",
    item: "",
    trigger: "text-gray-800 dark:text-gray-200",
    content: "text-gray-600 dark:text-gray-400"
  }
}

// Additional variant styles for different themes
const accordionVariants = {
  default: {
    item: "border-b border-slate-200 dark:border-slate-700",
    trigger: "text-slate-800 dark:text-slate-100 hover:text-indigo-600 dark:hover:text-indigo-400",
    content: "text-slate-600 dark:text-slate-300"
  },
  clean: {
    item: "border-b border-slate-200 dark:border-slate-800 mb-2",
    trigger: "bg-white dark:bg-slate-900 rounded-lg px-4 hover:bg-slate-50 dark:hover:bg-slate-800",
    content: "px-4 text-slate-500 dark:text-slate-400"
  },
  boxed: {
    item: "border border-slate-200 dark:border-slate-700 rounded-lg mb-3 overflow-hidden",
    trigger: "px-5 bg-slate-50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800",
    content: "px-5 bg-white dark:bg-slate-900"
  },
  default: {
    item: "mb-3 overflow-hidden border-l-4 border-indigo-500 dark:border-indigo-400 rounded-r-lg",
    trigger: "px-4 bg-indigo-50 dark:bg-indigo-900/20 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300",
    content: "px-4 bg-white dark:bg-slate-900"
  },
  minimal: {
    item: "border-b border-slate-200 dark:border-slate-800",
    trigger: "px-0 hover:text-indigo-600 dark:hover:text-indigo-400 [&[data-state=open]]:font-semibold [&[data-state=open]]:text-indigo-600 dark:[&[data-state=open]]:text-indigo-400",
    content: "px-0"
  }
}

function Accordion({
  variant = "default",
  className,
  ...props
}) {
  return (
    <AccordionPrimitive.Root 
      data-slot="accordion" 
      className={cn(accordionVariants[variant].root, className)}
      {...props} 
    />
  )
}

function AccordionItem({
  variant = "default",
  className,
  ...props
}) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(accordionVariants[variant].item, className)}
      {...props} 
    />
  )
}

function AccordionTrigger({
  variant = "default",
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 dark:focus-visible:ring-blue-400",
          "hover:text-blue-600 dark:hover:text-blue-400",
          "[&[data-state=open]>svg]:rotate-180",
          accordionVariants[variant].trigger,
          className
        )}
        {...props}>
        {children}
        <ChevronDownIcon
          className="h-4 w-4 shrink-0 text-gray-500 dark:text-gray-400 transition-transform duration-200" 
        />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  variant = "default",
  className,
  children,
  ...props
}) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className={cn(
        "overflow-hidden text-sm",
        "data-[state=closed]:animate-accordion-up",
        "data-[state=open]:animate-accordion-down",
        accordionVariants[variant].content
      )}
      {...props}>
      <div className={cn("py-4", className)}>
        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}


export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

