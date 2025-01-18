import { NextResponse } from 'next/server';

const adminData = [
  { id: 1, name: 'Admin 1', email: 'admin1@example.com', password: 'password123', role: 'Super Admin' },
  { id: 2, name: 'Admin 2', email: 'admin2@example.com', password: 'password456', role: 'Admin' },
];

export async function POST(req: Request) {
  const { name, email, password, role } = await req.json();

  // Validate input
  if (!name || !email || !password || !role) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  // Check if the email already exists
  const existingAdmin = adminData.find(admin => admin.email === email);
  if (existingAdmin) {
    return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
  }

  const newAdmin = { id: adminData.length + 1, name, email, password, role };
  adminData.push(newAdmin);

  return NextResponse.json({ success: true, admin: newAdmin });
}
