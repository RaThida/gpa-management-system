'use client';

import { useEffect, useState } from 'react';
import styles from 'DepartmentManagement.module.css';

type Department = {
  id: number;
  name: string;
  head: string;
};

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [departmentCount, setDepartmentCount] = useState(0);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch('/api/department');
        const data = await response.json();
        setDepartments(data.departments);
        setDepartmentCount(data.departmentCount);
      } catch (error) {
        console.error('Failed to fetch departments:', error);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Department Management</h1>
      <p className={styles.info}>Total Departments: {departmentCount}</p>
      <ul className={styles.list}>
        {departments.map((department) => (
          <li key={department.id} className={styles.item}>
            <strong>{department.name}</strong> - Head: {department.head}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DepartmentManagement;
