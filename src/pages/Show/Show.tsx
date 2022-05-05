import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { useParams, useNavigate } from "react-router-dom";
import Styles from "./Show.module.scss";
import { upcomingShowsData, UpcomingShows } from "../../utils/data";

function Show() {
  let { id } = useParams();
  const navigate = useNavigate();
  const [show, setShow] = useState<UpcomingShows | null>({
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
      {/* <main className={Styles.main}>{`${show}`}</main> */}
    </div>
  );
}

export default Show;
