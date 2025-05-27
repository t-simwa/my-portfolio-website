import Image from 'next/image';
import styles from '@/styles/SkillsPage.module.css';

const skillsData = {
  frontend: [
    {
      name: 'React',
      description: 'Building modern, responsive user interfaces with React and Next.js',
      icon: '/logos/react_icon.svg',
    },
    {
      name: 'TypeScript',
      description: 'Writing type-safe, maintainable code with TypeScript',
      icon: '/logos/js_icon.svg',
    },
    {
      name: 'CSS/SASS',
      description: 'Creating beautiful, responsive designs with modern CSS',
      icon: '/logos/css_icon.svg',
    },
  ],
  backend: [
    {
      name: 'Node.js',
      description: 'Building scalable server-side applications',
      icon: '/logos/js_icon.svg',
    },
    {
      name: 'Express',
      description: 'Creating RESTful APIs and web applications',
      icon: '/logos/js_icon.svg',
    },
    {
      name: 'MongoDB',
      description: 'Working with NoSQL databases and data modeling',
      icon: '/logos/json_icon.svg',
    },
  ],
  tools: [
    {
      name: 'Git',
      description: 'Version control and collaborative development',
      icon: '/logos/vscode_icon.svg',
    },
    {
      name: 'Docker',
      description: 'Containerization and deployment',
      icon: '/logos/vscode_icon.svg',
    },
    {
      name: 'AWS',
      description: 'Cloud services and infrastructure',
      icon: '/logos/vscode_icon.svg',
    },
  ],
};

const SkillsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Skills & Expertise</h1>
      <p className={styles.pageSubtitle}>
        A comprehensive overview of my technical skills and professional expertise
        in software development.
      </p>

      <div className={styles.skillsContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Frontend Development</h2>
          <div className={styles.skillsGrid}>
            {skillsData.frontend.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <div className={styles.skillHeader}>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={24}
                    height={24}
                    className={styles.skillIcon}
                  />
                  <h3 className={styles.skillTitle}>{skill.name}</h3>
                </div>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Backend Development</h2>
          <div className={styles.skillsGrid}>
            {skillsData.backend.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <div className={styles.skillHeader}>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={24}
                    height={24}
                    className={styles.skillIcon}
                  />
                  <h3 className={styles.skillTitle}>{skill.name}</h3>
                </div>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tools & Technologies</h2>
          <div className={styles.skillsGrid}>
            {skillsData.tools.map((skill) => (
              <div key={skill.name} className={styles.skillCard}>
                <div className={styles.skillHeader}>
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={24}
                    height={24}
                    className={styles.skillIcon}
                  />
                  <h3 className={styles.skillTitle}>{skill.name}</h3>
                </div>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Skills' },
  };
}

export default SkillsPage; 