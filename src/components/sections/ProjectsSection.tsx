"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

const projects = [
  {
    id: 1,
    projectKey: "eclatShop",
    image: "/images/projects/EclatShop.png",
    tech: [
      "Symfony",
      "NextJS",
      "React",
      "Tailwind CSS",
      "TypeScript",
      "Docker",
    ],
    link: "https://github.com/H1B0B0/Eclatshop",
    featured: true,
    demo: undefined,
  },
  {
    id: 2,
    projectKey: "timeManager",
    image: "/images/projects/TimeManager.png",
    tech: ["Vue.js", "Docker", "Elixir"],
    link: "https://github.com/H1B0B0/Time-manager",
    featured: true,
    demo: undefined,
  },
  {
    id: 3,
    projectKey: "kuramaChat",
    image: "/images/projects/KuramaChat.png",
    tech: ["Node.js", "Express.js", "React.js", "Next.js", "IRC"],
    link: "https://github.com/H1B0B0/Kurama-chat",
    featured: true,
    demo: undefined,
  },
  {
    id: 4,
    projectKey: "rogueLike",
    image: "/images/projects/RogueLikeJava.png",
    tech: ["Java", "LibGDX"],
    link: "https://github.com/H1B0B0/Rogue-like-LibGDX",
    featured: false,
    demo: undefined,
  },
  {
    id: 5,
    projectKey: "twitchViewerBot",
    image: "/images/projects/TwitchViewerBot.png",
    tech: ["Python", "Flask", "React.js", "TypeScript"],
    link: "https://github.com/H1B0B0/twitch-Viewerbot",
    featured: false,
    demo: undefined,
  },
  {
    id: 6,
    projectKey: "kickViewerBot",
    image: "/images/projects/KickViewerBot.png",
    tech: ["Python", "Flask", "React.js", "TypeScript"],
    link: "https://github.com/H1B0B0/Kick-Viewerbot",
    featured: false,
    demo: undefined,
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<"all" | "featured">("all");
  // Remove the unused variable but keep the function as it might be used elsewhere
  const [, setActiveProject] = useState<number | null>(null);
  const { t } = useLanguage();

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.featured);

  return (
    <div className="py-10 md:py-0 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {t.projects.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t.projects.description}
          </p>

          {/* Filters */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              className={`px-4 py-2 rounded-full transition ${
                filter === "all"
                  ? "bg-white/10 text-white"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
              onClick={() => setFilter("all")}
            >
              {t.projects.allProjects}
            </button>
            <button
              className={`px-4 py-2 rounded-full transition ${
                filter === "featured"
                  ? "bg-white/10 text-white"
                  : "bg-transparent text-gray-400 hover:text-white"
              }`}
              onClick={() => setFilter("featured")}
            >
              {t.projects.featured}
            </button>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-gray-900/90 to-gray-900/50 backdrop-blur-sm 
                         border border-gray-700/50 rounded-xl overflow-hidden flex flex-col"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              {/* Project Image */}
              <div className="w-full h-48 relative overflow-hidden">
                {/* Placeholder gradient if no image is available */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-blue-800/40" />

                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-blue-500/20 flex items-center justify-center">
                  {/* If you have actual images, uncomment this */}
                  <Image
                    src={project.image || "/images/placeholder.jpg"}
                    alt={
                      t.projects.projectsList[
                        project.projectKey as keyof typeof t.projects.projectsList
                      ]?.title || "Project"
                    }
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />

                  {/* Project icon placeholder */}
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512z" />
                    </svg>
                  </div>
                </div>

                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {t.projects.featured}
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">
                  {
                    t.projects.projectsList[
                      project.projectKey as keyof typeof t.projects.projectsList
                    ]?.title
                  }
                </h3>
                <p className="text-gray-300 mb-4 flex-1">
                  {
                    t.projects.projectsList[
                      project.projectKey as keyof typeof t.projects.projectsList
                    ]?.description
                  }
                </p>

                {/* Tech stack */}
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

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full px-3 py-1 transition flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <span>{t.projects.viewCode}</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full px-3 py-1 transition flex items-center gap-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                      <span>{t.projects.demo}</span>
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
