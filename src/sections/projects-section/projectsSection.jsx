import { projects } from "../../assets/projectsData";
import ProjectsCard from "../../components/projects-card/projectsCard";
import { useLanguage } from "../../contexts/languageContext";
export default function ProjectsSection() {
  const { translate } = useLanguage();

  return (
    <div className="py-22 dark:bg-softBlack">
      <p className="text-center text-mediumBlack dark:text-white text-3xl md:text-5xl md:pb-12">
        {translate("projects")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container rounded-4">
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            text={project.text}
            buttons={project.buttons}
            gitHubLink={project.gitHubLink}
            bgColor={project.bgColor}
            bgColorDark={project.bgColorDark}
          />
        ))}
      </div>
    </div>
  );
}
