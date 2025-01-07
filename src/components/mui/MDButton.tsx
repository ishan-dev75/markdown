import { Button, ButtonProps } from "@mui/material";
import React from "react";

interface MDButtonProps extends ButtonProps {}

const MDButton: React.FC<MDButtonProps> = (props) => {
  return <Button {...props} />;
};

export default MDButton;
