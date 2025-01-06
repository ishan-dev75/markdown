import React from "react";
import { IconButton, IconButtonProps } from "@mui/material";

export interface MDIconButton extends IconButtonProps {}

const MDIconButton: React.FC<MDIconButton> = (props) => {
  return <IconButton {...props} />;
};

export default MDIconButton;
