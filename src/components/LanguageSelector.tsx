"use client";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/i18n/LanguageContext";

const LanguageSelector = () => {
  const { currentLanguage, setLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Map des codes de langue aux noms d'affichage
  const languageNames: { [key: string]: string } = {
    en: "English",
    fr: "Français",
  };

  // Fermer le menu lors d'un clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="flex items-center gap-1 text-sm text-gray-300 hover:text-white px-2 py-1 rounded-md transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span>{currentLanguage.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-black/90 backdrop-blur-md border border-white/10 rounded-md shadow-lg z-10">
          <div className="py-1">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                className={`w-full text-left px-4 py-2 text-sm ${
                  currentLanguage === lang
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
                onClick={() => {
                  setLanguage(lang);
                  setIsOpen(false);
                }}
              >
                {languageNames[lang] || lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;