// src/components/BlogSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import floral from '../../assets/images/icons/floral.png';
import blog1 from '../../assets/images/posts/home-1.jpg';
import blog2 from '../../assets/images/posts/home-2.jpg';
import blog3 from '../../assets/images/posts/home-3.jpg';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: 'Buttery Toast',
      date: 'March 31, 2018',
      author: 'Anil Thakor',
      excerpt: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further…',
      image: blog1,
    },
    {
      id: 2,
      title: 'Pumpkin Buns with Salted',
      date: 'March 31, 2018',
      author: 'Anil Thakor',
      excerpt: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further…',
      image: blog2,
    },
    {
      id: 3,
      title: 'Tartine Style Bread',
      date: 'March 31, 2018',
      author: 'Anil Thakor',
      excerpt: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further…',
      image:blog3,
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-gray-800">Our History</h3>
          <p className="text-gray-600 uppercase tracking-wide mt-2">Live with Passion</p>
          <span className="inline-block mt-4">
            <img
              src={floral} // Replace with your floral.png
              alt="Floral Icon"
              className="w-19 h-8 mx-auto"
            />
          </span>
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Post Thumbnail */}
              <div className="relative group">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-70 object-cover transition-all rounded-lg duration-800 hover:bg-yellow-500 hover:opacity-20 group-hover:scale-95"
                />
                <Link
                  to="/blog-detail"
                  className="absolute inset-0 bg-opacity-0 hover:bg-yellow-500 hover:opacity-20 "
                />
              </div>

              {/* Post Content */}
              <div className="p-6">
                <span className="text-sm text-gray-500 block mb-2">{post.date}</span>
                <Link to="/blog-detail" className="text-xl font-semibold text-gray-800 hover:text-yellow-600">
                  {post.title}
                </Link>
                <span className="block text-sm text-gray-600 mt-1">
                  By <Link to="#" className="hover:text-yellow-600">{post.author}</Link>
                </span>
                <p className="text-gray-600 mt-2">{post.excerpt}</p>
                <Link
                  to="/blog-detail"
                  className="inline-block mt-4 text-yellow-600 hover:text-yellow-700 font-medium"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;