import Header from "../../components/Header/Header";
import Styles from "./Checkout.module.scss";
function Checkout() {
  return (
    <div className={Styles["Checkout"]}>
      <Header title="Checkout." />
      <div className={Styles["Checkout__container"]}>
        <section className={Styles["Checkout__container--payment"]}>
          <div className={Styles["delivery"]}></div>
          <div className={Styles["payment"]}></div>
        </section>
        <section className={Styles["Checkout__container--total"]}>
          <h1>Total Card</h1>
        </section>
      </div>
    </div>
  );
}

export default Checkout;
