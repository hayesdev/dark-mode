import React, { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("enabled", false);

  useEffect(() => {
    const active = document.getElementsByClassName("App")[0];
    // window.document.body;
    if (darkMode) {
      active.classList.add("dark-mode");
    } else {
      active.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
