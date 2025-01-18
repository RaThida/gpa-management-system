'use client';

import React, { useState } from 'react';
import styles from './subjectManagement.module.css';

const SubjectForm = () => {
  const [name, setName] = useState('');
  const [teacher, setTeacher] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/subjects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, teacher }),
    });
    if (res.ok) {
      setName('');
      setTeacher('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Add a Subject</h2>
      <input
        type="text"
        placeholder="Subject Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Teacher Name"
        value={teacher}
        onChange={(e) => setTeacher(e.target.value)}
      />
      <button type="submit">Add Subject</button>
    </form>
  );
};

export default SubjectForm;
