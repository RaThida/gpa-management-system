import { NextResponse } from 'next/server';

const teachers = [
  {
    id: 1,
    name: 'Kru Math',
    subject: 'Mathematics',
    students: [
      { name: 'John Doe', score: 85 },
      { name: 'Jane Smith', score: 92 },
    ],
  },
  {
    id: 2,
    name: 'Kru Science',
    subject: 'Physics',
    students: [
      { name: 'Alice Johnson', score: 78 },
      { name: 'Bob Brown', score: 88 },
    ],
  },
];

export async function GET() {
  return NextResponse.json(teachers);
}

export async function POST(req: Request) {
  const newTeacher = await req.json();
  teachers.push({ ...newTeacher, id: teachers.length + 1 });
  return NextResponse.json({ success: true });
}
