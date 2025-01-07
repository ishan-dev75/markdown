import BackupOutlinedIcon from "@mui/icons-material/BackupOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export const iconMap = {
  upload: BackupOutlinedIcon,
  download: CloudDownloadOutlinedIcon,
  preview: VisibilityOutlinedIcon
};

export type IconType = keyof typeof iconMap;
