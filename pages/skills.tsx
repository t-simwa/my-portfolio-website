import Image from 'next/image';
import styles from '@/styles/SkillsPage.module.css';

const skillsData = {
  frontend: {
    proficient: [
      {
        name: 'JavaScript ES6+',
        description: 'Advanced knowledge including async/await, closures, and modern syntax',
        icon: '/logos/js_icon.svg',
        level: 5
      },
      {
        name: 'React',
        description: 'Hooks, Context API, component optimization, state management',
        icon: '/logos/react_icon.svg',
        level: 5
      },
      {
        name: 'HTML5 & CSS3',
        description: 'Semantic markup, Flexbox, Grid, responsive design',
        icon: '/logos/css_icon.svg',
        level: 5
      },
      {
        name: 'TypeScript',
        description: 'Type safety, interfaces, generics',
        icon: '/logos/js_icon.svg',
        level: 5
      }
    ],
    intermediate: [
      {
        name: 'Vue.js',
        description: 'Component-based architecture, Vuex state management',
        icon: '/logos/js_icon.svg',
        level: 4
      },
      {
        name: 'Sass/SCSS',
        description: 'Advanced styling, mixins, functions',
        icon: '/logos/css_icon.svg',
        level: 4
      },
      {
        name: 'Tailwind CSS',
        description: 'Utility-first styling, custom configurations',
        icon: '/logos/css_icon.svg',
        level: 4
      }
    ],
    learning: [
      {
        name: 'Next.js',
        description: 'Server-side rendering, static generation',
        icon: '/logos/react_icon.svg',
        level: 3
      },
      {
        name: 'React Native',
        description: 'Cross-platform mobile development',
        icon: '/logos/react_icon.svg',
        level: 3
      }
    ]
  },
  backend: {
    proficient: [
      {
        name: 'Node.js',
        description: 'RESTful APIs, middleware, authentication',
        icon: '/logos/js_icon.svg',
        level: 5
      },
      {
        name: 'Express.js',
        description: 'Routing, error handling, security best practices',
        icon: '/logos/js_icon.svg',
        level: 5
      },
      {
        name: 'Python',
        description: 'Django basics, data manipulation, scripting',
        icon: '/logos/python.svg',
        level: 5
      }
    ],
    intermediate: [
      {
        name: 'RESTful API Design',
        description: 'Proper HTTP methods, status codes, documentation',
        icon: '/logos/json_icon.svg',
        level: 4
      },
      {
        name: 'Authentication',
        description: 'JWT, OAuth, session management',
        icon: '/logos/vscode_icon.svg',
        level: 4
      },
      {
        name: 'Database Design',
        description: 'Relational and NoSQL database modeling',
        icon: '/logos/json_icon.svg',
        level: 4
      }
    ]
  },
  databases: {
    proficient: [
      {
        name: 'MongoDB',
        description: 'Document modeling, aggregation pipelines, indexing',
        icon: '/logos/json_icon.svg',
        level: 5
      },
      {
        name: 'PostgreSQL',
        description: 'Complex queries, relationships, performance optimization',
        icon: '/logos/vscode_icon.svg',
        level: 5
      }
    ],
    intermediate: [
      {
        name: 'Redis',
        description: 'Caching strategies, session storage',
        icon: '/logos/vscode_icon.svg',
        level: 4
      },
      {
        name: 'AWS S3',
        description: 'File storage, CDN integration',
        icon: '/logos/vscode_icon.svg',
        level: 4
      }
    ]
  },
  tools: {
    daily: [
      {
        name: 'Git & GitHub',
        description: 'Version control, collaboration, CI/CD workflows',
        icon: '/logos/vscode_icon.svg',
        level: 5
      },
      {
        name: 'VS Code',
        description: 'Advanced configurations, extensions, debugging',
        icon: '/logos/vscode_icon.svg',
        level: 5
      },
      {
        name: 'Docker',
        description: 'Containerization, development environments',
        icon: '/logos/vscode_icon.svg',
        level: 5
      },
      {
        name: 'AWS',
        description: 'EC2, S3, Lambda, basic cloud architecture',
        icon: '/logos/vscode_icon.svg',
        level: 5
      }
    ],
    regular: [
      {
        name: 'Postman',
        description: 'API testing and documentation',
        icon: '/logos/vscode_icon.svg',
        level: 4
      },
      {
        name: 'Figma',
        description: 'UI/UX collaboration and implementation',
        icon: '/logos/vscode_icon.svg',
        level: 4
      },
      {
        name: 'Jira',
        description: 'Project management and sprint planning',
        icon: '/logos/vscode_icon.svg',
        level: 4
      }
    ]
  },
  softSkills: [
    'Problem-Solving: Breaking complex challenges into manageable solutions',
    'Communication: Translating technical concepts for non-technical stakeholders',
    'Project Management: Agile methodologies, sprint planning, delivery focus',
    'Mentorship: Guiding junior developers and contributing to learning communities',
    'Adaptability: Quickly learning new technologies and adjusting to project needs'
  ],
  learning: [
    'GraphQL: Modern API development and data fetching',
    'Kubernetes: Container orchestration and scaling',
    'Machine Learning Basics: Python libraries for data analysis',
    'Accessibility: WCAG guidelines and inclusive design principles'
  ]
};

