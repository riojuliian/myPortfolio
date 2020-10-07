
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Rio Julian",
  title: "Hi There, I'm Rio",
  subTitle: emoji("A computer engineering graduate who's passionate about data, machine learning, mobile and web development 🚀."),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/riojuliian",
  linkedin: "https://www.linkedin.com/in/riojuliian/",
  gmail: "riojuliian@gmail.com",
  //gitlab: "https://gitlab.com/", 
  twitter: "https://twitter.com/riojuliian",
  //medium: "https://medium.com/",
  //stackoverflow: "https://stackoverflow.com/users/10422806/"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "A QUICK LEARNER PERSON WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Identifying and visualizing data, using data analysis tools to provide meaningful information and insights"),
    emoji("⚡ Develop highly interactive Front end for your web applications"),
    emoji("⚡ Develop Android Mobile Application with Public API"),
    emoji("⚡ Implementing machine learning to develop predicting and forecasting algorithm on a large amount of data")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Data Analytic",
      fontAwesomeClassname: "fas fa-chart-bar"
    },
    {
      skillName: "Machine Learning",
      fontAwesomeClassname: "fas fa-robot"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "Universitas Diponegoro",
      logo: require("./assets/images/undipLogoTr-04.png"),
      subHeader: "Bachelor of Engineer in Computer Engineering",
      duration: "August 2016 - June 2020",
      desc: "Organization and Activity Experiences:",
      descBullets: [
        "Part of Undip Robotic Development Center 2016",
        "Part of BEM FT Undip 2017 as Staff in Research and Technology Division",
        "Funded Awardee on Student Creativity Program 2017 (PKM-Karsa cipta)",
        "Part of Al-Muharrik Islamic Community of Computer Engineering as Head of HRD Division",
        "Community Development Program (Kuliah Kerja Nyata) by Diponegoro University"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analytics/Data Science",  //Insert stack or technology you have experience in
      progressPercentage: "75%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "50%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Laboratory Assistant",
      company: "Department of Computer Engineering",
      companylogo: require("./assets/images/jajal1-01.jpg"),
      date: "August 2019 – December 2019",
      desc: "As advanced computer networking assistant in Computer Network Laboratory of Computer Engineering at Universitas diponegoro, my duties are:",
      descBullets: [
        "Creating a practicum module related to advanced computer networking",
        "Guiding and assisting practicum participants",
        "Provide pretest, post-test, and final test in each group of student",
        "Evaluate and keep an eye on 70+ student experimental report"
      ]
    },
    {
      role: "Android Developer (Intern)",
      company: "PT. Angkasa Pura II (Persero)",
      companylogo: require("./assets/images/apLogo-02.jpg"),
      date: "January 2019 – February 2019",
      desc: "I have experience of working as internship trainee for Android Developer Position. Me and my team was developed and implemented monitoring application for Soekarno-Hatta Airport facility using Android and Firebase. Whereas my duties are:",
      descBullets: [
        "Analyzed functional user requirements",
        "Designed application workflows using flowcharts and UML",
        "Created backend services that monitor airport facility through manager privileges"
      ]
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "riojuliian", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  subtitle: "Some Cool Projects Made by Me and More to Come!",
  projects: [
    {
      image: require("./assets/images/project-05.jpg"),
      link: "https://github.com/riojuliian/Aplikasi-Monitoring-Fasilitas-Bandara-Soekarno-Hatta"
    },
    {
      image: require("./assets/images/project-06.jpg"),
      link: "https://github.com/riojuliian/Object-Classification-using-CNN-Pretained-Model"
    },
    {
      image: require("./assets/images/project-07.jpg"),
      link: "https://pwa-todolist-fe6a6.web.app/",
      subtitle: "Access with your mobile phone, for better experience."
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Certifications 🏆 "),
  subtitle: "Some certification courses that i have done!",

  achivementsCards: [
    {
      title: "Coursera",
      subtitle: "Certification of completion courses from Coursera, Business Metrics for Data-Driven Companies and Excel Skills for Business.",
      image: require("./assets/images/certification-02.jpg"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1g2M6LaV6HRXuhFGHcmml-0zsFCwXTvV9/view?usp=sharing" },
      ]
    },
    {
      title: "DataCamp",
      subtitle: "DataCamp of Completion courses from DataCamp.",
      image: require("./assets/images/certification-03.jpg"),
      footerLink: [{ name: "Certification", url: "https://drive.google.com/file/d/1m8Xkh9tFxRyRlDhVD_BSkk6eZXHWapr8/view?usp=sharing" }]
    },

    {
      title: "Udemy",
      subtitle: "Udemy data science completion courses certification",
      image: require("./assets/images/certification-04.jpg"),
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1WYxjdQswTjJxGFMSBqX0BDLEzXD_Uryy/view?usp=sharing" }
      ]
    }
  ]
};

// Blogs Section

/*const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};*/

// Talks Sections

// Podcast Section

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+6285921798550",
  email_address: "riojuliian@gmail.com"
};

//Twitter Section

/*const twitterDetails = {

  userName : "riojuliian"//Replace "twitter" with your twitter username without @

};*/
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, contactInfo };
