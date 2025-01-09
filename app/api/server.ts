import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const currentDateTime = new Date().toISOString();
  res.status(200).json({ serverTime: currentDateTime });
}