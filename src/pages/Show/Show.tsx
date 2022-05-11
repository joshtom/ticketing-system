import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { useParams, useNavigate } from "react-router-dom";
import Styles from "./Show.module.scss";
import { upcomingShowsData, UpcomingShows } from "../../utils/data";
import { numberWithCommas, Truncate } from "../../helpers";
import Button from "../../components/Button/Button";
import { useStickyState } from "../../hooks";

function Show() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [, setValue] = useStickyState({}, "ticketPrice");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState<UpcomingShows>({
    imageUrl: "",
    showId: 0,
    showNo: "",
    title: "",
    ticketPrice: "",
  });
  const [ticketValue, setTicketValue] = useState(1);
  let [fees, setFees] = useState<number>(450);

  const handleTicketChange = (e: React.ChangeEvent<any>) => {
    setTicketValue(e.target.value);
    if (Number(e.target.value) === 1) setFees(450);
    else if (Number(e.target.value) === 2) setFees(900);
    else if (Number(e.target.value) === 3) setFees(1350);
    else if (Number(e.target.value) === 4) setFees(1800);
    else if (Number(e.target.value) === 5) setFees(2250);
  };

  const handleCheckout = () => {
    // Set data to localstorage.
    setLoading(true);
    setValue({
      total: parseFloat(show.ticketPrice) + fees,
      fees: fees,
      ticketValue: ticketValue,
    });
    setTimeout(() => {
      setLoading(false);
      navigate("/checkout");
    }, 3000);
  };

  useEffect(() => {
    upcomingShowsData.forEach((data) => {
      return data.showId === Number(id) ? setShow(data) : null;
    });
  }, [id]);
  return (
    <div className={Styles.Show}>
      {/*  */}
      <Header title="ticketmaster" />
      {show?.title ? (
        <header className={Styles.header}>
          <section className={Styles.title}>
            <h1>{show?.title}</h1>
            <span>Home / Show / {id}</span>
            <span onClick={() => navigate("/")}>Go Back</span>
          </section>
          <section className={Styles.image}>
            <img
              src={`${show?.imageUrl}`}
              alt={`${show?.title}`}
              width="100%"
              height="100%"
            />
          </section>
        </header>
      ) : (
        <header className={Styles.notFound}>
          <h1> Show Not found </h1>
          <span onClick={() => navigate("/")}>Go Back</span>
        </header>
      )}
      {show?.title && (
        <main className={Styles.main}>
          <section className={Styles["showTicket"]}>
            <h3 className={Styles["showTicket--title"]}>Choose Your Tickets</h3>
            <div className={Styles["showTicket__card"]}>
              <div className={Styles["showTicket__card--top"]}>
                Friday May 27 2022
              </div>
              <div className={Styles["showTicket__card--body"]}>
                <aside className={Styles["leftAside"]}>
                  <h1>{show?.title}</h1>
                  <p className={Styles["total"]}>
                    <span>${numberWithCommas(show?.ticketPrice)}</span>{" "}
                    <span>+ ${fees}</span>
                  </p>
                  <p className={Styles["admission"]}>TICKET ADMITS ONE</p>
                </aside>
                <aside className={Styles["rightAside"]}>
                  <form>
                    <label>Choose Ticket Number</label>
                    <select
                      name="ticketChange"
                      id=""
                      onChange={handleTicketChange}
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </form>
                </aside>
              </div>
            </div>
          </section>
          <section className={Styles["showSummary"]}>
            <h3 className={Styles["showSummary--title"]}>Summary</h3>
            <div className={Styles["showSummary__card"]}>
              <div className={Styles["showSummary__card--top"]}>
                {Truncate(show?.title, 100)}
              </div>
              <ul className={Styles["showSummary__card--body"]}>
                <li>
                  <p className={Styles.title}>
                    {ticketValue} x {show?.title}
                  </p>
                  <p>${numberWithCommas(show.ticketPrice)}</p>
                </li>
                <li>
                  <section>
                    <p>Fees</p>
                    <p>${fees}</p>
                  </section>
                  <section>
                    <p>Subtotal</p>
                    <p>
                      $
                      {numberWithCommas(
                        Number(parseInt(show.ticketPrice) + fees)
                      )}
                    </p>
                  </section>
                </li>
              </ul>
              <footer className={Styles["showSummary__card--footer"]}>
                <div>
                  <h3>Total</h3>
                  <h3>
                    $
                    {numberWithCommas(
                      Number(parseInt(show.ticketPrice) + fees)
                    )}
                  </h3>
                </div>
                <Button
                  label="Continue to Checkout"
                  type="button"
                  handleClick={handleCheckout}
                  loader={loading}
                >
                  {" "}
                  Continue to Checkout{" "}
                </Button>
              </footer>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default Show;
