import React from "react";
import { icons } from "@src/utils/icon";
import "./icon.module.scss";
import { IconType } from "@src/utils/types";

interface IconProps {
  iconName: IconType;
}

const Icon = ({ iconName }: IconProps) => {
  return <>{icons[iconName]}</>;
};

export default Icon;
