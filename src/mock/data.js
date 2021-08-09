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
    "I am a junior at Vanderbilt University majoring in computer science with a minor in engineering management.",
  paragraphTwo:
    "Over the summer, I taught kids ages 8-18 fundamental programming concepts and problem-solving skills through a remote tutoring company called Juni Learning. ",
  paragraphThree:
    "In my free time I love to play golf, jam out on my guitar, and go on long distance runs.",
  paragraphFour: "Programming Languages: C++, Python, Java, JavaSript/HTML/CSS",
  resume:
    "https://drive.google.com/file/d/1rt9CS0Qc-TekFXaSSX85dUjjb1xUvC_k/view?usp=sharing", // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: "spotify-rest-api.png",
    title: "Spotify Rest Api",
    info:
      "This project I played around with the spotify rest api and created a backend server with a raspberry pi",
    info2: "",
    url: "https://matthewmorrison-portfolio.com/SpotifyRestApi", //'https://matthewmorrison-portfolio.com/SpotifyRestApi',
    repo: "https://github.com/morrijm4/spotify-rest-api", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "calculator.png",
    title: "Calculator",
    info:
      "This was my first project I have build from scratch using HTML, CSS, and JavaScript. It taught me the basics of how to design a website and how to make it dynamic with JavaScript.",
    info2: "",
    url: "https://fervent-yalow-77b5c7.netlify.app/",
    repo: "https://github.com/morrijm4/Calculator", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "mini-game.png",
    title: "Tweet Gusser Mini-Game",
    info:
      "This is a game where you have to guess whether a tweet was tweeted by Elon Musk or Kanye West.",
    info2:
      "It was written 100% in Python using the tweepy library to access the Twitter API. This project was a coding challenge to join Change++, a student run organization that designs and builds applications for non-profit organizations.",
    url: "",
    repo: "https://github.com/morrijm4/change-coding-challenge-morrijm4", // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: "sudoku-solver.png",
    title: "Sudoku Solver",
    info:
      "Recursive backtracking algorithm that can solve a sudoku puzzle with an average time of 0.001567 seconds. This program was written in C++.",
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
