import Styles from "./UpcomingShowCard.module.scss";
function UpcomingShowCard() {
  return (
    <div className={Styles.UpcomingCard}>
      <header data-include="PRESALE: WED - JUN 1 -2 PM">
        <img
          src="https://images.unsplash.com/photo-1514679725149-ecaa6013d817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmloYW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          alt="rihanna show"
        />
      </header>
      <main>
        <p>SUN · SEP 11 · 1:00 PM</p>
        <h4>Men's Final / Women's Doubles Final</h4>
      </main>
      <footer>Flushing, NY · Arthur Ashe Stadium</footer>
    </div>
  );
}

export { UpcomingShowCard };
