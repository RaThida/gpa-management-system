import React from 'react';
import SubjectList from './SubjectList';
import SubjectForm from './SubjectForm';
import styles from './subjectManagement.module.css';

const SubjectManagement = () => {
  return (
    <div className={styles.container}>
      <h1>Subject Management</h1>
      <SubjectForm />
      <SubjectList />
    </div>
  );
};

export default SubjectManagement;
