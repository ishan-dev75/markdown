import React from "react";
import { iconMap, IconType } from "./icons";

export interface IconComponentProps {
  type: IconType;
  size?: number;
  color?: string;
}

//* Factory Function that creates the icon with size and color
const createIcon = (
  IconComponent: React.ComponentType<{ style?: React.CSSProperties }>,
  size: number,
  color: string,
): JSX.Element => {
  return <IconComponent style={{ fontSize: size, color }} />;
};

//* IconComponent which maps the 'type' to the corresponding icon
const IconComponent: React.FC<IconComponentProps> = ({
  type,
  size = 20,
  color = "inherit",
}) => {
  const Icon = iconMap[type];

  if (!Icon) {
    throw new Error(`Icon "${type}" not found in iconMap.`);
  }

  return Icon ? createIcon(Icon, size, color) : null;
};

export default IconComponent;
