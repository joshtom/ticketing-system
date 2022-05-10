import { icons } from "../../utils/icon";
import "./icon.module.scss";
import { CardType, IconType } from "../../utils/types";

interface IconProps {
  iconName: IconType;
}

const Icon = ({ iconName }: IconProps) => {
  return <>{icons[iconName]}</>;
};

export default Icon;
