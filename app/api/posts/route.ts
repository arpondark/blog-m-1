import { NextResponse } from 'next/server';
import connectDB from '@/utils/db';
import Post from '@/model/Post';

export const GET = async () => {
    try {
        console.log('Attempting to connect to database...');
        await connectDB();
        console.log('Database connected successfully!');
        
        const posts = await Post.find();
        
        return NextResponse.json({ posts }, { status: 200 });
    } catch (error) {
        console.error('Database connection or query failed:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}