"use client";
import { useEffect, useState, useRef, useMemo } from "react";
import StarsCanvas from "@/components/StarBackground";
import IntroSection from "@/components/sections/IntroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ContactSection from "@/components/sections/ContactSection";
import Navigation from "@/components/Navigation";
import LoadingScreen from "@/components/LoadingScreen";
import FPSCounter from "@/components/FPSCounter";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  // const [scrollY, setScrollY] = useState(0);
  // const { t } = useLanguage();

  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastUIUpdateTimeRef = useRef(0);
  const lastScrollYRef = useRef(0);

  const mainRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const sections = useMemo(
    () => ["home", "about", "projects", "skills", "contact"],
    []
  );

  useEffect(() => {
    lastUIUpdateTimeRef.current = Date.now();

    const initialScrollY = window.scrollY;
    setScrollY(initialScrollY);
    lastScrollYRef.current = initialScrollY;

    setIsMobile(window.innerWidth < 768);

    let ticking = false;
    let isUserScrolling = false;
    let scrollingTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScrollY =
        window.pageYOffset || document.documentElement.scrollTop;

      setScrollY(currentScrollY);

      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;
        });

        ticking = true;
      }

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        if (!isUserScrolling) {
        }
      }, 80);
    };

    const handleScrollStart = () => {
      isUserScrolling = true;

      const currentScrollY =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrollY(currentScrollY);

      if (scrollingTimeout) {
        clearTimeout(scrollingTimeout);
      }
    };

    const handleScrollEnd = () => {
      if (scrollingTimeout) {
        clearTimeout(scrollingTimeout);
      }

      scrollingTimeout = setTimeout(() => {
        isUserScrolling = false;
      }, 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleScrollStart, { passive: true });
    window.addEventListener("touchmove", handleScrollStart, { passive: true });
    window.addEventListener("wheel", handleScrollEnd, { passive: true });
    window.addEventListener("touchend", handleScrollEnd, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleScrollStart);
      window.removeEventListener("touchmove", handleScrollStart);
      window.removeEventListener("wheel", handleScrollEnd);
      window.removeEventListener("touchend", handleScrollEnd);

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (scrollingTimeout) clearTimeout(scrollingTimeout);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const uiUpdateThreshold = 50;

    const setupIntersectionObserver = () => {
      const thresholdValue = isMobile ? [0.2, 0.3] : [0.4, 0.6];

      const options = {
        root: null,
        rootMargin: "0px",
        threshold: thresholdValue,
      };

      const observer = new IntersectionObserver((entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            return b.intersectionRatio - a.intersectionRatio;
          });

        if (visibleSections.length > 0) {
          const mostVisibleSection = visibleSections[0].target as HTMLElement;
          const sectionId = mostVisibleSection.id;
          const sectionIndex = sections.indexOf(sectionId);

          if (
            sectionIndex !== currentSectionIndex &&
            Date.now() - lastUIUpdateTimeRef.current > uiUpdateThreshold
          ) {
            setCurrentSectionIndex(sectionIndex);
            lastUIUpdateTimeRef.current = Date.now();
          }
        }
      }, options);

      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      });

      return observer;
    };

    const observer = setupIntersectionObserver();

    return () => {
      observer.disconnect();
    };
  }, [currentSectionIndex, sections, isMobile, loading]);

  const smoothScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const sectionTop = rect.top + scrollTop;

      try {
        window.scrollTo({
          top: sectionTop,
          behavior: "smooth",
        });

        setTimeout(() => {
          if (Math.abs(window.scrollY - sectionTop) > 50) {
            window.scrollTo({
              top: sectionTop,
              behavior: "auto",
            });

            section.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 300);

        const newIndex = sections.indexOf(sectionId);
        if (newIndex !== -1) {
          setCurrentSectionIndex(newIndex);
        }
      } catch (error) {
        console.error("Erreur lors du défilement:", error);
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const loadTimer = setTimeout(() => setLoading(false), 2000);

    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.documentElement.style.overscrollBehavior = "";

    return () => {
      clearTimeout(loadTimer);
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="relative">
          <StarsCanvas numStars={5000} />

          <div className="relative z-10">
            <div className="fixed top-0 left-0 right-0 z-50">
              <Navigation
                currentSection={sections[currentSectionIndex]}
                onSectionClick={(id) => {
                  smoothScrollToSection(id);
                }}
              />
            </div>
            <FPSCounter visible={false} onVisibilityChange={() => {}} />
            <div className="section-indicators-container hidden md:flex flex-col z-[1000]">
              {sections.map((section, index) => (
                <div key={section} className="relative indicator-wrapper">
                  <button
                    className={`section-indicator-dot ${
                      currentSectionIndex === index ? "active" : ""
                    }`}
                    onClick={() => {
                      smoothScrollToSection(section);
                    }}
                    aria-label={`Go to ${section} section`}
                    data-section={section}
                    data-active={currentSectionIndex === index}
                  >
                    <span className="sr-only">
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </span>
                  </button>
                  <span className="section-indicator-label">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </span>
                </div>
              ))}
            </div>
            <main
              ref={mainRef}
              className="relative z-10"
              style={{ willChange: "transform" }}
            >
              {sections.map((sectionId, idx) => (
                <section
                  key={sectionId}
                  id={sectionId}
                  className={`w-full flex items-center justify-center section-container ${
                    sectionId === "home" ? "min-h-screen" : "min-h-dynamic"
                  }`}
                  ref={(el) => {
                    if (el) sectionsRef.current[idx] = el as HTMLDivElement;
                  }}
                  data-section-index={idx}
                >
                  <div
                    className={`section-content w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8`}
                  >
                    {idx === 0 && <IntroSection />}
                    {idx === 1 && <AboutSection />}
                    {idx === 2 && <ProjectsSection />}
                    {idx === 3 && <SkillsSection />}
                    {idx === 4 && <ContactSection />}
                  </div>

                  {idx === 0 && (
                    <button
                      onClick={() => smoothScrollToSection("about")}
                      className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-scrollDown z-10 bg-transparent border-none text-white cursor-pointer"
                      aria-label="Scroll down"
                    >
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
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </button>
                  )}
                </section>
              ))}
            </main>
            <footer className="py-6 text-center text-sm text-white/60 bg-black/30 backdrop-blur-sm">
              <div className="container mx-auto px-6">
                <p>
                  © {new Date().getFullYear()} Yoann Yamd | Développeur Fullstack & Ingénieur Réseau | Tous droits réservés
                </p>
                <p className="mt-2">Fait avec passion et technologie 💜</p>
              </div>
            </footer>
          </div>
        </div>
      )}
    </>
  );
}