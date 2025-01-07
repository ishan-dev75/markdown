import React from "react";
import { IconButton, IconButtonProps } from "@mui/material";

export interface MDIconButtonProps extends IconButtonProps {}

const MDIconButton: React.FC<MDIconButtonProps> = (props) => {
  return <IconButton {...props} />;
};

export default MDIconButton;
