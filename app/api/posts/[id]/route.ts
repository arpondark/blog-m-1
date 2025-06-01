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