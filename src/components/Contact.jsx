import React, { useState } from 'react';
import Footer from "./Footer";
import Navbar from "./Navbar";
import contactPhoto from '../assets/Contact.jpg';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone' && (isNaN(value) || value.length > 10)) {
      return;
    }
    setFormData({
     ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_e5suxzn', 'template_aabwdph', formData, 'bw44SJOplmkAq90G4')
     .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Email sent successfully! We will contact you shortly');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <Navbar />
      <div className="max-w-[1000px] mx-auto p-6">
        <h2 className="text-5xl text-[rgb(0,223,154)] font-bold mb-4 text-center">
          Have Questions? Contact Us
        </h2>
        <p className="mb-6 text-white text-center">
          Vyas.AI provides a robust platform upon which you can train models. We're happy to chat about how we can assist you. Fill out the form below, and we’ll be in touch as soon as possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border-white border-2 rounded-md p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[rgb(0,223,154)]">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] sm:text-sm text-black bg-gray-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[rgb(0,223,154)]">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] sm:text-sm text-black bg-gray-300"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[rgb(0,223,154)]">
                  Phone*
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength="10"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] sm:text-sm text-black bg-gray-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[rgb(0,223,154)]">
                  Message*
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#00df9a] focus:border-[#00df9a] sm:text-sm text-black bg-gray-300"
                ></textarea>
              </div>
              <br />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-50 inline-flex justify-center py-2 px-4border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#00df9a] hover:bg-[#00c982] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00df9a]"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={contactPhoto}
              alt="Contact"
              className="w-full h-full object-cover rounded-md border-2 border-white"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;