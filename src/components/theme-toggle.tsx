"use client";

import { useEffect, useSyncExternalStore } from "react";

type ThemeMode = "light" | "dark" | "system";

const themeModes: ThemeMode[] = ["light", "dark", "system"];
const themeLabels: Record<ThemeMode, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

const themeChangeEvent = "theme-mode-change";

function readThemeMode(): ThemeMode {
  if (typeof window === "undefined") {
    return "system";
  }

  const storedMode = window.localStorage.getItem("theme-mode") as ThemeMode | null;
  return storedMode && themeModes.includes(storedMode) ? storedMode : "system";
}

function subscribeToThemeMode(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(themeChangeEvent, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(themeChangeEvent, callback);
  };
}

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;

  if (mode === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.dataset.theme = mode;
  }

  root.dataset.themeMode = mode;
}

export function ThemeToggle() {
  const mode = useSyncExternalStore(
    subscribeToThemeMode,
    readThemeMode,
    (): ThemeMode => "system",
  );

  useEffect(() => {
    applyTheme(mode);
  }, [mode]);

  function selectTheme(nextMode: ThemeMode) {
    window.localStorage.setItem("theme-mode", nextMode);
    applyTheme(nextMode);
    window.dispatchEvent(new Event(themeChangeEvent));
  }

  return (
    <div
      aria-label="Theme"
      className="flex rounded-lg border border-border bg-card p-1 text-xs shadow-sm"
      role="group"
    >
      {themeModes.map((item) => (
        <button
          key={item}
          type="button"
          aria-pressed={mode === item}
          onClick={() => selectTheme(item)}
          className="rounded-md px-2.5 py-2 font-medium text-muted-foreground transition hover:bg-accent hover:text-accent-foreground aria-pressed:bg-primary aria-pressed:text-primary-foreground"
        >
          {themeLabels[item]}
        </button>
      ))}
    </div>
  );
}
