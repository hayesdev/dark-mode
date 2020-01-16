import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("enabled", "false");

  useEffect(() => {
    if (window.localStorage.getItem(darkMode)) {
      const toggle = document.querySelector("App");
      toggle.classList.add("dark-mode");
    }
    return toggle.classList.remove("dark-mode");
  }, [setDarkMode]);
};
