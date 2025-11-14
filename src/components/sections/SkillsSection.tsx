"use client";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
  icon?: string;
}

const skills: Skill[] = [
  // Frontend
  { name: "HTML/CSS", level: 5, category: "Frontend" },
  { name: "JavaScript", level: 4, category: "Frontend" },
  { name: "TypeScript", level: 4, category: "Frontend" },
  { name: "React", level: 4, category: "Frontend" },
  { name: "Tailwind CSS", level: 5, category: "Frontend" },

  // Backend
  { name: "NestJS", level: 4, category: "Backend" },
  { name: "MongoDB", level: 5, category: "Backend" },
  { name: "PostgreSQL", level: 5, category: "Backend" },
  { name: "Golang", level: 2, category: "Backend" },

  // Tools
  { name: "Git", level: 5, category: "Tools" },
  { name: "Docker", level: 5, category: "Tools" },
  { name: "CI/CD", level: 5, category: "Tools" },
  { name: "Linux", level: 4, category: "Tools" },
  { name: "Kubernetes", level: 4, category: "Tools" },

  // Cloud
  { name: "AWS", level: 4, category: "Cloud" },
  { name: "Scaleway", level: 3, category: "Cloud" },
];

const categories = ["All", "Frontend", "Backend", "Tools", "Cloud"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const { t } = useLanguage();

  // Mapping des catégories pour les traductions
  const categoryMapping: { [key: string]: string } = {
    All: t.skills.categories.all,
    Frontend: t.skills.categories.frontend,
    Backend: t.skills.categories.backend,
    Tools: t.skills.categories.tools,
    Cloud: t.skills.categories.cloud,
  };

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "All" || skill.category === activeCategory
  );

  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-4xl font-bold mb-8 text-center">
        {t.skills.title.split(" ")[0]}{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          {t.skills.title.split(" ").slice(1).join(" ")}
        </span>
      </h2>

      {/* Category filters */}
      <div className="flex flex-wrap justify-center mb-16 gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-all duration-300 ${
              activeCategory === category
                ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            {categoryMapping[category]}
          </button>
        ))}
      </div>

      {/* Skills grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredSkills.map((skill) => (
          <div
            key={skill.name}
            className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:border-white/30 transition-all duration-300 group"
          >
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xl mr-3">
                {skill.icon || skill.name.charAt(0)}
              </div>
              <div>
                <h4 className="text-lg font-bold">{skill.name}</h4>
                <p className="text-sm text-gray-400">{categoryMapping[skill.category] || skill.category}</p>
              </div>
            </div>
            <div className="h-2 bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                style={{ width: `${(skill.level / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          {t.skills.description}
        </p>
        <a href="#projects" className="cosmic-button inline-block">
          {t.skills.seeInAction}
        </a>
      </div>
    </div>
  );
};

export default SkillsSection;
