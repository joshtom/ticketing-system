import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { useParams, useNavigate } from "react-router-dom";
import Styles from "./Show.module.scss";
import { upcomingShowsData, UpcomingShows } from "../../utils/data";
import { Truncate } from "../../helpers";
import Button from "../../components/Button/Button";

function Show() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState<UpcomingShows>({
    imageUrl: "",
    showId: 0,
    showNo: "",
    title: "",
  });

  useEffect(() => {
    upcomingShowsData.forEach((data) => {
      return data.showId === Number(id) ? setShow(data) : null;
    });
  }, [id]);
  return (
    <div className={Styles.Show}>
      {/*  */}
      <Header />
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
                  <span>$10,000</span> <span>+ $450</span>
                </p>
                <p className={Styles["admission"]}>TICKET ADMITS ONE</p>
              </aside>
              <aside className={Styles["rightAside"]}>
                <label>Choose Ticket Number</label>
                <select name="" id="">
                  <option value="#">Select Ticket</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
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
                <p className={Styles.title}>1 x {show?.title}</p>
                <p>$10,000</p>
              </li>
              <li>
                <section>
                  <p>Fees</p>
                  <p>$450</p>
                </section>
                <section>
                  <p>Subtotal</p>
                  <p>$10,450</p>
                </section>
              </li>
            </ul>
            <footer className={Styles["showSummary__card--footer"]}>
              <div>
                <h3>Total</h3>
                <h3>$10,450</h3>
              </div>
              <Button
                label="Continue to Checkout"
                type="button"
                handleClick={() => true}
                loader={false}
              >
                {" "}
                Continue to Checkout{" "}
              </Button>
            </footer>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Show;
