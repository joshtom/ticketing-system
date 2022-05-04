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

const upcomingShows: Array<UpcomingShows> = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1514679725149-ecaa6013d817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmloYW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Rihanna Show",
    showNo: "..",
    showId: 1,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1514679725149-ecaa6013d817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmloYW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Drake Show",
    showNo: "..",
    showId: 2,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1514679725149-ecaa6013d817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmloYW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Davido Show",
    showNo: "..",
    showId: 3,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1514679725149-ecaa6013d817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmloYW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Beyonce Show",
    showNo: "..",
    showId: 4,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1514679725149-ecaa6013d817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmloYW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Wizkid Show",
    showNo: "..",
    showId: 5,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1514679725149-ecaa6013d817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmloYW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Ariana Grande Show",
    showNo: "..",
    showId: 6,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1514679725149-ecaa6013d817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmloYW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Ed Sheeran Show",
    showNo: "..",
    showId: 7,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1514679725149-ecaa6013d817?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmloYW5uYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Will Smith Show",
    showNo: "..",
    showId: 8,
  },
];

const upcomingTicket: Array<UpcomingTicket[]> = [
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

export { upcomingShows, upcomingTicket };
