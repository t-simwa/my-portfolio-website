import { useState } from 'react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

import styles from '@/styles/ProjectsPage.module.css';

type Category = 'all' | 'sites' | 'web' | 'mobile' | 'ai' | 'cloud';

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'sites', label: 'Websites' },
  { id: 'web', label: 'Web Apps' },
  { id: 'mobile', label: 'Mobile Apps' },
  { id: 'ai', label: 'AI & Data' },
  { id: 'cloud', label: 'Cloud & DevOps' },
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
        Explore a curated selection of my real-world projects, including modern websites, web apps, cloud-native platforms, AI/data solutions, mobile apps, and this portfolio. Each project demonstrates hands-on expertise with current technologies and practical business impact.
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
