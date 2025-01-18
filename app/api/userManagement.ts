import { NextApiRequest, NextApiResponse } from 'next';

interface User {
  id: number;
  name: string;
  email: string;
  
  college: string;

  department: string;

}

let users: User[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    const { id, name, email, college, department } = req.body;
    if (!id || !name || !email || !college || !department) {
      return res.status(400).json({ error: 'All fields are required' });
    }
    const newUser: User = { id, name, email, college, department };
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
