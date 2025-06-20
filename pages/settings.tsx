import ThemeInfo from '@/components/ThemeInfo';

import styles from '@/styles/SettingsPage.module.css';

const SettingsPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <ThemeInfo
          name="Kenya"
          icon="/themes/kenya.png"
          publisher="Inspired by Kenyan Flag"
          theme="kenya"
        />
        <ThemeInfo
          name="Uganda"
          icon="/themes/uganda.png"
          publisher="Inspired by Ugandan Flag"
          theme="uganda"
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Settings' },
  };
}

export default SettingsPage;
