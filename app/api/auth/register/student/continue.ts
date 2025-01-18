import { NextRequest, NextResponse } from 'next/server';
import  db  from '../../../../../lib/db';

export async function POST(req: NextRequest) {
    const { email, additional_info } = await req.json();

    if (!email || !additional_info) {
        return NextResponse.json({ error: 'Email and additional info are required' }, { status: 400 });
    }

    try {
        const [result] = await db.execute(
            'UPDATE users SET additional_info = ? WHERE email = ? AND role = "student"',
            [JSON.stringify(additional_info), email]
        );
        if (result.affectedRows === 0) {
            return NextResponse.json({ error: 'No matching user found' }, { status: 404 });
        }
        return NextResponse.json({ message: 'Student registration completed' });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
    }
}
