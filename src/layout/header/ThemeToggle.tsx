import React, { useState } from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { MDIconButton } from "../../components/mui";
import LocalStorageService, { LocalStorageKeys } from "../../service/sotrage";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(() => newMode);
    LocalStorageService.setItem(
      LocalStorageKeys.isDarkMode,
      newMode.toString(),
    );
    window.dispatchEvent(new Event('storage'))
  };

  return (
    <>
      <MDIconButton color="inherit" onClick={onToggle}>
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </MDIconButton>
    </>
  );
};

export default ThemeToggle;
