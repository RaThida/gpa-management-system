// Importing necessary components
import Image from 'next/image';
import styles from './styles.module.css';
import Link from 'next/link';

// The Homepage component
const Homepage = () => {
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
            <Link href="../GPA" className={styles.navItem}>GPA</Link>
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

      {/* Events Section */}
      <div className={styles.eventsSection}>
        <h2 className={styles.eventsTitle}>Events</h2>
        <div className={styles.eventsContainer}>
          <button className={styles.navigationButton}>{'<'}</button>
          <div className={styles.eventCard}>
            <div className={styles.eventImageContainer}>
              <Image src="/event1.jpg" alt="Event 1" width={300} height={400} />
            </div>
            <h3 className={styles.eventTitle}>កម្មវិធីសប្បុរសធម៍លើកទី១៤</h3>
            <p className={styles.eventDetail}><span>📅</span> 11-12/01/2025</p>
            <p className={styles.eventDetail}><span>⏰</span> 08:00 am - 08:30 pm</p>
            <p className={styles.eventDetail}><span>📍</span> RUPP</p>
          </div>
          <div className={styles.eventCard}>
            <div className={styles.eventImageContainer}>
              <Image src="/event1.jpg" alt="Event 2" width={300} height={400} />
            </div>
            <h3 className={styles.eventTitle}>កម្មវិធីសប្បុរសធម៍លើកទី១៤</h3>
            <p className={styles.eventDetail}><span>📅</span> 11-12/01/2025</p>
            <p className={styles.eventDetail}><span>⏰</span> 08:00 am - 08:30 pm</p>
            <p className={styles.eventDetail}><span>📍</span> RUPP</p>
          </div>
          <div className={styles.eventCard}>
            <div className={styles.eventImageContainer}>
              <Image src="/event1.jpg" alt="Event 3" width={300} height={400} />
            </div>
            <h3 className={styles.eventTitle}>កម្មវិធីសប្បុរសធម៍លើកទី១៤</h3>
            <p className={styles.eventDetail}><span>📅</span> 11-12/01/2025</p>
            <p className={styles.eventDetail}><span>⏰</span> 08:00 am - 08:30 pm</p>
            <p className={styles.eventDetail}><span>📍</span> RUPP</p>
          </div>
          <button className={styles.navigationButton}>{'>'}</button>
        </div>
      </div>

      {/* Enhanced Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerAbout}>
            <h4>About Royal University of Phnom Penh</h4>
            <p>
              RUPP is the leading university in Cambodia, focusing on higher education, research, and technological innovation. We strive to create a progressive and sustainable environment for learning and growth.
            </p>
          </div>

          <div className={styles.footerLinks}>
            <div className={styles.footerLinkSection}>
              <h5>Quick Links</h5>
              <ul>
                <li><Link href="/about-us">About Us</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/help">Help</Link></li>
              </ul>
            </div>

            <div className={styles.footerLinkSection}>
              <h5>Contact</h5>
              <ul>
                <li>Email: <a href="mailto:contact@rupp.edu.kh">contact@rupp.edu.kh</a></li>
                <li>Phone: +855 23 999 111</li>
                <li>Address: Street 200, Phnom Penh, Cambodia</li>
              </ul>
            </div>
          </div>

          <div className={styles.footerSocial}>
            <h5>Follow Us</h5>
            <div className={styles.socialLinks}>
              <a href="https://facebook.com/RUPP" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com/RUPP" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com/school/RUPP" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://instagram.com/RUPP" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>&copy; 2025 Royal University of Phnom Penh. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
