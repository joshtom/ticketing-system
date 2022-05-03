import Upcomingshows from "../../components/UpcomingShows/UpcomingShows";
import Header from "../../components/Header/Header";
import Styles from "./Home.module.scss";
function Home() {
  return (
    <div className={Styles.container}>
      <Header />
      <Upcomingshows />
    </div>
  );
}

export default Home;
