// lib/db.ts

import mysql from 'mysql2/promise';

export default async function createDatabaseConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'your_database_name',
  });
  return connection;
}
