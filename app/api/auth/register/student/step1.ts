import { NextRequest, NextResponse } from 'next/server';
import db from '../../../../../lib/db';  // Assuming db is a function that returns a promise
import bcrypt from 'bcryptjs';

export async function POST(req: NextRequest) {
    const { email, password, first_name, last_name } = await req.json();

    // Validate input fields
    if (!email || !password || !first_name || !last_name) {
        return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    // Hash password
    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 10);
    } catch (error) {
        return NextResponse.json({ error: 'Password hashing failed' }, { status: 500 });
    }

    try {
        // Get the connection from db() and query the database
        const connection = await db();  // Call db to get the connection
        await connection.query(
            'INSERT INTO users (email, password, role, first_name, last_name) VALUES (?, ?, ?, ?, ?)',
            [email, hashedPassword, 'student', first_name, last_name]
        );
        return NextResponse.json({ message: 'Student step 1 completed' });
    } catch (error) {
        console.error(error);  // Log the error for debugging
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}
