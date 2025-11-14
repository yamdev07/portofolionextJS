export interface Translation {
  navigation: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    contact: string;
  };
  intro: {
    hello: string;
    titles: string[];
    description: string;
    viewProjects: string;
    getInTouch: string;
  };
  about: {
    title: string;
    background: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    downloadResume: string;
    githubProfile: string;
  };
  projects: {
    title: string;
    description: string;
    allProjects: string;
    featured: string;
    viewCode: string;
    demo: string;
    projectsList: {
      eclatShop: {
        title: string;
        description: string;
      };
      timeManager: {
        title: string;
        description: string;
      };
      kuramaChat: {
        title: string;
        description: string;
      };
      rogueLike: {
        title: string;
        description: string;
      };
      twitchViewerBot: {
        title: string;
        description: string;
      };
      kickViewerBot: {
        title: string;
        description: string;
      };
    };
  };
  skills: {
    title: string;
    description: string;
    seeInAction: string;
    categories: {
      all: string;
      frontend: string;
      backend: string;
      tools: string;
      cloud: string;
    };
  };
  contact: {
    title: string;
    description: string;
    sendEmail: string;
    copyEmail: string;
    emailCopied: string;
  };
  footer: {
    copyright: string;
    madeWith: string;
  };
  common: {
    loading: string;
  };
}

