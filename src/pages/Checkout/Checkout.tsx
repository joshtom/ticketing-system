import { useState } from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Styles from "./Checkout.module.scss";
import Icon from "../../components/Icon";
import CollectCardDetails from "../../components/CollectCardDetails/CollectCardDetails";
function Checkout() {
  const [showInput, setShowInput] = useState<Boolean>(false);
  const handleCancelOrder = () => {
    // Cancel Order code here - >
    // Clear localstorage and navigate to the index page
  };
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
          <div className={Styles["payment"]}>
            <h3 className={Styles["payment--title"]}>Payment</h3>
            {showInput && (
              <p
                className={Styles["payment--storedTitle"]}
                onClick={() => setShowInput(!showInput)}
              >
                Back to Stored Cards
              </p>
            )}
            {!showInput ? (
              <div>
                <section
                  className={Styles["payment--addCard"]}
                  onClick={() => setShowInput(!showInput)}
                >
                  <h3>Use Credit / Debit Card</h3>
                  <section className={Styles["payment--addCard__wrapper"]}>
                    <span>
                      {" "}
                      <Icon iconName="plusIcon" />{" "}
                    </span>
                    <span>
                      {" "}
                      <Icon iconName="cardIcon" />{" "}
                    </span>
                    <p style={{ display: "inline-block" }}>Add New Card</p>
                  </section>
                </section>
                <section className={Styles["payment--payPal"]}>
                  <p className={Styles["payment--payPal__title"]}>
                    Or Pay With
                  </p>
                  <article>
                    By using a digital wallet and continuing past this page, you
                    have read and are accepting the{" "}
                    <Link to="/#">Terms of Use</Link>
                  </article>
                  <span>
                    <Icon iconName="payPal" />
                  </span>
                </section>
              </div>
            ) : (
              <CollectCardDetails />
            )}
          </div>
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

          <Link
            to="#"
            onClick={() => handleCancelOrder}
            className={Styles["cancel-order"]}
          >
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
