import { NextResponse } from 'next/server';

const adminData = [
  { id: 1, name: 'Admin 1', email: 'admin1@example.com', password: 'password123', role: 'Super Admin' },
  { id: 2, name: 'Admin 2', email: 'admin2@example.com', password: 'password456', role: 'Admin' },
];

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Validate input
  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required' }, { status: 400 });
  }

  // Check for matching credentials
  const admin = adminData.find(admin => admin.email === email && admin.password === password);
  if (!admin) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
  }

  return NextResponse.json({ success: true, admin });
}