export const translations: { [key: string]: Translation } = {
  en: {
    navigation: {
      home: "Home",
      about: "About Me",
      projects: "My Projects",
      skills: "My Skills",
      contact: "Contact Me",
    },
    intro: {
      hello: "Hi, I'm yamdev07",
      titles: [
        "DevOps Engineer",
        "Software Developer",
        "Web developer",
        "Lifelong Learner",
      ],
      description:
        "Welcome to my cosmic portfolio. Dive into my universe of projects and see how I blend creativity and technology to craft stellar digital experiences.",
      viewProjects: "Explore Projects",
      getInTouch: "Contact Me",
    },
    about: {
      title: "About Me",
      background: "My Journey",
      paragraph1:
        "I started my professional journey right after high school, joining an apprenticeship program at a company specializing in RFID technology.",
      paragraph2:
        "Initially trained as a higher-level technician, I discovered my passion for programming on the job, learning Python and taking on numerous projects that transitioned me into a developer role.",
      paragraph3:
        "After earning my DUT in Electrical Engineering and Industrial Computing, I pursued my passion for programming at Epitech. Now, as an MSc 1 student, I continue to expand my skills and knowledge.",
      downloadResume: "Download My Resume",
      githubProfile: "Visit My GitHub",
    },
    projects: {
      title: "My Projects",
      description:
        "Take a look at my recent work and personal projects. Each one reflects a unique challenge and a valuable learning experience.",
      allProjects: "All Projects",
      featured: "Highlighted",
      viewCode: "View Code",
      demo: "Live Demo",
      projectsList: {
        eclatShop: {
          title: "Eclat Shop",
          description:
            "A powerful e-commerce platform for selling computer components. Built with Symfony, React, TypeScript, and Docker, it delivers a seamless user experience.",
        },
        timeManager: {
          title: "Time Manager",
          description:
            "A time tracking app designed for municipal employees to efficiently manage their work hours. It offers tools for employees, managers, and general oversight.",
        },
        kuramaChat: {
          title: "Kurama Chat",
          description:
            "An IRC client and server built with Node.js, Express.js, and React.js. Features include multi-channel support, real-time messaging, and user notifications.",
        },
        rogueLike: {
          title: "Rogue-like in Java",
          description:
            "An immersive Rogue-like game developed in two weeks using LibGDX. It features dynamic maps, real-time combat, and inventory management.",
        },
        twitchViewerBot: {
          title: "Twitch Viewer-Bot",
          description:
            "A GUI tool to generate fake viewers for Twitch streams. Developed in Python, it uses proxies to simulate views.",
        },
        kickViewerBot: {
          title: "Kick Viewer-Bot",
          description:
            "A similar tool to Twitch Viewer-Bot, designed for the Kick platform. It generates fake views using proxies.",
        },
      },
    },
    skills: {
      title: "My Skills",
      description:
        "These are the tools and technologies I use to bring ideas to life. My skillset is ever-growing as I explore new challenges.",
      seeInAction: "See My Skills in Action",
      categories: {
        all: "All Skills",
        frontend: "Frontend Development",
        backend: "Backend Development",
        tools: "Development Tools",
        cloud: "Cloud Technologies",
      },
    },
    contact: {
      title: "Get in Touch",
      description:
        "Have a project in mind? Let's collaborate and create something extraordinary together.",
      sendEmail: "Send Me an Email",
      copyEmail: "Or copy my email address:",
      emailCopied: "Email address copied!",
    },
    footer: {
      copyright: "© {year} Etienne Mentrel | Cosmic Portfolio",
      madeWith: "Built with Next.js and a sprinkle of cosmic magic ✨",
    },
    common: {
      loading: "Loading...",
    },
  },
  fr: {
    navigation: {
      home: "Accueil",
      about: "À propos de moi",
      projects: "Mes Projets",
      skills: "Mes Compétences",
      contact: "Me Contacter",
    },
    intro: {
      hello: "Bonjour, je suis Etienne Mentrel",
      titles: [
        "Ingénieur DevOps",
        "Développeur Logiciel",
        "Passionné de Technologie",
        "Apprenant Curieux",
      ],
      description:
        "Bienvenue dans mon portfolio cosmique. Découvrez mes projets et voyez comment je marie créativité et technologie pour créer des expériences numériques uniques.",
      viewProjects: "Voir mes Projets",
      getInTouch: "Contactez-moi",
    },
    about: {
      title: "À propos de moi",
      background: "Mon Parcours",
      paragraph1:
        "J'ai débuté ma carrière professionnelle juste après le lycée, en intégrant un programme d'apprentissage dans une entreprise spécialisée en technologie RFID.",
      paragraph2:
        "Formé initialement comme technicien supérieur, j'ai découvert ma passion pour la programmation en apprenant Python sur le terrain, ce qui m'a permis de devenir développeur au sein de l'entreprise.",
      paragraph3:
        "Après avoir obtenu mon DUT en Génie Électrique et Informatique Industrielle, j'ai poursuivi ma passion pour la programmation à Epitech. Aujourd'hui, en MSc 1, je continue d'élargir mes compétences et mes connaissances.",
      downloadResume: "Télécharger mon CV",
      githubProfile: "Voir mon GitHub",
    },
    projects: {
      title: "Mes Projets",
      description:
        "Découvrez mes travaux récents et projets personnels. Chaque projet représente un défi unique et une opportunité d'apprentissage.",
      allProjects: "Tous les Projets",
      featured: "À la Une",
      viewCode: "Voir le Code",
      demo: "Voir la Démo",
      projectsList: {
        eclatShop: {
          title: "Eclat Shop",
          description:
            "Une plateforme e-commerce performante pour la vente de composants informatiques. Développée avec Symfony, React, TypeScript et Docker, elle offre une expérience utilisateur fluide.",
        },
        timeManager: {
          title: "Time Manager",
          description:
            "Une application de gestion du temps conçue pour les employés municipaux, leur permettant de gérer efficacement leurs heures de travail. Elle propose des outils pour les employés, les managers et la supervision générale.",
        },
        kuramaChat: {
          title: "Kurama Chat",
          description:
            "Un client et serveur IRC développé avec Node.js, Express.js et React.js. Il inclut la gestion multi-canaux, la messagerie en temps réel et les notifications utilisateur.",
        },
        rogueLike: {
          title: "Rogue-like en Java",
          description:
            "Un jeu Rogue-like immersif développé en deux semaines avec LibGDX. Il propose des cartes dynamiques, des combats en temps réel et une gestion d'inventaire.",
        },
        twitchViewerBot: {
          title: "Twitch Viewer-Bot",
          description:
            "Un outil GUI pour générer de faux spectateurs sur Twitch. Développé en Python, il utilise des proxies pour simuler des vues.",
        },
        kickViewerBot: {
          title: "Kick Viewer-Bot",
          description:
            "Un outil similaire à Twitch Viewer-Bot, conçu pour la plateforme Kick. Il génère de faux spectateurs en utilisant des proxies.",
        },
      },
    },
    skills: {
      title: "Mes Compétences",
      description:
        "Voici les outils et technologies que j'utilise pour donner vie à mes idées. Mon expertise s'élargit constamment au fil des défis.",
      seeInAction: "Voir mes Compétences en Action",
      categories: {
        all: "Toutes les Compétences",
        frontend: "Développement Frontend",
        backend: "Développement Backend",
        tools: "Outils de Développement",
        cloud: "Technologies Cloud",
      },
    },
    contact: {
      title: "Contactez-moi",
      description:
        "Vous avez un projet en tête ? Collaborons et créons ensemble quelque chose d'extraordinaire.",
      sendEmail: "Envoyez-moi un Email",
      copyEmail: "Ou copiez mon adresse email :",
      emailCopied: "Adresse email copiée !",
    },
    footer: {
      copyright: "© {year} Etienne Mentrel | Portfolio Cosmique",
      madeWith: "Créé avec Next.js et une touche de magie cosmique ✨",
    },
    common: {
      loading: "Chargement...",
    },
  },
};
