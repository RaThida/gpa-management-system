'use client';

import React, { useState, useEffect } from 'react';
import styles from './UserManagement.module.css';

interface User {
  id: number;
  name: string;
  email: string;
  college: string;
  department: string;
}

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState<User>({ id: 0, name: '', email: '', college: '', department:''});

  useEffect(() => {
    fetch('/api/userManagement')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/userManagement', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const newUser = await res.json();
    if (res.ok) {
      setUsers((prev) => [...prev, newUser]);
      setForm({ id: 0, name: '', email: '', college: '', department:'' });
    }
  };

  return (
    <div className={styles.container}>
      <h1>User Management</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="number"
          name="id"
          placeholder="ID"
          value={form.id}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <select name="college" value={form.college} onChange={handleChange} required>
          <option value="" disabled>
            Select college
          </option>
          <option value="Engineering">Engineering</option>
          <option value="Science">Science</option>
          <option value="International Langeuage">International Langeuage</option>
        </select>
        <select name="department" value={form.department} onChange={handleChange} required>
          <option value="" disabled>
            Select department
          </option>
          <option value="MathemITEatics">ITE</option>
          <option value="IT">IT</option>
          <option value="Vietnam">Vietnam</option>
        </select>
        <button type="submit">Add User</button>
      </form>

      <h2>User List</h2>
      <ul className={styles.userList}>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email}) - {user.college}
          </li>
        ))}
      </ul>
    </div>
  );
}
