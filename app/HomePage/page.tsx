import Header from '../components/layouts/Header';
import Navbar from '../components/layouts/Navbar';

import styles from './styles.module.css';
import Link from 'next/link';

export default function Homepage() {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <div className={styles.background}></div>

      {/* Added ul to group the links in a list */}
      <ul className={styles.navList}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/register">Register</Link></li>
      </ul>
    </div>
  );
}

