import React from "react";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { MDIconButton, MDToggleSwitch } from "../../components/mui";

type ThemeToggleProps = {
  isDarkMode: boolean;
  onToggle: () => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <>
      <MDIconButton color="inherit" onClick={onToggle}>
        {isDarkMode ? <Brightness7 /> : <Brightness4 />}
      </MDIconButton>
      <MDToggleSwitch checked={isDarkMode} onChange={onToggle} />
    </>
  );
};

export default ThemeToggle;
