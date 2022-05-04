import { useState, useEffect } from "react";
import { UpcomingShowCard } from "../Cards";
import { upcomingShowsData } from "../../utils/data";
import Styles from "./UpcomingShows.module.scss";

function Upcomingshows() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  const renderUpcomingShow = () => {
    if (Array.isArray(upcomingShowsData) && !upcomingShowsData.length)
      return (
        <h1
          style={{
            color: "red",
          }}
        >
          {" "}
          Data not Found!{" "}
        </h1>
      );
    return upcomingShowsData.map((data) => (
      <UpcomingShowCard
        imageUrl={data?.imageUrl}
        key={data?.showId}
        loading={loading}
        title={data?.title}
        showId={data.showId}
      />
    ));
  };
  return (
    <main className={Styles.Upcomingshows}>
      <h2 className={Styles.UpcomingHeading}> Upcoming shows</h2>
      <section className={Styles.wrapper}>{renderUpcomingShow()}</section>
    </main>
  );
}

export default Upcomingshows;