const StarRating = ({ level }: { level: number }) => {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`${styles.star} ${index < level ? styles.filled : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  );
};

const SkillsPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Skills & Technologies</h1>
      <p className={styles.pageSubtitle}>
        A comprehensive overview of my technical expertise and professional capabilities
      </p>

      <div className={styles.skillsContent}>
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Frontend Technologies</h2>
          
          <div className={styles.skillLevel}>
            <h3 className={styles.levelTitle}>Proficient (★★★★★)</h3>
            <div className={styles.skillsGrid}>
              {skillsData.frontend.proficient.map((skill) => (
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
                  <StarRating level={skill.level} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillLevel}>
            <h3 className={styles.levelTitle}>Intermediate (★★★★☆)</h3>
            <div className={styles.skillsGrid}>
              {skillsData.frontend.intermediate.map((skill) => (
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
                  <StarRating level={skill.level} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillLevel}>
            <h3 className={styles.levelTitle}>Learning (★★★☆☆)</h3>
            <div className={styles.skillsGrid}>
              {skillsData.frontend.learning.map((skill) => (
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
                  <StarRating level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Backend Technologies</h2>
          
          <div className={styles.skillLevel}>
            <h3 className={styles.levelTitle}>Proficient (★★★★★)</h3>
            <div className={styles.skillsGrid}>
              {skillsData.backend.proficient.map((skill) => (
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
                  <StarRating level={skill.level} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillLevel}>
            <h3 className={styles.levelTitle}>Intermediate (★★★★☆)</h3>
            <div className={styles.skillsGrid}>
              {skillsData.backend.intermediate.map((skill) => (
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
                  <StarRating level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Databases & Storage</h2>
          
          <div className={styles.skillLevel}>
            <h3 className={styles.levelTitle}>Proficient (★★★★★)</h3>
            <div className={styles.skillsGrid}>
              {skillsData.databases.proficient.map((skill) => (
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
                  <StarRating level={skill.level} />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.skillLevel}>
            <h3 className={styles.levelTitle}>Intermediate (★★★★☆)</h3>
            <div className={styles.skillsGrid}>
              {skillsData.databases.intermediate.map((skill) => (
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
                  <StarRating level={skill.level} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tools & Platforms</h2>
          
          <div className={styles.skillLevel}>
            <h3 className={styles.levelTitle}>Daily Use</h3>
            <div className={styles.skillsGrid}>
              {skillsData.tools.daily.map((skill) => (
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
          </div>

          <div className={styles.skillLevel}>
            <h3 className={styles.levelTitle}>Regular Use</h3>
            <div className={styles.skillsGrid}>
              {skillsData.tools.regular.map((skill) => (
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
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Soft Skills</h2>
          <div className={styles.skillsGrid}>
            {skillsData.softSkills.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <p className={styles.skillDescription}>{skill}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Currently Learning</h2>
          <div className={styles.skillsGrid}>
            {skillsData.learning.map((skill, index) => (
              <div key={index} className={styles.skillCard}>
                <p className={styles.skillDescription}>{skill}</p>
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