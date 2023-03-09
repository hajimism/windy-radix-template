"use client";

import { Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Toggle } from "@/components/ui/Toggle";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Skeleton
    return (
      <div role="status" className="animate-pulse">
        <div className="rounded ml-1 bg-sage-3 w-10 h-10" />
      </div>
    );
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Toggle onClick={toggleTheme}>
            <Sun />
            <span className="sr-only">Toggle theme</span>
          </Toggle>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>Current theme is {theme}. Toggle?</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
