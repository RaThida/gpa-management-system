'use client';

import React, { useEffect, useState } from 'react';
import styles from './subjectManagement.module.css';

const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch('/api/subjects')
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  return (
    <div className={styles.listContainer}>
      <h2>Subjects</h2>
      <ul>
        {subjects.map((subject: any) => (
          <li key={subject.id}>
            {subject.name} - Taught by {subject.teacher}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectList;
