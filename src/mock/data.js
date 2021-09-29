import { nanoid } from "nanoid";

// HEAD DATA
export const headData = {
  title: "Hello! Welcome to my website.", // e.g: 'Name | Developer'
  lang: "en", // e.g: en, es, fr, jp
  description: "Welcome to my website", // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hi, my name is ",
  name: "Matthew Morrison",
  subtitle: "I am a computer science major at",
  school: "Vanderbilt University",
  cta: "Learn more",
};

// ABOUT DATA
export const aboutData = {
  img: "profile.JPG",
  paragraphOne:
    "I am a computer science major at Vanderbilt University graduating in May 2022. ",
  paragraphTwo:
    "Over the summer, taught myself how to create websites using JavaScript libraies." +
    "My preferences are developing with React on the frontend and using Express on the backend.",
  paragraphThree:
    "In my free time I enjoy playing golf and jamming out on my guitar",
  paragraphFour: "Programming Languages: C++, Python, Java, JavaSript/HTML/CSS",
  resume:
    "https://drive.google.com/file/d/1rt9CS0Qc-TekFXaSSX85dUjjb1xUvC_k/view?usp=sharing", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "song-popularity-quiz.png",
    title: "Song Popularity Quiz",
    info: "This is a quiz mini-game where the user has to rank the popularity of a list of songs based on Billboard's Hot 100 list.",
    info2:
      "The frontend is deployed with Netlify and the backend is deployed with Digital Ocean.",
    url: "https://gracious-kilby-03caf6.netlify.app", //'https://matthewmorrison-portfolio.com/SpotifyRestApi',
    repo: "https://github.com/ChangePlusPlusVandy/change-coding-challenge-2021-morrijm4", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "spotify-rest-api.png",
    title: "Spotify Rest Api",
    info: "This project I played around with the spotify rest api and created a backend server hosted by Digital Ocean",
    info2: "",
    url: "https://matthewmorrison-portfolio.com/SpotifyRestApi", //'https://matthewmorrison-portfolio.com/SpotifyRestApi',
    repo: "https://github.com/morrijm4/spotify-rest-api", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "calculator.png",
    title: "Calculator",
    info: "This was my first project I have build from scratch using HTML, CSS, and JavaScript. It taught me the basics of how to design a website and how to make it dynamic with JavaScript.",
    info2: "",
    url: "https://fervent-yalow-77b5c7.netlify.app/",
    repo: "https://github.com/morrijm4/Calculator", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "mini-game.png",
    title: "Tweet Gusser Mini-Game",
    info: "This is a game where you have to guess whether a tweet was tweeted by Elon Musk or Kanye West.",
    info2:
      "It was written 100% in Python using the tweepy library to access the Twitter API. This project was a coding challenge to join Change++, a student run organization that designs and builds applications for non-profit organizations.",
    url: "",
    repo: "https://github.com/morrijm4/change-coding-challenge-morrijm4", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "sudoku-solver.png",
    title: "Sudoku Solver",
    info: "Recursive backtracking algorithm that can solve a sudoku puzzle with an average time of 0.001567 seconds. This program was written in C++.",
    info2: "",
    url: "",
    repo: "https://github.com/morrijm4/Sudoku-Solver", // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "",
  btn: "",
  email: "jmmorrison9@gmail.com",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: "twitter",
      url: "https://twitter.com/jmmorrison9",
    },
    {
      id: nanoid(),
      name: "instagram",
      url: "https://www.instagram.com/matthewmorrison10/",
    },
    {
      id: nanoid(),
      name: "linkedin",
      url: "https://www.linkedin.com/in/matthew-m-7a7a1310a/",
    },
    {
      id: nanoid(),
      name: "github",
      url: "https://github.com/morrijm4",
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
