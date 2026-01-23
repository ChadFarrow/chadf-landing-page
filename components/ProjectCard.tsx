import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const badgeClass = project.badge === 'live'
    ? 'live'
    : project.badge === 'template' || project.badge === 'starter'
    ? 'template'
    : '';

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`project-card ${project.accent}`}
    >
      <div className="project-header">
        <div className="project-icon">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.name} logo`}
              width={32}
              height={32}
              style={{ borderRadius: '6px' }}
            />
          ) : (
            project.icon
          )}
        </div>
        <span className={`project-badge ${badgeClass}`}>
          {project.badge}
        </span>
      </div>
      <h3 className="project-title">
        {project.name} <span className="arrow">→</span>
      </h3>
      <p className="project-desc">{project.description}</p>
      <div className="project-tech">
        {project.tech.map((tag) => (
          <span key={tag} className="tech-tag">
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
