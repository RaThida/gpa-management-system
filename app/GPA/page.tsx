'use client';  // Mark this file as a client-side component

import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import Header from '../Components/Header';  // Import Header component
import Navbar from '../Components/Navbar';  // Import Navbar component
import styles from '../Components/styles.module.css';  // Import styles

const GpaPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  const openPopup = () => setPopupOpen(true);
  const closePopup = () => setPopupOpen(false);

  const handleYearSelect = (year: string) => {
    // Navigate to the selected year's page
    router.push(`/GPA/${year}`); 
    closePopup(); // Close the popup after selection
  };

  return (
    <div className={styles.container}>
      <Header /> {/* Keep the Header as it is */}
      <Navbar /> {/* Keep the Navbar as it is */}

      <div className={styles.background}></div>  {/* Background Section */}

      <div className={styles.gpaContainer}>
        <h1 className={styles.title}>Select Year for GPA</h1>
        <button onClick={openPopup} className={styles.gpaButton}>Select Year</button>

        {/* GPA Year Selection Pop-Up */}
        {isPopupOpen && (
          <div className={styles.overlay}>
            <div className={styles.popup}>
              <h2>Select Your Year</h2>
              <ul className={styles.yearList}>
                <li>
                  <button onClick={() => handleYearSelect('Year1')}>Year 1</button>
                </li>
                <li>
                  <button onClick={() => handleYearSelect('Year2')}>Year 2</button>
                </li>
                <li>
                  <button onClick={() => handleYearSelect('Year3')}>Year 3</button>
                </li>
                <li>
                  <button onClick={() => handleYearSelect('Year4')}>Year 4</button>
                </li>
              </ul>
              <button className={styles.closeButton} onClick={closePopup}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GpaPage;
