import { AppBar as MuiAppBar, Toolbar } from "@mui/material";
import { MDTypography } from "../../components/mui";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <MuiAppBar position="fixed" component="nav">
      <Toolbar>
        <MDTypography variant="h6" sx={{ flexGrow: 1 }}>
          Mark Down
        </MDTypography>
        <ThemeToggle />
      </Toolbar>
    </MuiAppBar>
  );
};

export default Header;
