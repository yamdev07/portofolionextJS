"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

const ProjectsSection = () => {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<"all" | "featured">("all");
  const [, setActiveProject] = useState<number | null>(null);

  // Convertir les projets venant de la traduction
  const translatedProjects = Object.entries(t.projects.projectsList).map(
    ([key, project], index) => ({
      id: index + 1,
      key,
      title: project.title,
      description: project.description,
      tech: project.tech ?? [],
      link: project.link,
      demo: project.demo,
      extraButton: project.extraButton,
      featured: project.featured ?? false,
      // Les images doivent garder les mêmes noms que dans /public
      image: `/images/projects/${key.toLowerCase()}.png`,
    })
  );

  const filteredProjects =
    filter === "all"
      ? translatedProjects
      : translatedProjects.filter((p) => p.featured);

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
            {t.projects.title}
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            {t.projects.description}
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
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />

                {project.featured && (
                  <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    {t.projects.featured}
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-gray-300 mb-4 flex-1">
                  {project.description}
                </p>

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
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-white/5 hover:bg-white/10 text-white border border-white/20 rounded-full px-3 py-1 transition flex items-center gap-1"
                    >
                      GitHub
                    </a>
                  )}

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

                  {project.extraButton && (
                    <a
                      href={project.extraButton.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm bg-white/5 hover:bg-white/10 text-white border border-purple-400/30 rounded-full px-3 py-1 transition flex items-center gap-1"
                    >
                      {project.extraButton.label}
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
