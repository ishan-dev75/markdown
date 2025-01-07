import { Box, BoxProps } from "@mui/material";
import React from "react";

interface MDBox extends BoxProps {}

const MDBox : React.FC<MDBox> = (props) => {
  return <Box {...props} />;
};

export default MDBox;
