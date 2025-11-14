"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "BibliothèqueApp",
    description:
      "Application pour gérer une bibliothèque : suivi des livres, gestion des emprunts/retours, utilisateurs, gestion des administrateurs et intégration d'un système de chat en temps réel.",
    image: "/images/projects/BibliothequeApp.png",
    tech: ["Python", "Django", "MySQL", "Chat"],
    link: "https://github.com/yamdev07/BibliothequeApp",
    demo: undefined,
    featured: true,
  },
  {
    id: 2,
    title: "Site Vitrine AnyxTech",
    description:
      "Site web professionnel responsive avec design moderne, optimisé pour les performances et le SEO.",
    image: "/images/projects/SiteVitrineAnyxTech.png",
    tech: ["HTML/CSS", "JavaScript", "Tailwind CSS"],
    link: "https://anyxtech.com",
    demo: "https://anyxtech.com",
    featured: true,
  },
  {
    id: 3,
    title: "Task Management System",
    description:
      "Application complète de gestion de clientèle avec intégration Twilio API pour les notifications SMS et interface Bootstrap moderne. \n  NB:Cette application est déjà disponible en ligne, utilisée par la dite entreprise mais ne peut en aucun cas être divulguée au public.",
      
    image: "/images/projects/TaskManagementSystem.png",
    tech: ["Laravel", "Twilio API", "Bootstrap", "MySQL"],
    link: "https://github.com/yamdev07/TaskManagement",
    demo: undefined,
    featured: true,
  },
  {
    id: 4,
    title: "CunicultureApp",
    description:
      "Application de suivi et gestion de la production cunicole : suivi des lapins, gestion des naissances, alimentation, santé et productivité.",
    image: "/images/projects/CunicultureApp.png",
    tech: ["PHP", "Laravel", "MVC", "MySQL"],
    link: "https://github.com/yamdev07/CunicultureApp",
    demo: undefined,
    featured: false,
  },
  {
    id: 5,
    title: "MoradaLodge",
    description:
      "Site web d'hôtel entièrement configuré avec QloApps, incluant un back-office pour gérer les réservations, les chambres et le contenu du site.",
    image: "/images/projects/MoradaLodge.png",
    tech: ["QloApps", "PHP", "MySQL", "Back-office"],
    link: "http://moradalodge.com",
    demo: "http://moradalodge.com/admin2025",
    featured: false,
  },
  {
    id: 6,
    title: "FaceVisionPro",
    description:
      "WebApp de reconnaissance faciale et OCR - Plateforme avancée d'analyse faciale et de reconnaissance de texte utilisant l'intelligence artificielle de pointe.",
    image: "/images/projects/FaceVisionPro.png",
    tech: ["Python", "Deep Learning", "Streamlit", "OCR"],
    link: "https://github.com/yamdev07/ANIPChallenge2",
    demo: undefined,
    featured: false,
  },
  {
    id: 7,
    title: "QuincaillerieApp",
    description:
      "Application complète de gestion de quincaillerie permettant de suivre les ventes, gérer le stock et automatiser les factures clients. Interface utilisateur et administrateur intégrée.",
    image: "/images/projects/QuincaillerieApp.png",
    tech: ["Laravel", "Billing", "Bootstrap", "MySQL"],
    link: "https://github.com/yamdev07/quincaillerieApp",
    demo: undefined,
    featured: false,
  },
  {
    id: 8,
    title: "Wifizone - Portail Captif",
    description:
      "Création et configuration d'un portail captif pour Wifizone, permettant un accès sécurisé au réseau Wi-Fi, intégration Fedapay pour le paiement en ligne, avec gestion des sessions et authentification personnalisée.",
    image: "/images/projects/WifizonePortailCaptif.png",
    tech: ["Wi-Fi", "Portail Captif", "Fedapay", "Sécurité"],
    link: "https://wifihostpo.netlify.app/",
    demo: "https://wifihostpo.netlify.app/",
    featured: false,
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [, setActiveProject] = useState<number | null>(null);

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.featured);

  return (
    <div className="py-10 md:py-0 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Mes Projets
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Voici quelques projets que j'ai réalisés, avec technologies et liens
            disponibles.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <button
              className={`px-4 py-2 rounded-full transition ${
                filter === "all"
                  ? "bg-white/10 text-white"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
              onClick={() => setFilter("all")}
            >
              Tous
            </button>
            <button
              className={`px-4 py-2 rounded-full transition ${
                filter === "featured"
                  ? "bg-white/10 text-white"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
              onClick={() => setFilter("featured")}
            >
              Featured
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden flex flex-col"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="w-full h-48 relative overflow-hidden">
                <Image
                  src={project.image || "/images/placeholder.jpg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {project.featured && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-white/10 text-white/80 rounded-full px-2 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full px-3 py-1 transition flex items-center gap-1"
                  >
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full px-3 py-1 transition flex items-center gap-1"
                    >
                      Démo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
