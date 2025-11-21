

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
    projectsList: {
      [key: string]: {
        title: string;
        description: string;
        tech?: string[];
        link?: string;
        demo?: string;
        extraButton?: { label: string; url: string };
        featured?: boolean;
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
      mobile: string;
      apis: string;
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
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    intro: {
      hello: "Hello, I'm Yoann Yamd",
      titles: ["Full-Stack Developer", "Cybersecurity Enthusiast"],
      description: "I develop and deploy secure, high-performance, and modern web and mobile applications to manage clients, projects, and services, while integrating innovative solutions such as Twilio, FedaPay, and Flutter.",
      viewProjects: "View Projects",
      getInTouch: "Get In Touch",
    },
    about: {
      title: "About Me",
      background: "My Journey",
      paragraph1:
        "I am a Full-Stack Developer passionate about creating robust, secure, and modern solutions.",
      paragraph2:
        "Trained in web and mobile development with Flutter, Laravel, and Django, I design innovative applications with a project-driven mindset.",
      paragraph3:
        "Currently pursuing a Master’s in Cybersecurity, I combine development expertise with a strong focus on software security.",
      downloadResume: "Download My Resume",
      githubProfile: "Visit My GitHub",
    },
    projects: {
      title: "My Projects",
      description:
        "Here are some of the real projects I have developed professionally or personally. Each one demonstrates technologies used and links to code or demo when possible.",
      allProjects: "All Projects",
      featured: "Featured",
      projectsList: {
        moradaLodge: {
          title: "MoradaLodge",
          description:
            "Hotel website fully configured with QloApps, including a back-office to manage bookings, rooms and content.",
          tech: ["QloApps", "PHP", "MySQL", "Back-office"],
          link: "https://github.com/yamdev07/MoradalodgeSite.git",
          demo: "https://moradalodge.com",
          extraButton: { label: "Back Office", url: "https://moradalodge.com/admin2025" },
          featured: true,
        },
        anyxTech: {
          title: "AnyxTech Showcase",
          description:
            "Professional responsive website with modern design, optimized for performance and SEO.",
          tech: ["HTML/CSS", "JavaScript", "Tailwind CSS"],
          link: "https://anyxtech.com",
          demo: "https://anyxtech.com",
          featured: false,
        },
        taskmanagement: {
          title: "Task Management System",
          description:
            "Client management application with Twilio API integration for notifications. Confidential production app used internally by AnyxTech.",
          tech: ["Laravel", "Twilio API", "Bootstrap", "MySQL"],
          link: "https://github.com/yamdev07/TaskManagement",
          demo: "http://clients.anyxtech.com",
          featured: true,
        },
        cunicultureapp: {
          title: "CunicultureApp",
          description:
            "Rabbit farm management system: track births, feeding, health and productivity.",
          tech: ["PHP", "Laravel", "MVC", "MySQL"],
          link: "https://github.com/yamdev07/CunicultureApp",
          demo: "http://cuni.anyxtech.com",
          featured: false,
        },
        libraryapp: {
          title: "Library Management",
          description:
            "Library management system with book tracking, borrow/return, users and real-time chat.",
          tech: ["Python", "Django", "MySQL", "Chat"],
          link: "https://github.com/yamdev07/library_management_system.git",
          featured: false,
        },
        facevisionpro: {
          title: "FaceVisionPro",
          description:
            "WebApp for facial recognition and OCR using AI technologies.",
          tech: ["Python", "Deep Learning", "Streamlit", "OCR"],
          link: "https://github.com/yamdev07/ANIPChallenge2",
          featured: false,
        },
        quincaillerieapp: {
          title: "QuincaillerieApp",
          description:
            "Full hardware store management system with stock, sales, invoices, and admin interface.",
          tech: ["Laravel", "Billing", "Bootstrap", "MySQL"],
          link: "https://github.com/yamdev07/quincaillerieApp",
          featured: true,
        },
        wifizone: {
          title: "Wifizone Captive Portal",
          description:
            "Captive portal for secure Wi-Fi access with Fedapay integration, session management, and authentication.",
          tech: ["Wi-Fi", "Captive Portal", "Fedapay", "Security"],
          link: "https://wifihostpo.netlify.app/",
          demo: "https://wifihostpo.netlify.app/",
          featured: false,
        },
        mobilemoneyapp: {
          title: "Mobile Money App",
          description:
            "Web application for managing a Mobile Money wallet with user view, admin panel, daily summary, and transaction history.",
          tech: ["Node.js", "Vue.js", "Firebase", "Express", "Tailwind CSS", "REST API"],
          link: "https://github.com/yamdev07/mobilemoney.git",
          demo: "", // or remove this line if no demo link
          featured: false,
        },
      },
    },
    skills: {
      title: "My Skills",
      description: "Technologies I work with and tools I master.",
      seeInAction: "See in Action",
      categories: {
        all: "All",
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        apis: "APIs",
        tools: "Tools",
        cloud: "Cloud",
      },
    },
    contact: {
      title: "Contact Me",
      description: "Let's get in touch!",
      sendEmail: "Send Email",
      copyEmail: "Copy Email",
      emailCopied: "Email copied to clipboard!",
    },
    footer: {
      copyright: "© 2025 Yoann Yamd. All rights reserved.",
      madeWith: "Made with ❤️ using Next.js & Tailwind CSS",
    },
    common: {
      loading: "Loading...",
    },
  },
  fr: {
    navigation: {
      home: "Accueil",
      about: "À propos",
      projects: "Projets",
      skills: "Compétences",
      contact: "Contact",
    },
    intro: {
      hello: "Bonjour, je suis Yoann yamd",
      titles: ["Développeur Full-Stack", "Ingénieur Cybersécurité"],
      description: "Je développe et déploie des applications web et mobiles sécurisées, performantes et modernes pour gérer des clients, des projets et des services, tout en intégrant des solutions innovantes comme Twilio, Fedapay et Flutter.",
      viewProjects: "Voir les Projets",
      getInTouch: "Me Contacter",
    },
    about: {
      title: "À propos de moi",
      background: "Mon Parcours",
      paragraph1:
        "Je suis un développeur Full-Stack passionné par la création de solutions robustes, sécurisées et modernes.",
      paragraph2:
        "Formé au développement web et mobile avec Flutter, Laravel et Django, je conçois des applications innovantes avec une approche orientée projet.",
      paragraph3:
        "Actuellement en Master de Cybersécurité, je combine expertise en développement et forte attention à la sécurité logicielle.",
      downloadResume: "Télécharger mon CV",
      githubProfile: "Voir mon GitHub",
    },
    projects: {
      title: "Mes Projets",
      description:
        "Voici quelques projets que j'ai réellement développés, professionnellement ou personnellement. Chaque projet montre les technologies utilisées et les liens disponibles.",
      allProjects: "Tous",
      featured: "À la Une",
      projectsList: {
        moradaLodge: {
          title: "MoradaLodge",
          description:
            "Site web d'hôtel entièrement configuré avec QloApps, incluant un back-office pour gérer les réservations, les chambres et le contenu du site.",
          tech: ["QloApps", "PHP", "MySQL", "Back-office"],
          link: "https://github.com/yamdev07/MoradalodgeSite.git",
          demo: "https://moradalodge.com",
          extraButton: { label: "Back Office", url: "https://moradalodge.com/admin2025" },
          featured: true,
        },
        anyxTech: {
          title: "Site Vitrine AnyxTech",
          description:
            "Site web professionnel responsive avec design moderne, optimisé pour les performances et le SEO.",
          tech: ["HTML/CSS", "JavaScript", "Tailwind CSS"],
          link: "https://github.com/yamdev07/Anyxtech_site.git",
          demo: "https://anyxtech.com",
          featured: false,
        },
        taskManagement: {
          title: "Task Management System",
          description:
            "Application de gestion de clientèle avec intégration de Twilio API pour les notifications. Application confidentielle utilisée en production par AnyxTech.",
          tech: ["Laravel", "Twilio API", "Bootstrap", "MySQL"],
          link: "https://github.com/yamdev07/TaskManagement",
          demo: "http://clients.anyxtech.com",
          featured: true,
        },
        cunicultureApp: {
          title: "CunicultureApp",
          description:
            "Application de suivi et gestion de lapins : naissances, alimentation, santé et productivité.",
          tech: ["PHP", "Laravel", "MVC", "MySQL"],
          link: "https://github.com/yamdev07/CunicultureApp",
          demo: "http://cuni.anyxtech.com",
          featured: false,
        },
        libraryApp: {
          title: "BibliothèqueApp",
          description:
            "Application de gestion d'une bibliothèque avec suivi des livres, emprunts/retours, utilisateurs et chat en temps réel.",
          tech: ["Python", "Django", "MySQL", "Chat"],
          link: "https://github.com/yamdev07/library_management_system.git",
          featured: false,
        },
        faceVisionPro: {
          title: "FaceVisionPro",
          description:
            "WebApp de reconnaissance faciale et OCR utilisant l'intelligence artificielle.",
          tech: ["Python", "Deep Learning", "Streamlit", "OCR"],
          link: "https://github.com/yamdev07/ANIPChallenge2",
          featured: false,
        },
        quincaillerieApp: {
          title: "QuincaillerieApp",
          description:
            "Application complète de gestion de quincaillerie avec stock, ventes, factures et interface administrateur.",
          tech: ["Laravel", "Billing", "Bootstrap", "MySQL"],
          link: "https://github.com/yamdev07/quincaillerieApp",
          featured: true,
        },
        wifizone: {
          title: "Wifizone - Portail Captif",
          description:
            "Portail captif pour un accès sécurisé au Wi-Fi, intégration Fedapay, gestion des sessions et authentification.",
          tech: ["Wi-Fi", "Portail Captif", "Fedapay", "Sécurité"],
          link: "https://github.com/yamdev07/HotspotMemYAMD.git",
          demo: "https://memyamd.netlify.app",
          featured: false,
        },
        mobilemoneyapp: {
          title: "Mobile Money App",
          description:
            "Application web de gestion de portefeuille Mobile Money avec fonctionnalités de vue utilisateur , admin, cumul journalier et historique des transactions.",
          tech: ["node.js", "Vue.js", "Firebase", "Express", "Tailwind CSS", "API REST"],
          link: "https://github.com/yamdev07/mobilemoney.git",
          featured: false,
        },
      },
    },
    skills: {
      title: "Mes Compétences",
      description: "Technologies que je maîtrise et outils que j'utilise.",
      seeInAction: "Voir en Action",
      categories: {
        all: "Tous",
        frontend: "Frontend",
        backend: "Backend",
        mobile: "Mobile",
        apis: "APIs",
        tools: "Outils",
        cloud: "Cloud",
      },
    },
    contact: {
      title: "Contactez-moi",
      description: "Entrons en contact !",
      sendEmail: "Envoyer Email",
      copyEmail: "Copier Email",
      emailCopied: "Email copié !",
    },
    footer: {
      copyright: "© 2025 Yoann Yamd. Tous droits réservés.",
      madeWith: "Fait avec ❤️ avec Next.js & Tailwind CSS",
    },
    common: {
      loading: "Chargement...",
    },
  },
};
