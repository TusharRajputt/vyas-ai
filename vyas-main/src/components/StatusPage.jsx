import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
const StatusPage = () => {
  return (
    <div>
      <Navbar />
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-900 mb-4">All Systems Operational</h1>
        <a href="/history" className="text-blue-600 hover:underline">Incident History</a>
        <div className="mt-6">
          <div className="bg-green-500 text-white font-semibold p-3 rounded">
            <p>Service Status: Operational</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default StatusPage;
