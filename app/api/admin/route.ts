import { NextResponse } from 'next/server';

const adminData = [
  { id: 1, name: 'Admin 1', email: 'admin1@example.com', role: 'Super Admin' },
  { id: 2, name: 'Admin 2', email: 'admin2@example.com', role: 'Admin' },
];

export async function GET() {
  return NextResponse.json(adminData);
}

export async function POST(req: Request) {
  const newAdmin = await req.json();
  adminData.push({ ...newAdmin, id: adminData.length + 1 });
  return NextResponse.json({ success: true });
}
