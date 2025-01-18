import Link from 'next/link';
import { useState, useEffect } from 'react';
const UsersList = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch('/api/users');
      const data = await res.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Students</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
            <th>Score</th>
            <th>GPA</th>
            <th>Email</th>
            <th>Profile</th>
          </tr>
        </thead>
        <tbody>
          {users.map((users) => (
            <tr key={users.id}>
              <td>{users.name}</td>
              <td>{users.grade}</td>
              <td>{users.score}</td>
              <td>{users.gpa}</td>
              <td>{users.email}</td>
              <td>
                <Link href={`/admin/users/${users.id}`}>View Profile</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersList;
