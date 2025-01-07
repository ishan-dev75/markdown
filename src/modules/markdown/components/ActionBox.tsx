import { styled } from "@mui/material";
import { MDBox } from "../../../components/mui";

const ActionBox = styled(MDBox)(({ theme }) => ({
  display: "flex",
  justifyContent: "end",
  gap: theme.spacing(2),
  backgroundColor: "#f5f5f5",
  padding: theme.spacing(1),
  position: "sticky",
  top: 0,
}));

export default ActionBox;
