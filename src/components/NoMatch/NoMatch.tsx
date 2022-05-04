import { Link } from "react-router-dom";
import Styles from "./NoMatch.module.scss";
function NoMatch() {
  return (
    <div className={Styles.NoMatch}>
      <h1>Page Not Found</h1>
      <p>
        <Link to="/">Go back to home</Link>
      </p>
    </div>
  );
}

export default NoMatch;
