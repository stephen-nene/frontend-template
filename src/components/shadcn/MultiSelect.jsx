"use client";

import * as React from "react";
import { CheckIcon, ChevronDownIcon, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function MultiSelect({
  options,
  value = [],
  onChange,
  placeholder = "Select...",
  className,
}) {
  const [open, setOpen] = React.useState(false);
  const inputRef = React.useRef(null);

  const toggleItem = (itemValue) => {
    onChange(
      value.includes(itemValue)
        ? value.filter((v) => v !== itemValue)
        : [...value, itemValue]
    );
  };

  return (
    <div className={cn("relative", className)}>
      <div
        ref={inputRef}
        onClick={() => setOpen(!open)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
      >
        <div className="flex flex-wrap gap-1">
          {value.length > 0 ? (
            value.map((val) => {
              const option = options.find((o) => o.value === val);
              return (
                <span
                  key={val}
                  className="inline-flex items-center gap-1 rounded-full bg-accent px-2 py-1 text-xs"
                >
                  {option?.label}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleItem(val);
                    }}
                    className="rounded-full p-0.5 hover:bg-accent/50"
                  >
                    <XIcon className="h-3 w-3" />
                  </button>
                </span>
              );
            })
          ) : (
            <span className="text-muted-foreground">{placeholder}</span>
          )}
        </div>
        <ChevronDownIcon
          className={cn(
            "h-4 w-4 opacity-50 transition-transform",
            open && "rotate-180"
          )}
        />
      </div>

      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95">
          <div className="max-h-60 overflow-auto p-1">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => toggleItem(option.value)}
                className={cn(
                  "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
                  value.includes(option.value) && "bg-accent/50"
                )}
              >
                {value.includes(option.value) && (
                  <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                )}
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
