import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export interface MDTypography extends TypographyProps {}

const MDTypography: React.FC<MDTypography> = (props) => {
  return <Typography {...props} />;
};

export default MDTypography;
