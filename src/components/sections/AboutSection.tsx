"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage(); // t correspond à translations[lang]

  return (
    <div className="py-10 md:py-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 items-center"
      >
        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="md:col-span-2 flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/10 shadow-lg shadow-purple-500/20">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-blue-500 opacity-70 blur-xl rounded-full animate-pulse"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center z-10 rounded-full">
              <Image
                src="/avatar.jpg"
                alt="Yoann Yamd"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Contenu */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="md:col-span-3"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {t.about.title} {/* Utilisation de l’objet de traduction */}
          </h2>

          <div className="text-lg text-gray-300 space-y-4">
            <h3 className="text-2xl md:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {t.about.background} {/* Utilisation de l’objet de traduction */}
            </h3>

            <p>{t.about.paragraph1}</p>
            <p>{t.about.paragraph2}</p>
          </div>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="https://cvdesignr.com/p/668be84f74319"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button flex items-center gap-2"
            >
              {t.about.downloadResume}
            </a>

            <a
              href="https://github.com/yamdev07"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-button"
            >
              {t.about.githubProfile}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutSection;
