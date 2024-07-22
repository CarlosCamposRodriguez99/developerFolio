/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "TheFields",
  title: "¡Hola! ¿Estás buscando desarrollar tu Startup Digital?",
  subTitle: emoji(
    "Somos desarrolladores de software 🚀 con experiencia en la creación de aplicaciones web y móviles con JavaScript / Next.js / React.js / Node.js / React Native y algunos otros frameworks y lenguajes de programación"
  ),// Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CarlosCamposRodriguez99",
  linkedin: "https://www.linkedin.com/in/carlos-campos-rodr%C3%ADguez-7045a6212/",
  gmail: "jccamposrz@gmail.com",
  whatsapp: "https://api.whatsapp.com/send?phone=523321235662&text=Hola%20Carlos!",

  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Tecnologías",
  subTitle: "Algunas tecnologías que usamos:",
  skills: [
    emoji(
      "⚡ Desarrollo de interfaces de usuario / front-end altamente interactivas para sus aplicaciones web y móviles"
    ),
    emoji("⚡ Desarrollo de software personalizado"),
    emoji(
      "⚡ Integración de servicios de terceros como Firebase / Firestore / AWS / MongoDB / MySQL"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Emery Mark",
      logo: require("./assets/images/emery.jpg"),
      subHeader: "Desarrrollo de Software Personalizado y Aplicación Web",
      duration: "Septiembre 2023 - Presente",
    },
    {
      schoolName: "Coffee Point",
      logo: require("./assets/images/coffe.png"),
      subHeader: "Desarrollo de Aplicación Móvil",
      duration: "Febrero 2023 - Presente",
    },
    {
      schoolName: "ICIAMEX",
      logo: require("./assets/images/iciamex.jpeg"),
      subHeader: "Desarrollo de Página Web",
      duration: "Enero 2024 - Presente",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Desarrollador Web",
      company: "TypeScript",
      companylogo: require("./assets/images/type.png"),
      date: "Junio 2020 – Presente",
      desc: "Desarrollo de aplicaciones utilizando TypeScript, un lenguaje de programación que mejora la seguridad y el mantenimiento del código. Mi experiencia incluye la creación de aplicaciones web y móviles de alto rendimiento, así como la implementación de soluciones robustas y escalables.",
      descBullets: [
        "Desarrollo de Aplicaciones Web con React y TypeScript",
        "Backend con Node.js y TypeScript"
      ]
    },
    {
      role: "React Native",
      company: "React",
      companylogo: require("./assets/images/react.png"),
      date: "Mayo 2020 – Presente",
      desc: "Experiencia en la creación de componentes reutilizables en React es esencial. Esto implica la capacidad de diseñar y desarrollar componentes que sean flexibles, personalizables y que puedan ser fácilmente integrados en diferentes partes de una aplicación. La reutilización de componentes ayuda a mantener un código limpio y facilita el mantenimiento a lo largo del tiempo.",
      descBullets: [
        "Gestión de Estados con React (por ejemplo, Redux o Context API)",
        "Optimización de Rendimiento en Aplicaciones React"
      ]
    },
    {
      role: "Git",
      company: "Git",
      companylogo: require("./assets/images/git.png"),
      date: "Enero 2020 – Presente",
      desc: "Competente en la gestión de versiones con Git implica saber cómo utilizar Git para controlar el historial de cambios de tu código, realizar seguimiento de revisiones, trabajar con ramas y fusionar cambios de manera eficiente. Esto es fundamental para colaborar en proyectos de desarrollo y mantener un control preciso del código fuente.",
      descBullets: [
        "Gestión de control de versiones con Git",
        "Resolución de Conflictos en Git"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Proyectos",
  subtitle: "Algunas startups y aplicaciones que hemos desarrollado",
  projects: [
    {
      image: require("./assets/images/house.svg").default,
      projectName: "Startup Real Estate",
      projectDesc: "Página web para industría del sector inmobiliario, ideal para buscar casas y departamentos, startup hecha con PHP y MySQL.",
      footerLink: [
        {
          name: "Visitar",
          url: "https://bienesraices-inicio.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/website.svg").default,
      projectName: "Sitio web Iciamex",
      projectDesc: "Sitio web creado para una empresa dedicada a la fabricación de bandas transportadoras, mobiliario en acero inoxidable, maquinados, plataformas y grúas de elevación, enfocada en la automatización industrial.",
      footerLink: [
        {
          name: "Visitar",
          url: "https://www.iciamex.com/"
        }
      ]
    },
    {
      image: require("./assets/images/ecommerce.svg").default,
      projectName: "Ecommerce",
      projectDesc: "Tienda en línea con componentes importantes como lo son métodos de pago, formularios, buscador, sideBar, galería de las imágenes de los productos, SEO y SEM.",
      footerLink: [
        {
          name: "Visitar",
          url: "https://ap-ocshop.myshopify.com/"
        }
      ]
    },
    {
      image: require("./assets/images/bitcoin.svg").default,
      projectName: "Cripto Cotizador",
      projectDesc: "Cotiza en tiempo real las criptomonedas más relevantes al momento",
      footerLink: [
        {
          name: "Visitar",
          url: "https://vite-project-dusky.vercel.app/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Logros y Certificaciones 🏆 "),
  achievementsCards: [
    {
      title: "IBM",
      subtitle:
        "Certificaciones y competencias",
      image: require("./assets/images/ibm.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
       
      ]
    },
    {
      title: "Microsoft",
      subtitle:
        "Certificaciones",
      image: require("./assets/images/micro.png"),
      imageAlt: "Microsoft",
      footerLink: []
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false// Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contáctame ☎️"),
  subtitle:
    "Guadalajara, Jalisco, México",
  number: "+52-3321235662",
  email_address: "jccamposrz@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  podcastSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable
};
