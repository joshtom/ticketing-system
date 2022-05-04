import { FC } from "react";
import Styles from "./UpcomingShowCard.module.scss";
interface UpcomingShowCardInterface {
  loading?: boolean;
  imageUrl?: string;
  title?: string;
}
const UpcomingShowCard: FC<UpcomingShowCardInterface> = ({
  imageUrl,
  loading,
  title,
}) => {
  return (
    <div className={Styles.UpcomingCard}>
      {loading ? (
        <div className={Styles.Loading}> Loading... </div>
      ) : (
        <>
          <header data-include="PRESALE: WED - JUN 1 -2 PM">
            <img
              src={
                imageUrl ??
                "https://images.unsplash.com/photo-1514679725149-ecaa6013d817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmloYW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              }
              alt="rihanna show"
            />
          </header>
          <main>
            <p>SUN · SEP 11 · 1:00 PM</p>
            <h4>{title ?? `Men's Final / Women's Doubles Final`} </h4>
          </main>
          <footer>Flushing, NY · Arthur Ashe Stadium</footer>{" "}
        </>
      )}
    </div>
  );
};

export { UpcomingShowCard };
