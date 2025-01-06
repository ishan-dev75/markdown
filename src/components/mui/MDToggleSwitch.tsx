import React from "react";
import { Switch, SwitchProps } from "@mui/material";

export interface MDToggleSwitch extends SwitchProps {}

const MDToggleSwitch: React.FC<MDToggleSwitch> = ({ checked, onChange }) => {
  return <Switch checked={checked} onChange={onChange} />;
};

export default MDToggleSwitch;
