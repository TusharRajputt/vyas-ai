import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const BlogDetails = () => {
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch blog details from Firebase
    axios.get(`https://vyas-auth-default-rtdb.firebaseio.com/blogs/${blogId}.json`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((error) => {
        console.error('Error fetching blog details:', error);
      });
  }, [blogId]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-[1000px] mx-auto p-6">
        <div className="flex items-center">
         

          {/* Heading and Divider */}
          <div className="text-center">
            <h2 className="text-6xl text-green-400 font-extrabold mb-6">{blog.title}</h2>
            <hr className="mt-4 w-48 mx-auto border-t-4 border-green-400" />
          </div>
        </div>
      </div>
      <div className="container mx-auto mb-20 px-6 flex">
        {/* Table of Contents */}
        <div className="w-1/4 sticky top-20 self-start hidden lg:block">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Contents</h3>
            <ul className="space-y-2">
              <li>
                <a href={`#${blog.title}`} className="block text-gray-400">
                  {blog.title}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Blog Content */}
        <div className="w-full lg:w-3/4 lg:pl-12">
          <div className="flex justify-center items-center feature-image mx-auto mb-12 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <CardMedia component="img" height="200" image={blog.image} alt="GIF" className="w-full rounded-xl shadow-lg mb-8" />
          </div>
          <div className="blog-content content mx-auto w-full bg-gray-800 p-8 rounded-lg shadow-lg">
            <div id={blog.title} ref={(el) => el}>
              <Typography variant="h3" component="div" className="font-bold mb-6">{blog.title}</Typography>
              <Typography variant="body1" component="div" className="mb-6">{blog.content}</Typography>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;