import Header from "../../components/Header/Header";
import Styles from "./Checkout.module.scss";
function Checkout() {
  return (
    <div className={Styles["Checkout"]}>
      <Header title="Checkout." />
      <div className={Styles["Checkout__container"]}></div>
    </div>
  );
}

export default Checkout;
