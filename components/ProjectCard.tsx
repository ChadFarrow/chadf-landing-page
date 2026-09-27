import Image from 'next/image';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function ZapstoreIcon() {
  return (
    <svg viewBox="0 0 19 32" fill="currentColor" width="16" height="16">
      <path d="M18.8379 13.9711L8.84956 0.356086C8.30464 -0.386684 7.10438 0.128479 7.30103 1.02073L9.04686 8.94232C9.16268 9.46783 8.74887 9.96266 8.19641 9.9593L0.871032 9.91477C0.194934 9.91066 -0.223975 10.6293 0.126748 11.1916L7.69743 23.3297C7.99957 23.8141 7.73264 24.4447 7.16744 24.5816L5.40958 25.0076C4.70199 25.179 4.51727 26.0734 5.10186 26.4974L12.4572 31.8326C12.9554 32.194 13.6711 31.9411 13.8147 31.3529L15.8505 23.0152C16.0137 22.3465 15.3281 21.7801 14.6762 22.0452L13.0661 22.7001C12.5619 22.9052 11.991 22.6092 11.8849 22.0877L10.7521 16.5224C10.6486 16.014 11.038 15.5365 11.5704 15.5188L18.1639 15.2998C18.8529 15.2769 19.2383 14.517 18.8379 13.9711Z" />
    </svg>
  );
}

export default function ProjectCard({ project }: ProjectCardProps) {
  // The badge doubles as the card's color class — see .project-card.* in globals.css.
  const badgeClass = project.badge ?? '';

  return (
    <div className={`project-card ${badgeClass}`}>
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
        <div className="project-header-right">
          {project.zapstore && (
            <a
              href={project.zapstore}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label={`${project.name} on Zapstore`}
              title="Get it on Zapstore"
            >
              <ZapstoreIcon />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon-link"
              aria-label={`${project.name} on GitHub`}
            >
              <GitHubIcon />
            </a>
          )}
          {project.badge && (
            <span className={`project-badge ${badgeClass}`}>
              {project.badge}
            </span>
          )}
        </div>
      </div>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="project-link"
      >
        <h3 className="project-title">
          {project.name} <span className="arrow">→</span>
        </h3>
        <p className="project-desc">{project.description}</p>
      </a>
    </div>
  );
}
