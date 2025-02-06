import React, { useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddBlog = () => {
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    name: '',
    title: '',
    summary: '',
    linkedin: '',
    content: '',
    date: '',
    image: '',
    gifUrl: ''
  });

  const handleChange = (e) => {
    setBlogData({
      ...blogData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://vyas-auth-default-rtdb.firebaseio.com/blogs.json', blogData)
      .then((response) => {
        console.log('Blog added:', response.data);
        navigate('/company/blog');
      })
      .catch((error) => {
        console.error('Error adding blog:', error);
      });
  };

  return (
    <div style={styles.container}>
      <Navbar />
      <div style={styles.header}>
        <div style={styles.headerText}>Add New Blog</div>
        <div style={styles.headerUnderline}></div>
      </div>
      <form style={styles.form} onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          value={blogData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
          InputLabelProps={{ style: styles.inputLabel }}
          InputProps={{ style: styles.input }}
          sx={styles.textField}
        />
        <TextField
          label="Title"
          name="title"
          value={blogData.title}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
          InputLabelProps={{ style: styles.inputLabel }}
          InputProps={{ style: styles.input }}
          sx={styles.textField}
        />
        <TextField
          label="Summary"
          name="summary"
          value={blogData.summary}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
          InputLabelProps={{ style: styles.inputLabel }}
          InputProps={{ style: styles.input }}
          sx={styles.textField}
        />
        <TextField
          label="LinkedIn Profile Link"
          name="linkedin"
          value={blogData.linkedin}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
          InputLabelProps={{ style: styles.inputLabel }}
          InputProps={{ style: styles.input }}
          sx={styles.textField}
        />
        <TextField
          label="Content"
          name="content"
          value={blogData.content}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows={6}
          required
          InputLabelProps={{ style: styles.inputLabel }}
          InputProps={{ style: styles.input }}
          sx={styles.textField}
        />
        <TextField
          // label="Date"
          name="date"
          value={blogData.date}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          type="date"
          InputLabelProps={{ style: { ...styles.inputLabel, shrink: true } }}
          InputProps={{ style: styles.input }}
          required
          sx={styles.textField}
        />
        <TextField
          label="Blog Image URL"
          name="image"
          value={blogData.image}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
          InputLabelProps={{ style: styles.inputLabel }}
          InputProps={{ style: styles.input }}
          sx={styles.textField}
        />
        <TextField
          label="GIF URL"
          name="gifUrl"
          value={blogData.gifUrl}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          required
          InputLabelProps={{ style: styles.inputLabel }}
          InputProps={{ style: styles.input }}
          sx={styles.textField}
        />
        <div style={styles.buttonContainer}>
          <Button type="submit" variant="contained" color="primary">
            Add Blog
          </Button>
        </div>
      </form>
      <Footer/>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#000000',
    color: '#ffffff',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  headerText: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  headerUnderline: {
    width: '60px',
    height: '4px',
    backgroundColor: 'white',
    margin: '0 auto',
  },
  form: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  inputLabel: {
    color: 'white',
  },
  input: {
    color: 'white',
    backgroundColor: '#333333',
  },
  textField: {
    '&.MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#666666',
      },
      '&:hover fieldset': {
        borderColor: '#ffffff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#ffffff',
      },
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
  },
};

export default AddBlog;