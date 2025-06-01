import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Post {
  id: string;
  title: string;
  desc: string;
  img: string;
  content: string;
  username: string;
}

interface PageParams {
  id: string;
}

async function getData(id: string): Promise<Post> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound()
  }

  const post = await res.json();
  
  // If the post is null or undefined, redirect to 404
  if (!post) {
    return notFound()
  }
  
  return post;
}


export async function generateMetadata({ params }: { params: Promise<PageParams> }) {
  const resolvedParams = await params;
  const post = await getData(resolvedParams.id)
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }: { params: Promise<PageParams> }) => {
  const resolvedParams = await params;
  const data = await getData(resolvedParams.id);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-6 leading-tight">{data.title}</h1>
        <div className="flex items-center gap-4 text-gray-500 mb-6">
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            <span>Author</span>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[400px] mb-10 rounded-xl overflow-hidden">
        <Image
          src={data.img}
          alt={data.title}
          fill
          sizes="(max-width: 768px) 100vw, 800px"
          priority
          className="object-cover"
        />
      </div>

      <div className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: data.desc }} />
      </div>
    </div>
  );
};

export default BlogPost;
