import { NextResponse } from 'next/server';

export async function GET() {
  const departments = [
    { id: 1, name: 'Computer Science', head: 'Dr. John' },
    { id: 2, name: 'Mechanical Engineering', head: 'Dr. Devid' },
    { id: 3, name: 'Electrical Engineering', head: 'Dr. Nesa' },
  ];

  const departmentCount = departments.length;

  return NextResponse.json({ departments, departmentCount });
}
