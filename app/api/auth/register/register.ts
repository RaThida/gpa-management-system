import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma"; // Adjust path as per your project structure

const isValidSchoolEmail = (email: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@school\.edu$/;
  return emailRegex.test(email);
};

export async function POST(req: NextRequest) {
  const { name, email, password, userType } = await req.json(); // Include 'name' in the request data

  // Validate school email format
  if (!isValidSchoolEmail(email)) {
    return NextResponse.json({ error: "Invalid school email" }, { status: 400 });
  }

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" }, { status: 400 });
  }

  // Hash password and save the user to the database
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await prisma.user.create({
      data: {
        name,           // Ensure 'name' is included
        email,
        password: hashedPassword,
        userType,       // Optional, make sure it's included or has a default value
        role: 'student', // Use default role or adjust as needed
      },
    });
    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error saving user:", error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
