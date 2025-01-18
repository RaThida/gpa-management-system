import TeacherList from './TeacherList';
import styles from './teacherManagement.module.css';

const TeacherManagement = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Teacher Management</h1>
      <TeacherList />
    </div>
  );
};

export default TeacherManagement;
