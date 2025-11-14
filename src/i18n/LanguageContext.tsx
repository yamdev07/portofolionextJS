"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Translation } from "./translations";

type LanguageContextType = {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  t: Translation;
  availableLanguages: string[];
};

const defaultLanguage = "en";

// Créer le contexte avec une valeur par défaut
const LanguageContext = createContext<LanguageContextType>({
  currentLanguage: defaultLanguage,
  setLanguage: () => {},
  t: translations[defaultLanguage],
  availableLanguages: Object.keys(translations),
});

// Hook personnalisé pour utiliser le contexte de langue
export const useLanguage = () => useContext(LanguageContext);

// Fournisseur du contexte de langue
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  // État pour stocker la langue actuelle
  const [currentLanguage, setCurrentLanguage] = useState(defaultLanguage);
  
  // Traductions actuelles basées sur la langue
  const t = translations[currentLanguage] || translations[defaultLanguage];
  
  // Langues disponibles
  const availableLanguages = Object.keys(translations);

  // Fonction pour changer de langue
  const setLanguage = (lang: string) => {
    if (translations[lang]) {
      setCurrentLanguage(lang);
      // Sauvegarde la préférence de langue dans localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("preferredLanguage", lang);
      }
    }
  };

  // Récupérer la langue préférée depuis localStorage au chargement
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("preferredLanguage");
      if (savedLanguage && translations[savedLanguage]) {
        setCurrentLanguage(savedLanguage);
      } else {
        // Détection automatique de la langue du navigateur
        const browserLang = navigator.language.split("-")[0];
        if (translations[browserLang]) {
          setCurrentLanguage(browserLang);
        }
      }
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        currentLanguage,
        setLanguage,
        t,
        availableLanguages,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};