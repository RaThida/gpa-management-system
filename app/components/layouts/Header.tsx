import styles from '../Homepage/styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Use img tag for the logo */}
      <img src="/images/logo.png" alt="Logo" className={styles.logo} />
      <h1 className={styles.title}>Royal University of Phnom Penh</h1>
    </header>
  );
};

export default Header;
