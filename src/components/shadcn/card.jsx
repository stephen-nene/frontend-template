"use client"

import React from "react"
import { cn } from "@/lib/utils"

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100",
        "flex flex-col py-4  gap-6 rounded-xl border border-gray-200 dark:border-gray-700",
        "shadow-sm",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn(
        "grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6",
        "has-[data-slot=card-action]:grid-cols-[1fr_auto]",
        "[.border-b]:pb-6 [.border-b]:border-b [.border-b]:border-gray-200 dark:[.border-b]:border-gray-700",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn(
        "text-lg font-semibold leading-none text-gray-900 dark:text-gray-100",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }) {
  return (
    <p
      className={cn(
        "text-sm text-gray-600 dark:text-gray-400",
        className
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }) {
  return (
    <div
      className={cn("px-6", className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn(
        "flex items-center px-6",
        "[.border-t]:pt-6 [.border-t]:border-t [.border-t]:border-gray-200 dark:[.border-t]:border-gray-700",
        className
      )}
      {...props}
    />
  )
}

function CardAction({ className, ...props }) {
  return (
    <div
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction
}