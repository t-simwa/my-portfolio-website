import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

type Category = 'all' | 'web' | 'mobile' | 'backend' | 'frontend';

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'web', label: 'Web Applications' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'backend', label: 'APIs & Backend' },
  { id: 'frontend', label: 'Frontend Showcases' },
];

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>My Projects</h1>
      <p className={styles.pageSubtitle}>
        A showcase of my technical expertise through various projects. Each project demonstrates
        different aspects of software development, from frontend design to backend architecture.
      </p>

      <div className={styles.categories}>
        {categories.map(({ id, label }) => (
          <button
            key={id}
            className={`${styles.categoryButton} ${
              selectedCategory === id ? styles.active : ''
            }`}
            onClick={() => setSelectedCategory(id)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.container}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Projects' },
  };
}

export default ProjectsPage;
