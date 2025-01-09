// pages/api/students.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import Student from '../../models/student';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, phone_number, PASSWORD, gender, id_card, BIRTH, degree, college, department, major, generation, academic_year, classes , shif, gpa } = req.body;

    try {
      const student = await Student.create({ name, phone_number, PASSWORD, gender, id_card, BIRTH, degree, college, department, major, generation, academic_year, classes, shif, gpa});
      res.status(201).json(student);
    } catch (error) {
      res.status(500).json({ message: 'Error creating student' });
    }
  } else if (req.method === 'GET') {
    try {
      const students = await Student.findAll();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching students' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
