import { NextApiRequest, NextApiResponse } from 'next';

let subjects = [
  { id: 1, name: 'Network', teacher: 'kru na kor bn' },
  { id: 2, name: 'Operating system', teacher: 'Kru OS' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(subjects);
  } else if (req.method === 'POST') {
    const { name, teacher } = req.body;
    const newSubject = { id: subjects.length + 1, name, teacher };
    subjects.push(newSubject);
    res.status(201).json(newSubject);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
