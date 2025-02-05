import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

export const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blogs from Firebase
    axios.get('https://vyas-auth-default-rtdb.firebaseio.com/blogs.json')
      .then((response) => {
        const fetchedBlogs = [];
        for (let key in response.data) {
          fetchedBlogs.push({
            id: key,
            ...response.data[key]
          });
        }
        setBlogs(fetchedBlogs);
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  const handleSelect = (blogId) => {
    navigate(`/company/${blogId}`);
    window.scrollTo(0, 0);
  };

  const handleAddBlog = () => {
    navigate('/company/add');
  };

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <div className="header text-center my-8">
        <div className="text text-3xl font-bold">Blogs</div>
        <div className="underline w-16 h-1 mx-auto my-2 bg-black"></div>
        <Button variant="contained" color="primary" onClick={handleAddBlog}>
          Add New Blog
        </Button>
      </div>
      <div className="card-container grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <Card key={blog.id} className="rounded-xl shadow-lg overflow-hidden">
            <CardMedia component="img" height="200" image={blog.gifUrl} alt="GIF" />
            <CardContent className="pt-4 pb-2">
              <Typography gutterBottom variant="h5" component="div" className="font-bold">
                {blog.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <a href={`https://www.${blog.linkedin}`} target="_blank" rel="noopener noreferrer">
                  {blog.name}
                </a>
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {blog.date}
              </Typography>
              <Typography gutterBottom variant="h6" component="div" className="font-bold">
                {blog.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {blog.summary}
              </Typography>
            </CardContent>
            <CardActions className="justify-between px-4 pb-4">
              <Button variant="contained" color="primary" onClick={() => handleSelect(blog.id)}>
                Read More
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;