import Header from "./header/Header";
import { MDBox } from "../components/mui";
import { THEME_CONST } from "../theme/constants";

interface MasterLayoutProps {
  children: React.ReactNode;
}

const MasterLayout: React.FC<MasterLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <MDBox sx={{ height: THEME_CONST.APP_BAR_HEIGHT }} />
      <MDBox sx={{ height: `calc(100vh - ${THEME_CONST.APP_BAR_HEIGHT}px)` }}>
        {children}
      </MDBox>
    </div>
  );
};

export default MasterLayout;
