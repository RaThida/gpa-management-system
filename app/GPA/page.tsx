'use client';  // Mark the component as a client component

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link'; // Import Link

export default function Page() {
  const [showDropdown, setShowDropdown] = useState(false);

  // Show the dropdown by default if the current route is /GPA
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/GPA') {
      setShowDropdown(true); // Show the dropdown for /GPA route
    }
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(prevState => !prevState); // Toggle dropdown on click
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Image src="/logo.png" alt="Logo" width={100} height={100} className={styles.logo} />
        <h1 className={styles.title}>Royal University of Phnom Penh</h1>
      </header>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li>
            <Link href="/Home" className={styles.navItem}>Home</Link>
          </li>
          <li
            className={styles.dropdown}
            onClick={toggleDropdown}  // Toggle the dropdown on click
          >
            GPA
            {showDropdown && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/GPA/Year1" className={styles.navItem}>Year1</Link></li>
                <li><Link href="/GPA/Year2" className={styles.navItem}>Year2</Link></li>
                <li><Link href="/GPA/Year3" className={styles.navItem}>Year3</Link></li>
                <li><Link href="/GPA/Year4" className={styles.navItem}>Year4</Link></li>
              </ul>
            )}
          </li>
          <li>
            <Link href="/schedule" className={styles.navItem}>Schedule</Link>
          </li>
          <li>
            <Link href="/about" className={styles.navItem}>About Us</Link>
          </li>
          <li>
            <Link href="/Help" className={styles.navItem}>Help</Link>
          </li>
          <li>
            <Link href="/Account" className={styles.navItem}>Account</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.background}></div>
    </div>
  );
}
