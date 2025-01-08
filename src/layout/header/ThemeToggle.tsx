import React, { useState } from "react";
import LocalStorageService, { LocalStorageKeys } from "@service/sotrage";
import { MDIconButton } from "@components/mui";
import { IconComponent } from "@components/icons";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const onToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(() => newMode);
    LocalStorageService.setItem(
      LocalStorageKeys.isDarkMode,
      newMode.toString(),
    );
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <>
      <MDIconButton color="inherit" onClick={onToggle}>
        {isDarkMode ? (
          <IconComponent type="fullMoon" />
        ) : (
          <IconComponent type="halfMoon" />
        )}
      </MDIconButton>
    </>
  );
};

export default ThemeToggle;
