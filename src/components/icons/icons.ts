import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import Brightness7 from "@mui/icons-material/Brightness4";
import Brightness4 from "@mui/icons-material/Brightness7";

export const iconMap = {
  upload: BackupOutlinedIcon,
  download: CloudDownloadOutlinedIcon,
  openEye: VisibilityOutlinedIcon,
  closeEye: VisibilityOffOutlinedIcon,
  fullMoon: Brightness7,
  halfMoon: Brightness4,
};

export type IconType = keyof typeof iconMap;
