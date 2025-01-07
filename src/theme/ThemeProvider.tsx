import React, { useState } from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { createCustomTheme } from "./theme";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = createCustomTheme(isDarkMode);
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {React.cloneElement(children as React.ReactElement, {
        isDarkMode,
        onToggleTheme: toggleTheme,
      })}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
