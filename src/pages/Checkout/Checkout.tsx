import { useState, useEffect } from "react";
import Button from "../../components/Button/Button";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Styles from "./Checkout.module.scss";
import Icon from "../../components/Icon";
import CollectCardDetails from "../../components/CollectCardDetails/CollectCardDetails";
import { useStickyState } from "../../hooks";
import { creditCardType, numberWithCommas } from "../../helpers";
function Checkout() {
  const [showInput, setShowInput] = useState<Boolean>(false);
  const [readChange, setreadChange] = useState(false);
  const [creditCardDetails] = useStickyState({}, "cardDetails");
  const [cardDetails, setCardDetails] = useState(creditCardDetails);
  const [totalValue] = useStickyState({}, "ticketPrice");
  const navigate = useNavigate();
  const handleCancelOrder = () => {
    window.localStorage.removeItem("ticketPrice");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  /** What's going on here -> LINE 29 - 31
   ** Because Items gotten from localstorage is set as default state for cardDetails
   ** Localstorage isn't asynchronous, Reason why a new state is set.
   ** However, The state is not persisted, So localstorage serves as a fallback (Because it already has the new state as well)
   */

  const { cardnumber, fullname, expirationdate } = cardDetails.cardDetails
    ? cardDetails.cardDetails
    : cardDetails;

  const handleReadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.currentTarget;
    setreadChange(checked);
  };

  const handlePlaceOrder = () => {
    // Check If not card is selected
    // Check the checkbox is also not checked
    try {
      if (Object.keys(cardDetails).length === 0) {
        alert("Kindly check and add your card detail");
      } else if (!readChange) {
        alert("Confirm if you have read and agreed to the terms and condition");
      } else {
        alert("Order Placed Succcessfully");
        handleCancelOrder();
      }
    } catch (e) {
      console.log("An Unknown Error Occured", e);
    }
  };

  // If the key in localstorage is empty, Redirect to homepage
  if (Object.keys(totalValue).length === 0) {
    return <Navigate to="/" />;
  }

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
                <section className={Styles["payment--addCard"]}>
                  <h3>Use Credit / Debit Card</h3>

                  {Object.keys(cardDetails).length === 0 ? null : (
                    <section className={Styles["payment--addCard__addedCard"]}>
                      <header>
                        <Icon iconName={creditCardType(cardnumber)} />
                        <section>
                          <p>
                            {creditCardType(cardnumber)} -{" "}
                            {cardnumber?.slice(-4)}{" "}
                          </p>
                          <p>
                            {fullname} | exp. {expirationdate}
                          </p>
                        </section>
                      </header>
                    </section>
                  )}

                  <section
                    className={Styles["payment--addCard__wrapper"]}
                    onClick={() => setShowInput(!showInput)}
                  >
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

                {/*  */}
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
              <CollectCardDetails
                setShowInput={setShowInput}
                setCardDetails={setCardDetails}
              />
            )}
          </div>
        </section>
        <section className={Styles["Checkout__container--total"]}>
          <header className={Styles["Checkout__container--total-header"]}>
            <p>Total</p>
            <p>${numberWithCommas(Number(totalValue.total).toFixed(2))}</p>
          </header>
          <ul className={Styles["Checkout__container--total-main"]}>
            <li>
              <aside>Tickets</aside>
              <section>
                <p>Tickets: $450.00 x {totalValue?.ticketValue}</p>
                <p>${numberWithCommas(Number(totalValue.fees).toFixed(2))}</p>
              </section>
            </li>
            <li>
              <aside>Fees</aside>
              <section>
                <p>Service Fee: $46.25 x {totalValue?.ticketValue}</p>
                <p>${46.25 * totalValue?.ticketValue}</p>
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

          <p onClick={handleCancelOrder} className={Styles["cancel-order"]}>
            {" "}
            Cancel Order{" "}
          </p>
          <form
            onSubmit={handlePlaceOrder}
            className={Styles["Checkout__container--total-form"]}
          >
            *All Sales Final - No Refunds
            <label>
              <input type="checkbox" onChange={handleReadChange} />
              <p>
                I have read and agree to the current{" "}
                <Link to="/#"> Terms of Use </Link>.
              </p>
            </label>
            <Button type="submit" label="place-order">
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
