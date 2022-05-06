import { FC } from "react";
import { Link } from "react-router-dom";
import Styles from "./Header.module.scss";
interface HeaderProps {
  title?: string;
}
const Header: FC<HeaderProps> = ({ title = "ticketmaster" }) => {
  return (
    <header className={Styles.header}>
      <nav>
        <h1>
          {" "}
          {title === "ticketmaster" ? <Link to="/">{title}</Link> : title}
        </h1>
      </nav>
    </header>
  );
};

export default Header;
