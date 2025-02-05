import React from 'react';
import Footer from "./Footer";
import Navbar from './Navbar';
import { useNavigate } from "react-router-dom";
import screenshot from '../assets/Screenshot_28-6-2024_17928_vyasai.in.jpeg';

const Guide = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/login');
  };

  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <div className="text-white lg:px-36">
        <div className="container p-4">
          <h1 className="text-center text-4xl lg:text-6xl text-[rgb(0,223,154)] font-bold">The Vyas.AI Guide</h1>
          <p className="text-center text-lg lg:text-xl mt-2">Free, easy to use, and packed with features!</p>
          <div className="underline h-1 mt-2 mb-8 mx-auto w-40 border-t-2 border-[#00df9a]"></div>
          <br />
          <div className="row flex flex-col lg:flex-row items-center py-5">
            <div className="col-lg-6 text-center lg:text-left">
              <h2 className="text-2xl lg:text-4xl font-semibold">Android, Apple or Web-App</h2><br />
              <p className="text-base lg:text-lg mt-2">The Guide.AI app can be accessed through:</p><br />
              <ul className="text-base lg:text-lg list-disc list-inside mt-2">
                <li>Google Browser</li>
                <li>Apple Safari</li>
                <li>Web-App - No download required!</li>
              </ul><br />
              <p className="text-base lg:text-lg mt-2">All are free and so easy to use!</p>
              <div className="flex flex-col lg:flex-row gap-4">
                <button className="bg-[#00df9a] w-full lg:w-[200px] rounded-md font-medium my-6 py-3 text-black">Get the app</button>
                <button className="bg-[#00b5df] w-full lg:w-[200px] rounded-md font-medium my-6 py-3 text-black">Use the Web-App</button>
              </div>
            </div>
            <img src="https://i.redd.it/i2edhln6mbcc1.png" className="object-scale-down h-56 w-full lg:w-100 lg:pl-36" alt="Apps" />
          </div>

          <div className="row flex flex-col lg:flex-row items-center py-5 bg-white">
            <img src={screenshot} className="pl-5 h-1/2 w-full lg:w-1/2 rounded-2xl" alt="" />
            <div className="col-lg-9 order-1 lg:order-2 lg:pl-20 text-black text-center lg:text-left">
              <h2 className="text-xl font-semibold">Heading</h2>
              <p className="text-base lg:text-lg mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium enim culpa corporis minima quam mollitia tempore itaque provident alias repellat quae, quia tenetur non facere voluptate quibusdam. Omnis, vero adipisci?</p>
            </div>
          </div>

          <div className="row flex items-center py-2">
            <div className="flex gap-2 col-8 mx-auto justify-center">
              <button className="bg-[#00df9a] w-full lg:w-[200px] rounded-md font-medium my-6 py-3 text-black" onClick={handleGetStarted}>Login</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Guide;
