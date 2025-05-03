import * as React from "react";
import { cn } from "@/lib/utils";

// Base container for responsive table
function Table({ className, ...props }) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full  overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn(
          "w-full text-sm text-gray-700 dark:text-gray-300",
          className
        )}
        {...props}
      />
    </div>
  );
}

// Table header
function TableHeader({ className, ...props }) {
  return (
    <thead
      data-slot="table-header"
      className={cn(
        "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-b border-gray-300 dark:border-gray-700",
        className
      )}
      {...props}
    />
  );
}

// Table body
function TableBody({ className, ...props }) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("divide-y divide-gray-200 dark:divide-gray-700", className)}
      {...props}
    />
  );
}

// Table footer
function TableFooter({ className, ...props }) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 font-medium",
        className
      )}
      {...props}
    />
  );
}

// Table row
function TableRow({ className, ...props }) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors",
        "data-[state=selected]:bg-blue-100 dark:data-[state=selected]:bg-blue-900/20",
        className
      )}
      {...props}
    />
  );
}

// Table head cell
function TableHead({ className, ...props }) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "px-4 py-3 text-left font-semibold text-sm tracking-wide",
        "whitespace-nowrap text-gray-700 dark:text-gray-200",
        className
      )}
      {...props}
    />
  );
}

// Table data cell
function TableCell({ className, ...props }) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "px-2 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300",
        className
      )}
      {...props}
    />
  );
}

// Table caption
function TableCaption({ className, ...props }) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("mt-4 text-sm text-gray-500 dark:text-gray-400", className)}
      {...props}
    />
  );
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
};
