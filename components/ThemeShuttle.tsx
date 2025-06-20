import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from '@/styles/ThemeShuttle.module.css';

const countryThemes = [
  { name: 'kenya', flag: '/themes/kenya.png', label: 'Kenya' },
  { name: 'uganda', flag: '/themes/uganda.png', label: 'Uganda' },
];

const ThemeShuttle = () => {
  const [currentThemeIndex, setCurrentThemeIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'kenya';
    const initialIndex = countryThemes.findIndex(t => t.name === savedTheme);
    setCurrentThemeIndex(initialIndex >= 0 ? initialIndex : 0);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  const selectTheme = (index: number) => {
    const theme = countryThemes[index];
    document.documentElement.setAttribute('data-theme', theme.name);
    localStorage.setItem('theme', theme.name);
    setCurrentThemeIndex(index);
    setOpen(false);
  };

  const currentTheme = countryThemes[currentThemeIndex];

  return (
    <div className={styles.shuttleContainer} ref={dropdownRef}>
      <button
        className={styles.menuButton}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={styles.shuttleText}>Switch Country Theme</span>
        <Image
          src={currentTheme.flag}
          alt={`${currentTheme.label} Flag`}
          width={24}
          height={16}
          className={styles.flagIcon}
        />
      </button>
      {open && (
        <div className={styles.dropdown} role="listbox">
          {countryThemes.map((theme, idx) => (
            <div
              key={theme.name}
              className={
                styles.dropdownItem +
                (idx === currentThemeIndex ? ' ' + styles.active : '')
              }
              onClick={() => selectTheme(idx)}
              role="option"
              aria-selected={idx === currentThemeIndex}
              tabIndex={0}
            >
              <Image
                src={theme.flag}
                alt={`${theme.label} Flag`}
                width={20}
                height={14}
                className={styles.flagIcon}
              />
              <span className={styles.dropdownLabel}>{theme.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeShuttle; 