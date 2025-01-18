// app/page.tsx (or your homepage component)
import Header from '../components/layouts/Header';
import Navbar from '../components/layouts/Navbar';


import Image from 'next/image';
import Link from 'next/link';
import styles from '../Components/styles.module.css'; // Import styles

const Homepage = () => {
  return (
    <div className={styles.container}>
      <Header /> {/* Keep the Header as it is */}
      <Navbar /> {/* Keep the Navbar as it is */}
      <div className={styles.background}></div>

      {/* Events Section */}
      <div className={styles.eventsSection}>
        <h2 className={styles.eventsTitle}>Events</h2>
        <div className={styles.eventsContainer}>
          <button className={styles.navigationButton}>{'<'}</button>
          {[1, 2, 3].map((event, index) => (
            <div key={index} className={styles.eventCard}>
              <div className={styles.eventImageContainer}>
                <Image
                  src="/event1.jpg"
                  alt={`Event ${event}`}
                  width={300}
                  height={400}
                  className={styles.eventImage}
                />
              </div>
              <h3 className={styles.eventTitle}>Event Title #{event}</h3>
              <p className={styles.eventDetail}>
                <span>
                  <Image src="/celenda.jpg" alt="Date" width={50} height={30} />
                </span> 
                11-12/01/2025
              </p>
              <p className={styles.eventDetail}>
                <span>
                  <Image src="/alarm.jpg" alt="Time" width={30} height={30} />
                </span> 
                08:00 am - 08:30 pm
              </p>
              <p className={styles.eventDetail}>
                <span>
                  <Image src="/location.jpg" alt="Location" width={20} height={30} />
                </span> 
                RUPP
              </p>
            </div>
          ))}
          <button className={styles.navigationButton}>{'>'}</button>
        </div>
      </div>

      {/* About Section */}
      <div className={styles.aboutSection}>
        <h3 className={styles.aboutTitle}>About Royal University of Phnom Penh</h3>
        <p className={styles.aboutDescription}>
          RUPP is the leading university in Cambodia, focusing on higher education, research, and technological innovation.
          We strive to create a progressive and sustainable environment for learning and growth.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
