import { useLanguage } from "@/i18n/LanguageContext";

interface SectionIndicatorProps {
  sections: string[];
  currentSectionIndex: number;
  onIndicatorClick: (index: number) => void;
}

const SectionIndicator: React.FC<SectionIndicatorProps> = ({
  sections,
  currentSectionIndex,
  onIndicatorClick,
}) => {
  const { t } = useLanguage();

  const getTranslatedSectionName = (section: string) => {
    const sectionMap: { [key: string]: string } = {
      home: t.navigation.home,
      about: t.navigation.about,
      projects: t.navigation.projects,
      skills: t.navigation.skills,
      contact: t.navigation.contact,
    };

    return (
      sectionMap[section] || section.charAt(0).toUpperCase() + section.slice(1)
    );
  };

  return (
    <div className="section-indicator hidden md:block">
      {sections.map((section, index) => (
        <button
          key={section}
          className={`section-indicator-dot ${
            currentSectionIndex === index ? "active" : ""
          }`}
          onClick={() => onIndicatorClick(index)}
          title={getTranslatedSectionName(section)}
          aria-label={`Navigate to ${getTranslatedSectionName(
            section
          )} section`}
          aria-current={currentSectionIndex === index ? "true" : "false"}
        />
      ))}
    </div>
  );
};

export default SectionIndicator;
