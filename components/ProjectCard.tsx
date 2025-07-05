import { VscGithubAlt, VscLinkExternal } from 'react-icons/vsc';

import { Project } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{project.title}</h3>
        </div>
        {project.image && (
          <img
            src={project.image}
            alt={project.title + ' preview'}
            className={styles.previewImage}
          />
        )}
        
        <p className={styles.description}>{project.description}</p>

        <div className={styles.technologies}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.tech}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.features}>
          {project.features.map((feature) => (
            <div key={feature} className={styles.feature}>
              • {feature}
            </div>
          ))}
        </div>

        <div className={styles.links}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscGithubAlt className={styles.icon} />
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              <VscLinkExternal className={styles.icon} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
