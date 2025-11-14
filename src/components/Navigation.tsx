"use client";
import { useState, useEffect } from "react";
import LanguageSelector from "./LanguageSelector";
import { useLanguage } from "@/i18n/LanguageContext";

interface NavigationProps {
  currentSection?: string;
  onSectionClick?: (sectionId: string) => void;
}

const Navigation = ({
  currentSection = "home",
  onSectionClick,
}: NavigationProps) => {
  const [activeSection, setActiveSection] = useState(currentSection);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  const sections = [
    { id: "home", label: t.navigation.home },
    { id: "about", label: t.navigation.about },
    { id: "projects", label: t.navigation.projects },
    { id: "skills", label: t.navigation.skills },
    { id: "contact", label: t.navigation.contact },
  ];

  useEffect(() => {
    if (currentSection !== activeSection) {
      setActiveSection(currentSection);
    }
  }, [currentSection, activeSection]);

  useEffect(() => {
    const handleScroll = () => {
      console.log("Navigation: scroll");
      console.log("window.scrollY", window.scrollY);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    if (onSectionClick) {
      onSectionClick(id);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Fermer le menu mobile
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[1000] px-6 py-4 transition-all duration-300 ${
        isScrolled ? "bg-black/70 backdrop-blur-md" : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-glow"
          onClick={(e) => handleNavClick(e, "home")}
        >
          Y.YAMDEV
        </a>

        {/* Desktop Navigation with improved active state */}
        <div
          className="hidden md:flex space-x-8 items-center"
          role="navigation"
        >
          {sections.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className={`transition-all duration-300 relative ${
                activeSection === id
                  ? "text-white font-semibold"
                  : "text-gray-400 hover:text-white hover:scale-105"
              }`}
              aria-current={activeSection === id ? "page" : undefined}
              data-section={id}
            >
              {label}
            </a>
          ))}

          {/* Language Selector */}
          <LanguageSelector />
        </div>

        {/* Mobile Navigation - maintenant avec deux boutons */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSelector />
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with improved active state */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md py-4"
          role="navigation"
        >
          <div className="container mx-auto flex flex-col space-y-4 px-6">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`transition-all duration-300 relative ${
                  activeSection === id
                    ? "text-white font-semibold"
                    : "text-gray-400 hover:text-white"
                }`}
                aria-current={activeSection === id ? "page" : undefined}
                data-section={id}
              >
                {label}
                {activeSection === id && (
                  <span className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
