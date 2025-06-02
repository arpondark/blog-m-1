import { NextResponse, NextRequest } from 'next/server';
import connectDB from '@/utils/db';
import Post from '@/model/Post';

export const GET = async () => {
    try {
        console.log('Attempting to connect to database...');
        await connectDB();
        console.log('Database connected successfully!');
        
        const posts = await Post.find().sort({ createdAt: -1 });
        
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        console.error('Database connection or query failed:', error);
        return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
    }
}

export const POST = async (request: NextRequest) => {
    try {
        await connectDB();
        
        const body = await request.json();
        const { title, desc, img, content, username } = body;
        
        if (!username) {
            return NextResponse.json({ error: 'Username is required' }, { status: 400 });
        }
        
        const newPost = new Post({
            title,
            desc,
            img,
            content,
            username
        });
        
        await newPost.save();
        
        return NextResponse.json(newPost, { status: 201 });
    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
    }
}