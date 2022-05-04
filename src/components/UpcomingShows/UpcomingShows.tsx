import { UpcomingShowCard } from "../Cards";
import Styles from "./UpcomingShows.module.scss";

function Upcomingshows() {
  return (
    <main className={Styles.Upcomingshows}>
      <h2 className={Styles.UpcomingHeading}> Upcoming shows</h2>
      <section className={Styles.wrapper}>
        <UpcomingShowCard />
        <UpcomingShowCard />
        <UpcomingShowCard />
        <UpcomingShowCard />
        <UpcomingShowCard />
        <UpcomingShowCard />
        <UpcomingShowCard />
        <UpcomingShowCard />
      </section>
    </main>
  );
}

export default Upcomingshows;
