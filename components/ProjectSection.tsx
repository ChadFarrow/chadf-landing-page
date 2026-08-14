import { ProjectSection as ProjectSectionType } from '@/data/projects';
import ProjectCard from './ProjectCard';
import SectionTitle from './SectionTitle';

interface ProjectSectionProps {
  section: ProjectSectionType;
}

export default function ProjectSection({ section }: ProjectSectionProps) {
  return (
    <section>
      <SectionTitle>{section.title}</SectionTitle>
      <div className="projects">
        {section.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
