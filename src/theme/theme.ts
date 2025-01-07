import { createTheme } from "@mui/material";
import { THEME_CONST } from "./constants";

export const createCustomTheme = (isDarkMode: boolean) => {
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            height: THEME_CONST.APP_BAR_HEIGHT, 
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            minHeight: THEME_CONST.APP_BAR_HEIGHT,
            height: THEME_CONST.APP_BAR_HEIGHT,
            "@media (min-width:600px)": {
              minHeight: THEME_CONST.APP_BAR_HEIGHT,
            },
          },
        },
      },
    },
  });
  return theme;
};
