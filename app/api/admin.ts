import { NextApiRequest, NextApiResponse } from 'next';
import mysql from 'mysql2/promise';

const dbConfig = {
  host: 'localhost', // Change if your MySQL is hosted elsewhere
  user: 'root', // Replace with your MySQL username
  password: '', // Replace with your MySQL password
  database: 'school_management', // Replace with your database name
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Create a connection to the database
      const connection = await mysql.createConnection(dbConfig);

      // Query the database
      const [rows] = await connection.execute('SELECT * FROM admins');

      // Close the connection
      await connection.end();

      // Return the fetched data
      res.status(200).json(rows);
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Failed to fetch admin data' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
