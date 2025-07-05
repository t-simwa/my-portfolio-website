import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'tedsimwa.com',
    href: 'https://tedsimwa.com',
  },
  {
    social: 'email',
    link: 'simwated@gmail.com',
    href: 'mailto:simwated@gmail.com',
  },
  {
    social: 'phone',
    link: '+254 723 356800',
    href: 'tel:+254723356800',
  },
  {
    social: 'github',
    link: 't-simwa',
    href: 'https://github.com/t-simwa',
  },
  {
    social: 'linkedin',
    link: 'ted-simwa',
    href: 'https://www.linkedin.com/in/ted-simwa',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
