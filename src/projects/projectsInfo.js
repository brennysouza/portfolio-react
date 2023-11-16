// Desc: This file contains the information for each project that will be displayed on the projects page.
import workdayScheduler from "../assets/workdayscreenshot copy.png";
import horiseonRefactor from "../assets/horiseoncapture copy.png";
import dishDash from "../assets/dishdashcopy.png";
import passwordGenerator from "../assets/passwordgenerator.png";
import javascriptJam from "../assets/javascriptjamscreenshot copy.png";
import pwaTextEditor from "../assets/pwatexteditor.png";

const projectsInfo = [
    {
        id: 1,
        name: "Workday Scheduler",
        image: workdayScheduler,
        description: "This application is a simple calendar in which users can save events, to-dos, reminders, or assignments for each hour of a regular working day consisting between the hours of 9am to 5pm.",
        deployLink: "https://brennysouza.github.io/work-day-scheduler/",
        github: "https://github.com/brennysouza/work-day-scheduler",
    },
    {
        id: 2,
        name: "Horiseon Refactor",
        image: horiseonRefactor,
        description: "I have been tasked by a marketing company to access their website code and refactor it, improving its accessibility.",
        deployLink: "https://brennysouza.github.io/horiseon-website-refactor-v1/",
        github: "https://github.com/brennysouza/horiseon-website-refactor-v1",
    },
    {
        id: 3,
        name: "Dish Dash",
        image: dishDash,
        description: "Website that offers users the ability to search for and save recipes. Project contains: html, css, javascript, bootstrap, and API's.",
        deployLink: "https://brennysouza.github.io/dish-dash/",
        github: "https://github.com/brennysouza/dish-dash",
    },
    {
        id: 4,
        name: "Password Generator",
        image: passwordGenerator,
        description: "This is a password generator made specifically for business looking to generate new and secure passwords for their employees. It features html and css and is powered by javascript.",
        deployLink: "https://brennysouza.github.io/new-password-generator/",
        github: "https://github.com/brennysouza/new-password-generator",
    },
    {
        id: 5,
        name: "JavaScript Jam Quiz",
        image: javascriptJam,
        description: "A short quiz containing questions regarding HTML, CSS, and JavaScript for users to study, practice, and continue to stay fresh on important concepts and terms. Code consists of HTML, CSS, and JavaScript.",
        deployLink: "https://brennysouza.github.io/javascript-jam/",
        github: "https://github.com/brennysouza/javascript-jam",
    },
    {
        id: 6,
        name: "PWA Text Editor",
        image: pwaTextEditor,
        description: "This is a single-page application text editor run in the browser utilizing PWA criteria. The application functions online and offline.",
        deployLink: "https://blooming-wave-08919-6ed452f756d1.herokuapp.com/",
        github: "https://github.com/brennysouza/pwa-text-editor",
    },
];

export default projectsInfo;