import { NextResponse, NextRequest } from 'next/server';
import connectDB from '@/utils/db';
import Post from '@/model/Post';

export const GET = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
  
    try {
      await connectDB();
  
      const post = await Post.findById(id);
  
      return new NextResponse(JSON.stringify(post), { status: 200 });
    } catch (error) {
      console.error("Error fetching post:", error);
      return new NextResponse("Database Error", { status: 500 });
    }
};

export const PUT = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    
    try {
        await connectDB();
        
        const body = await request.json();
        const { title, desc, img, content } = body;
        
        const updatedPost = await Post.findByIdAndUpdate(
            id,
            { title, desc, img, content },
            { new: true }
        );
        
        if (!updatedPost) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
        
        return NextResponse.json(updatedPost, { status: 200 });
    } catch (error) {
        console.error('Error updating post:', error);
        return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
    }
};

export const DELETE = async (request: NextRequest, { params }: { params: { id: string } }) => {
    const { id } = params;
    
    try {
        await connectDB();
        
        const deletedPost = await Post.findByIdAndDelete(id);
        
        if (!deletedPost) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }
        
        return NextResponse.json({ message: 'Post deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting post:', error);
        return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
    }
};