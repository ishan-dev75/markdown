import { useState, useEffect } from "react";
import LocalStorageService, { LocalStorageKeys } from "../service/sotrage";

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      const mode =
        LocalStorageService.getItem(LocalStorageKeys.isDarkMode) === "true";
      setIsDarkMode(mode);
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      LocalStorageService.removeItem(LocalStorageKeys.isDarkMode);
    };
  }, []);

  return { isDarkMode, setIsDarkMode };
};

export default useDarkMode;
