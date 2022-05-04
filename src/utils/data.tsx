interface UpcomingShows {
  imageUrl: string;
  title: string;
  showNo: string;
  showId: number;
}

interface UpcomingTicket {
  title: string;
  date: string;
  subtitle: string;
}
const upcomingShowsData: Array<UpcomingShows> = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1514679725149-ecaa6013d817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmloYW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Men's Final / Women's Doubles Final",
    showNo: "..",
    showId: 1,
  },
  {
    imageUrl:
      "https://www.hollywoodreporter.com/wp-content/uploads/2021/12/most_anticipated_final-H-2021.jpg",
    title: "1st Round Men's / Women's",
    showNo: "..",
    showId: 2,
  },
  {
    imageUrl:
      "https://pyxis.nymag.com/v1/imgs/1f5/13d/c51518f8c4907aeba8da00674cc4a0cd85-07-most-anticipated-tv-shows.rsocial.w1200.jpg",
    title: "Harry Styles: One Night Only in New York",
    showNo: "..",
    showId: 3,
  },
  {
    imageUrl: "https://junkee.com/wp-content/uploads/2020/01/anticipatedtv.jpg",
    title: "Stars on Ice",
    showNo: "..",
    showId: 4,
  },
  {
    imageUrl:
      "https://static01.nyt.com/images/2022/05/02/arts/02netflix-new/02netflix-new-videoSixteenByNine3000.jpg",
    title: "PBR: Team Series",
    showNo: "..",
    showId: 5,
  },
  {
    imageUrl:
      "https://assets3.thrillist.com/v1/image/3045955/1584x1056/crop;jpeg_quality=60;progressive.jpg",
    title: "Scott Hamilton and Friend on Ice",
    showNo: "..",
    showId: 6,
  },
  {
    imageUrl:
      "https://ichef.bbci.co.uk/news/976/cpsprodpb/8C34/production/_123829853_hi073641173.jpg",
    title: "Ed Sheeran Live",
    showNo: "..",
    showId: 7,
  },
  {
    imageUrl:
      "https://www.gannett-cdn.com/presto/2022/03/15/USAT/3630767d-b31f-446e-ac0e-2880afa46561-20220316_SPCL_ET_586_SPRINGTV_FINAL.jpg?crop=1911,1075,x0,y0&width=1911&height=1075&format=pjpg&auto=webp",
    title: "Jurassic World Live Tour",
    showNo: "..",
    showId: 8,
  },
];

const upcomingTicketData: Array<UpcomingTicket[]> = [
  [
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
  ],
  [
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
  ],
  [
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
  ],
  [
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
  ],
  [
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
  ],
  [
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
  ],
  [
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
  ],
  [
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
    { title: "..", date: "JUN 16", subtitle: "...." },
  ],
];

export { upcomingShowsData, upcomingTicketData };
