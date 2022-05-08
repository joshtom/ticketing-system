import { ReactComponent as Discover } from "../assets/icons/discover.svg";
import { ReactComponent as AmericanExpress } from "../assets/icons/american-express.svg";
import { ReactComponent as MasterCard } from "../assets/icons/master-card.svg";
import { ReactComponent as Visa } from "../assets/icons/visa.svg";
import { ReactComponent as SuccessCheck } from "../assets/icons/successCheck.svg";
import { ReactComponent as CardIcon } from "../assets/icons/cardIcon.svg";
import { ReactComponent as PlusIcon } from "../assets/icons/plusIcon.svg";
import { ReactComponent as Paypal } from "../assets/icons/payPal.svg";
import { IconType } from "./types";

export const icons: Record<IconType, JSX.Element> = {
  discover: <Discover />,
  americanExpress: <AmericanExpress />,
  masterCard: <MasterCard />,
  visa: <Visa />,
  successCheck: <SuccessCheck />,
  cardIcon: <CardIcon />,
  plusIcon: <PlusIcon />,
  payPal: <Paypal />,
};
