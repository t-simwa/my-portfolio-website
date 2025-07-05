import styles from '@/styles/AboutPage.module.css';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.profileImage}>
            <Image
              src="/about/profile-picture.JPG"
              alt="Ted Simwa"
              width={200}
              height={200}
              className={styles.image}
              priority
            />
          </div>
          <div className={styles.headerText}>
            <h1 className={styles.title}>Ted Simwa</h1>
            <div className={styles.subtitle}>Full Stack Developer & IT Professional</div>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Professional Journey</h2>
            <p className={styles.paragraph}>
              I'm a versatile IT professional with hands-on experience across software development, cloud services, and infrastructure management. My journey began with a curiosity about how technology could solve complex problems, which led me to pursue a Bachelor of Science in Computer Science at Africa Nazarene University. Over the years, I've developed expertise in full-stack web development, having delivered enterprise-grade applications using cutting-edge technologies like Next.js, React, and Node.js.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Technical Expertise</h2>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Frontend Development:</span> React/Redux, Next.js, TypeScript, Tailwind CSS, Radix UI, Framer Motion
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Backend & Database:</span> Node.js, Express.js, MongoDB, Redis, RESTful APIs, JWT authentication
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Infrastructure & Cloud:</span> AWS (EC2, S3, CloudFront), Docker, Kubernetes, VMware, NetApp storage
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>DevOps & Testing:</span> GitHub Actions CI/CD, Jest, Cypress, Git version control, Docker deployment
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Recent Experience</h2>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Software Development Intern at Peak and Dale Solutions Ltd (Feb 2024 - May 2024):</span> Led frontend development for an enterprise timesheet management system, engineered responsive UI components using React and Chakra UI that improved user experience by 25%, and implemented complex state management using Redux for real-time data synchronization.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>IT Infrastructure Intern at Datapost Limited (Jun 2023 - Aug 2023):</span> Managed critical storage systems using NetApp, configured virtualized environments with VMware and Kubernetes, and implemented comprehensive backup and recovery processes using Veeam.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Notable Projects</h2>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Simca Cleaning Website:</span> A responsive website for a Nairobi-based SME featuring service listings, booking forms, client testimonials, and interactive maps. Built with Next.js 15.2.4, React 19, TypeScript, Tailwind CSS, and Radix UI.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>E-Commerce Platform with Real-time Inventory Management:</span> A full-stack e-commerce platform for small businesses with real-time inventory tracking, payment processing, and analytics dashboard. Technologies included React.js, Node.js, MongoDB, Redis, AWS, and Docker.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Education & Certifications</h2>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Education:</span> Bachelor of Science in Computer Science at Africa Nazarene University (2020 to date), focusing on Data Structures & Algorithms, Machine Learning, Database Systems, Information Security, Operating Systems, and Natural Language Processing.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Certifications:</span> HCIA Big Data v3.0 Certification from Huawei (Completed May 2023)
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Development Philosophy</h2>
            <ul className={styles.list}>
              <li><span className={styles.highlight}>User-First Design:</span> Every feature decision starts with user impact</li>
              <li><span className={styles.highlight}>Clean, Maintainable Code:</span> Writing code that future-me will thank present-me for</li>
              <li><span className={styles.highlight}>Continuous Learning:</span> Technology evolves fast; staying curious is essential</li>
              <li><span className={styles.highlight}>Collaborative Spirit:</span> The best solutions come from diverse perspectives</li>
              <li><span className={styles.highlight}>Analytical Problem-Solving:</span> Combining technical expertise with strong analytical skills</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Personal Interests</h2>
            <p className={styles.paragraph}>
              When I'm not coding, you'll find me hiking local trails (great for debugging mental blocks), experimenting with photography, or volunteering at local tech meetups where I mentor new developers. I'm also passionate about sustainable technology and how we can build more environmentally conscious applications.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Fun Facts</h2>
            <ul className={styles.list}>
              <li>I debug best while walking—something about movement helps me think</li>
              <li>I maintain a small garden and apply principles of growth and patience from gardening to software development</li>
              <li>I speak three languages: English, Spanish, and JavaScript (okay, that last one doesn't count, but I had to!)</li>
              <li>I'm a Presidential Award recipient from my time at Alliance High School</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
