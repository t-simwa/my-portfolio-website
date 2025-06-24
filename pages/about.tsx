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
            <div className={styles.subtitle}>Full Stack Developer</div>
          </div>
        </div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Professional Story</h2>
            <p className={styles.paragraph}>
              My journey into development began during my time as a business operations manager when I noticed how technology could streamline complex processes. What started as automating spreadsheet tasks with macros evolved into a passion for building full-scale applications. I made the leap into full-time development two years ago and haven&apos;t looked back since.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Background</h2>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Education:</span> Bachelor&apos;s in Business Administration, Self-taught Developer
            </p>
            <p className={styles.paragraph}>
              <span className={styles.highlight}>Transition Story:</span> After five years in business operations, I discovered coding through a company automation project. The logical problem-solving aspect immediately clicked with me. I dedicated evenings and weekends to learning, completed a full-stack bootcamp, and built my first commercial application within six months.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Values & Approach</h2>
            <p className={styles.paragraph}>
              I believe great software isn&apos;t just about clean code—it&apos;s about understanding the human problem you&apos;re solving. My business background helps me ask the right questions: Who will use this? What problem does it solve? How can we measure success? I approach every project with empathy for the end user and respect for the business objectives.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Development Philosophy</h2>
            <ul className={styles.list}>
              <li><span className={styles.highlight}>User-First Design:</span> Every feature decision starts with user impact</li>
              <li><span className={styles.highlight}>Clean, Maintainable Code:</span> Writing code that future-me will thank present-me for</li>
              <li><span className={styles.highlight}>Continuous Learning:</span> Technology evolves fast; staying curious is essential</li>
              <li><span className={styles.highlight}>Collaborative Spirit:</span> The best solutions come from diverse perspectives</li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Personal Interests</h2>
            <p className={styles.paragraph}>
              When I&apos;m not coding, you&apos;ll find me hiking local trails (great for debugging mental blocks), experimenting with photography, or volunteering at local tech meetups where I mentor new developers. I&apos;m also passionate about sustainable technology and how we can build more environmentally conscious applications.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Fun Facts</h2>
            <ul className={styles.list}>
              <li>I debug best while walking—something about movement helps me think</li>
              <li>My first &quot;program&quot; was a complex Excel macro that saved my team 10 hours per week</li>
              <li>I maintain a small garden and apply principles of growth and patience from gardening to software development</li>
              <li>I speak three languages: English, Spanish, and JavaScript (okay, that last one doesn&apos;t count, but I had to!)</li>
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
