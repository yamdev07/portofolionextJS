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
  const { t } = useLanguage();
  const [tClient, setTClient] = useState<typeof t | null>(null);

  // Scroll position côté client avec useRef pour éviter les erreurs ESLint
  const scrollYClientRef = useRef<number>(0);

  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastUIUpdateTimeRef = useRef(0);
  const lastScrollYRef = useRef(0);

  const mainRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const sections = useMemo(
    () => ["home", "about", "projects", "skills", "contact"],
    []
  );

  // Monté côté client
  useEffect(() => {
    setTClient(t); // Traductions uniquement côté client
    lastUIUpdateTimeRef.current = Date.now();

    const initialScrollY = window.scrollY;
    scrollYClientRef.current = initialScrollY;
    lastScrollYRef.current = initialScrollY;

    setIsMobile(window.innerWidth < 768);

    let ticking = false;
    let isUserScrolling = false;
    let scrollingTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      const currentScrollY =
        window.pageYOffset || document.documentElement.scrollTop;

      scrollYClientRef.current = currentScrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      scrollTimeout.current = setTimeout(() => {
        if (!isUserScrolling) {
          // actions possibles après scroll
        }
      }, 80);
    };

    const handleScrollStart = () => {
      isUserScrolling = true;
      scrollYClientRef.current =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollingTimeout) clearTimeout(scrollingTimeout);
    };

    const handleScrollEnd = () => {
      if (scrollingTimeout) clearTimeout(scrollingTimeout);
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
  }, [t]);

  // Resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Intersection observer pour sections
  useEffect(() => {
    const uiUpdateThreshold = 50;
    const setupIntersectionObserver = () => {
      const thresholdValue = isMobile ? [0.2, 0.3] : [0.4, 0.6];
      const options = { root: null, rootMargin: "0px", threshold: thresholdValue };

      const observer = new IntersectionObserver((entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

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
        if (element) observer.observe(element);
      });

      return observer;
    };

    const observer = setupIntersectionObserver();
    return () => observer.disconnect();
  }, [currentSectionIndex, sections, isMobile, loading]);

  // Smooth scroll
  const smoothScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const rect = section.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionTop = rect.top + scrollTop;

    try {
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
      setTimeout(() => {
        if (Math.abs(window.scrollY - sectionTop) > 50) {
          window.scrollTo({ top: sectionTop, behavior: "auto" });
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);

      const newIndex = sections.indexOf(sectionId);
      if (newIndex !== -1) setCurrentSectionIndex(newIndex);
    } catch (error) {
      console.error("Erreur lors du défilement:", error);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Loading screen
  useEffect(() => {
    const loadTimer = setTimeout(() => setLoading(false), 2000);
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    document.documentElement.style.overscrollBehavior = "";

    return () => clearTimeout(loadTimer);
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
                onSectionClick={smoothScrollToSection}
              />
            </div>

            <FPSCounter visible={false} onVisibilityChange={() => {}} />

            <main ref={mainRef} className="relative z-10" style={{ willChange: "transform" }}>
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
                  <div className="section-content w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    {tClient &&
                      (idx === 0
                        ? <IntroSection />
                        : idx === 1
                        ? <AboutSection />
                        : idx === 2
                        ? <ProjectsSection />
                        : idx === 3
                        ? <SkillsSection />
                        : idx === 4
                        ? <ContactSection />
                        : null)}
                  </div>
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
