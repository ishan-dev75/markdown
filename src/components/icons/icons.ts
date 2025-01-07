import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export const iconMap = {
  upload: BackupOutlinedIcon,
  download: CloudDownloadOutlinedIcon,
  openEye: VisibilityOutlinedIcon,
  closeEye: VisibilityOffOutlinedIcon
};

export type IconType = keyof typeof iconMap;
