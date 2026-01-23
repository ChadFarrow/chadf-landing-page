import { ProjectSection as ProjectSectionType } from '@/data/projects';
import ProjectCard from './ProjectCard';

interface ProjectSectionProps {
  section: ProjectSectionType;
}

export default function ProjectSection({ section }: ProjectSectionProps) {
  return (
    <section>
      <h2 className="section-title">{section.title}</h2>
      <div className="projects">
        {section.projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
