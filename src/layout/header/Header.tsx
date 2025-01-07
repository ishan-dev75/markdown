import { AppBar as MuiAppBar, Toolbar } from "@mui/material";
import { MDTypography } from "../../components/mui";

const Header = () => {
  return (
    <MuiAppBar
      position="fixed"
      component="nav"
    >
      <Toolbar>
        <MDTypography variant="h6" sx={{ flexGrow: 1 }}>
          Mark Down
        </MDTypography>
        {/* // TODO : Add Dark Mode */}
        {/* <ThemeToggle isDarkMode={isDarkMode} onToggle={onToggleTheme} /> */}
      </Toolbar>
    </MuiAppBar>
  );
};

export default Header;
