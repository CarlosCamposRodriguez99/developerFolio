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
  ), // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CarlosCamposRodriguez99",
  linkedin:
    "https://www.linkedin.com/in/carlos-campos-rodr%C3%ADguez-7045a6212/",
  gmail: "thefields85@gmail.com",
  whatsapp:
    "https://api.whatsapp.com/send?phone=523321235662&text=Hola%20Carlos!",

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
      skillName: "figma",
      fontAwesomeClassname: "fab fa-figma"
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
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "javascript",
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
      schoolName: "ARIOAC",
      logo: require("./assets/images/arioac.jpg"),
      subHeader: "Desarrrollo de página web",
      duration: "Septiembre 2024 - Presente"
    },
    {
      schoolName: "GO CONSULTING",
      logo: require("./assets/images/go.jpg"),
      subHeader: "Desarrollo de página web",
      duration: "Febrero 2024 - Presente"
    },
    {
      schoolName: "ICIAMEX",
      logo: require("./assets/images/iciamex.jpeg"),
      subHeader: "Desarrollo de página y aplicación web",
      duration: "Enero 2024 - Presente"
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
      role: "",
      company: "Python",
      companylogo: require("./assets/images/python.jpg"),
      desc: "Desarrollo de soluciones versátiles utilizando Python, un lenguaje potente y de alto nivel. Mi experiencia abarca desde la automatización de tareas y scripting, hasta la creación de APIs RESTful y el análisis de datos. He implementado aplicaciones robustas y escalables que optimizan procesos y facilitan la toma de decisiones basada en información.",
      descBullets: [
        "APIs y microservicios con Flask y FastAPI",
        "Desarrollo web full-stack con Django",
        "Pruebas unitarias y TDD con pytest"
      ]
    },
    {
      role: "",
      company: "Git",
      companylogo: require("./assets/images/git.png"),
      desc: "Dominio avanzado de Git para el control de versiones y la colaboración en equipo. Incluye la creación y gestión de ramas, fusión de cambios de forma segura, rebases limpios y buenas prácticas de flujo de trabajo (Git Flow, GitHub Flow). Uso de Git para mantener un historial claro, revertir cambios y colaborar en proyectos de cualquier escala.",
      descBullets: [
        "Flujo de trabajo con ramas (feature branches, release, hotfix)",
        "Revisión de código con pull requests y templates",
        "Integración con sistemas CI/CD (GitHub Actions, GitLab CI)"
      ]
    },
    {
      role: "",
      company: "React Native",
      companylogo: require("./assets/images/react.png"),
      desc: "Desarrollo de aplicaciones móviles multiplataforma con React Native, creando componentes reutilizables y altamente personalizables. Mi experiencia incluye el diseño de interfaces intuitivas, integración con APIs nativas y gestión eficiente del ciclo de vida de los componentes para asegurar apps fluidas y fáciles de mantener.",
      descBullets: [
        "Navegación y enrutamiento con React Navigation",
        "Gestión de estado en React Native (Redux, Context API o MobX)",
        "Optimización de rendimiento — FlatList, memo, useCallback y useMemo"
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
      projectDesc:
        "Startup inmobiliaria, plataforma web en PHP y MySQL para la búsqueda de casas y departamentos.",
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
      projectDesc:
        "Sitio web diseñado para una empresa especializada en la fabricación de bandas transportadoras, mobiliario de acero inoxidable, piezas maquinadas, plataformas y grúas de elevación, con un enfoque integral en soluciones de automatización industrial.",
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
      projectDesc:
        "Tienda online con pasarelas de pago, formularios, buscador, sidebar, galería de productos y optimización SEO/SEM.",
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
      projectDesc:
        "App que muestra en tiempo real las cotizaciones de las criptomonedas más relevantes.",
      footerLink: [
        {
          name: "Visitar",
          url: "https://vite-project-dusky.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Herramientas"),
  achievementsCards: [
    {
      title: "Google Analytics",
      subtitle: "Analítica web en tiempo real",
      image: require("./assets/images/analitycs.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: []
    },
    {
      title: "Google Cloud",
      subtitle: "Servicios gestionados en la nube",
      image: require("./assets/images/cloud.png"),
      imageAlt: "Google Cloud",
      footerLink: []
    },
    {
      title: "Google Ads",
      subtitle: "Segmentación avanzada para tu audiencia",
      image: require("./assets/images/ads.png"),
      imageAlt: "Google Cloud",
      footerLink: []
    }
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
  display: false // Set false to hide this section, defaults to true
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
  subtitle: "Guadalajara, Jalisco, México",
  number: "+52 33 31 30 83 35",
  email_address: "thefields85@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
