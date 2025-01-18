'use client';

import { useState, useEffect } from 'react';
import styles from './teacherManagement.module.css';

interface Teacher {
  id: number;
  name: string;
  subject: string;
  students: { name: string; score: number }[];
}

const TeacherList = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    fetch('/api/teachers')
      .then((res) => res.json())
      .then((data) => setTeachers(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.teacherList}>
      {teachers.map((teacher) => (
        <div key={teacher.id} className={styles.teacherCard}>
          <h2>{teacher.name}</h2>
          <p>Subject: {teacher.subject}</p>
          <h3>Students and Scores:</h3>
          <ul>
            {teacher.students.map((student, index) => (
              <li key={index}>
                {student.name}: {student.score}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeacherList;
