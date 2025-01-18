import { NextResponse } from 'next/server';

const users = [
  { id: 1, name: 'John Doe', grade: 'A', gpa: 3.8, score: 90, email: 'john@example.com' },
  { id: 2, name: 'Jane Doe', grade: 'B', gpa: 3.2, score: 85, email: 'jane@example.com' },
  { id: 3, name: 'Alex Smith', grade: 'A', gpa: 3.9, score: 95, email: 'alex@example.com' },
  // You can add more students here
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const newUser = await req.json();
  users.push({ ...newUser, id: users.length + 1 });
  return NextResponse.json({ success: true });
}
