import { NextRequest, NextResponse } from 'next/server';
import createConnection from '../../../../../lib/db';
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
  try {
    const { email, password, first_name, last_name } = await req.json();

    // Validate required fields
    if (!email || !password || !first_name || !last_name) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a connection
    const db = await createConnection();

    // Execute query
    const [result] = await db.query(
      'INSERT INTO users (email, password, role, first_name, last_name) VALUES (?, ?, ?, ?, ?)',
      [email, hashedPassword, 'teacher', first_name, last_name]
    );

    // Close the connection after query execution
    await db.end();

    return NextResponse.json({ message: 'Teacher registration successful', result });
  } catch (error) {
    console.error('Error during teacher registration:', error);
    return NextResponse.json({ error: 'Database error' }, { status: 500 });
  }
}
