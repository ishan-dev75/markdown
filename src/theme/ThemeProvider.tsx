import React from "react";
import { ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material";
import { createCustomTheme } from "./theme";
import useDarkMode from "./useDarkMode";

type ThemeProviderProps = {
  children: React.ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { isDarkMode } = useDarkMode();
  const theme = createCustomTheme(isDarkMode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
