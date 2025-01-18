import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const subjects = [
      { name: 'Mathematics', teacher: 'Kru na kor bn' },
      { name: 'Operating System', teacher: 'Kru OS' },
      { name: 'Math', teacher: 'Kru OS' },
    ];

    // Define the type for acc as a Record<string, number>
    const teacherStats = subjects.reduce<Record<string, number>>((acc, { teacher }) => {
      acc[teacher] = (acc[teacher] || 0) + 1;
      return acc;
    }, {});

    res.status(200).json(teacherStats);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
