import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hello! Welcome to my website.', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi, my name is ',
  name: 'Matthew Morrison',
  subtitle: 'I am a computer science major at',
  school: 'Vanderbilt University',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.JPG',
  paragraphOne: 'I am a junior at Vanderbilt University majoring in computer science with a minor in engineering management.',
  paragraphTwo: 
  'Over the summer, I taught kids ages 8-18 fundamental programming concepts and problem-solving skills through a remote tutoring company called Juni Learning. ',
  paragraphThree: 'In my free time I love to play golf, jam out on my guitar, and go on long distance runs.',
  paragraphFour: 'Programming Languages: C++, Python, Java, JavaSript/HTML/CSS',
  resume: 'https://drive.google.com/file/d/1sw_j-wB1lXDTSMlIU9FBsuphv_wJq8rU/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jmmorrison9@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/jmmorrison9',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/matthewmorrison10/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/matthew-m-7a7a1310a/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/morrijm4',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
