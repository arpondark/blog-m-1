import React from "react";
import Link from "next/link";
import Image from "next/image";

type Post = {
  _id: string;
  id: string;
  img: string;
  title: string;
  desc: string;
};

async function getData(): Promise<Post[]> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
  
  try {
    const res = await fetch(`${apiUrl}/posts`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error('API response not ok:', res.status, res.statusText);
      throw new Error(`Failed to fetch data: ${res.status}`);
    }

    const response = await res.json();
    console.log('API response:', response);
    
    // Ensure we return an array
    if (response && response.posts && Array.isArray(response.posts)) {
      return response.posts;
    } else if (Array.isArray(response)) {
      return response;
    } else {
      console.error('Unexpected response format:', response);
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

const Blog = async () => {
  const data = await getData();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Latest Blog Posts
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover insights, tutorials, and stories from our community
          </p>
          <div className="mt-8 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:gap-10">
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <Link
                href={`/blog/${item._id}`}
                key={item._id}
                className="group block"
              >
                <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600">
                  <div className="flex flex-col lg:flex-row">
                    {/* Image Section */}
                    <div className="lg:w-2/5 h-64 lg:h-80 relative overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        priority={index < 2}
                      />
                      {/* Overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      
                      {/* Featured badge for first post */}
                      {index === 0 && (
                        <div className="absolute top-4 left-4">
                          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold bg-blue-500 text-white rounded-full shadow-lg">
                            ✨ Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-3/5 p-8 lg:p-10 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                            </svg>
                            <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                            </svg>
                            <span>Admin</span>
                          </div>
                        </div>

                        <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 line-clamp-2">
                          {item.title}
                        </h2>
                        
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed line-clamp-3 mb-6">
                          {item.desc}
                        </p>
                      </div>

                      {/* Read More Button */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-200">
                          <span>Read full article</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                        
                        {/* Reading time estimate */}
                        <div className="text-sm text-gray-400 dark:text-gray-500">
                          5 min read
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  No blog posts yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Check back soon for new content and exciting updates!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
