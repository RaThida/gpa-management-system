import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

export default function Homepage() {
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
          <li>
            <Link href="/GPA" className={styles.navItem}>GPA</Link> {/* Link to GPA page */}
          </li>
          <li>
            <Link href="/schedule" className={styles.navItem}>Schedule</Link>
          </li>
          <li>
            <Link href="/about" className={styles.navItem}>About Us</Link>
          </li>
          <li>
            <Link href="/help" className={styles.navItem}>Help</Link>
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