import { useState } from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Styles from "./Checkout.module.scss";
import Icon from "../../components/Icon";
function Checkout() {
  const [showTotalCard, setShowTotalCard] = useState<Boolean>(false);
  return (
    <div className={Styles["Checkout"]}>
      <Header title="Checkout." />
      <div className={Styles["Checkout__container"]}>
        <section className={Styles["Checkout__container--payment"]}>
          <div className={Styles["delivery"]}>
            <h2 className={Styles["delivery--title"]}>
              Delivery <Icon iconName="successCheck" />
            </h2>
            <p className={Styles["delivery--subtitle"]}>Go Mobile - Free</p>
            <p className={Styles["delivery--article"]}>
              Your phone's your ticket. Locate your tickets in your account - or
              in your app. When you go mobile, your tickets will not be emailed
              to you or available for print.
            </p>
          </div>
          <div className={Styles["payment"]}></div>
        </section>
        <section className={Styles["Checkout__container--total"]}>
          <header className={Styles["Checkout__container--total-header"]}>
            <p>Total</p>
            <p>$564.30</p>
          </header>
          <ul className={Styles["Checkout__container--total-main"]}>
            <li>
              <aside>Tickets</aside>
              <section>
                <p>Tickets: $257.00 x 2</p>
                <p>$514.00</p>
              </section>
            </li>
            <li>
              <aside>Fees</aside>
              <section>
                <p>Service Fee: $46.25 x 2</p>
                <p>$92.50</p>
              </section>
              <section>
                <p>Order Processing Fee</p>
                <p>$5.00</p>
              </section>
            </li>
            <li>
              <aside>Delivery</aside>
              <section>
                <p>Go Mobile</p>
                <p>Free</p>
              </section>
            </li>
          </ul>

          <Link to="#" onClick={() => true} className={Styles["cancel-order"]}>
            {" "}
            Cancel Order{" "}
          </Link>
          <form className={Styles["Checkout__container--total-form"]}>
            *All Sales Final - No Refunds
            <label>
              <input type="checkbox" />
              <p>
                I have read and agree to the current{" "}
                <Link to="/#"> Terms of Use </Link>.
              </p>
            </label>
            <Button type="submit" label="place-order" handleClick={() => true}>
              {" "}
              Place Order{" "}
            </Button>
          </form>
          <h6>*Exceptions may apply, see our Terms of Use.</h6>
        </section>
      </div>
    </div>
  );
}

export default Checkout;
