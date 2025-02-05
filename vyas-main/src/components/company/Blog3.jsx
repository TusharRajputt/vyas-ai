import React, { useEffect, useRef, useState } from "react";
import Navbar from '../Navbar';
import Footer from '../Footer';

const Blog3 = () => {
  const sectionsRef = useRef([]);
  const [activeSection, setActiveSection] = useState("");

 
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-[1000px] mx-auto p-6">
        <div className="text-center">
          <h2 className="text-6xl text-green-400 font-extrabold mb-6">AI in Home Robots: Enhancing Everyday Life</h2>
          <hr className="mt-4 w-48 mx-auto border-t-4 border-green-400" />
        </div>
      </div>
      <div className="container mx-auto mb-20 px-6 flex">
        {/* Table of Contents */}
        <div className="w-1/4 sticky top-20 self-start hidden lg:block">
          <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Contents</h3>
            <ul className="space-y-2">
              <li>
                <a href="#introduction" className={`block ${activeSection === "introduction" ? "text-green-400 font-bold" : "text-gray-400"}`}>
                  Introduction
                </a>
              </li>
              <li>
                <a href="#evolution-of-home-robots" className={`block ${activeSection === "evolution-of-home-robots" ? "text-green-400 font-bold" : "text-gray-400"}`}>
                  The Evolution of Home Robots
                </a>
              </li>
              <li>
                <a href="#key-capabilities" className={`block ${activeSection === "key-capabilities" ? "text-green-400 font-bold" : "text-gray-400"}`}>
                  Key Capabilities
                </a>
              </li>
              <li>
                <a href="#future-of-ai-in-home-robotics" className={`block ${activeSection === "future-of-ai-in-home-robotics" ? "text-green-400 font-bold" : "text-gray-400"}`}>
                  The Future of AI in Home Robotics
                </a>
              </li>
              <li>
                <a href="#conclusion" className={`block ${activeSection === "conclusion" ? "text-green-400 font-bold" : "text-gray-400"}`}>
                  Conclusion
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Blog Content */}
        <div className="w-full lg:w-3/4 lg:pl-12">
          <div className="flex justify-center items-center feature-image mx-auto mb-12 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://th.bing.com/th/id/OIP.tQBD-fuKEy3f7MKOUH-9zAAAAA?rs=1&pid=ImgDetMain"
              alt="AI in Home Robots"
            />
          </div>
          <div className="blog-content content mx-auto w-full bg-gray-800 p-8 rounded-lg shadow-lg">
            <div id="introduction" ref={(el) => sectionsRef.current[0] = el}>
              <h3 className="text-3xl font-bold mb-6">Introduction</h3>
              <p className="mb-6">
                Artificial Intelligence (AI) is revolutionizing our interaction with technology, and home robots are leading this transformation. From maintaining cleanliness to bolstering security, AI-powered robots are seamlessly integrating into our daily routines. This article delves into their advancements, capabilities, and the exciting future of AI in home robotics.
              </p>
            </div>
            <div id="evolution-of-home-robots" ref={(el) => sectionsRef.current[1] = el}>
              <h3 className="text-3xl font-bold mb-6">The Evolution of Home Robots</h3>
              <p className="mb-6">
                The journey of home robots began with humble beginnings, such as early vacuum cleaners like the Roomba, which used basic algorithms for navigation and cleaning. Today, these machines have evolved into sophisticated devices equipped with advanced AI, capable of performing diverse tasks with exceptional efficiency and precision.
              </p>
            </div>
            <div id="key-capabilities" ref={(el) => sectionsRef.current[2] = el}>
              <h3 className="text-3xl font-bold mb-6">Key Capabilities</h3>
              <ol className="list-decimal list-inside mb-6">
                <li className="mb-4">
                  <h4 className="text-xl font-semibold mb-2">Cleaning and Maintenance</h4>
                  <p className="mb-2">
                    Modern home robots excel at cleaning floors, windows, and even pools. They leverage AI to map rooms, navigate obstacles, and optimize cleaning routes. Some models can autonomously empty their dustbins and recharge, enhancing convenience.
                  </p>
                </li>
                <li className="mb-4">
                  <h4 className="text-xl font-semibold mb-2">Security and Surveillance</h4>
                  <p className="mb-2">
                    AI-powered home robots play a crucial role in enhancing home security. They monitor for unusual activities, recognize faces, and alert homeowners to potential threats. Advanced image and sound recognition capabilities distinguish between normal and suspicious events.
                  </p>
                </li>
                <li className="mb-4">
                  <h4 className="text-xl font-semibold mb-2">Personal Assistance</h4>
                  <p className="mb-2">
                    These robots function as reliable personal assistants, managing schedules, issuing reminders, and controlling smart home devices. They are designed to respond to voice commands, making interactions intuitive and user-friendly.
                  </p>
                </li>
                <li className="mb-4">
                  <h4 className="text-xl font-semibold mb-2">Elderly Care and Assistance</h4>
                  <p className="mb-2">
                    AI in home robots significantly benefits elderly individuals and those with disabilities. They provide invaluable assistance with daily tasks, offer companionship, and monitor health conditions, promoting independence and a higher quality of life.
                  </p>
                </li>
              </ol>
            </div>
            <div id="future-of-ai-in-home-robotics" ref={(el) => sectionsRef.current[3] = el}>
              <h3 className="text-3xl font-bold mb-6">The Future of AI in Home Robotics</h3>
              <p className="mb-6">
                The future of AI in home robotics holds immense promise, with ongoing advancements anticipated in the coming years. Enhanced interconnectivity, advanced learning capabilities, improved mobility and functionality, and emotional intelligence are key areas of development.
              </p>
            </div>
            <div id="conclusion" ref={(el) => sectionsRef.current[4] = el}>
              <h3 className="text-3xl font-bold mb-6">Conclusion</h3>
              <p className="mb-6">
                AI-powered home robots are reshaping our homes, enhancing convenience, safety, and efficiency. As technology continues to evolve, these robots will play increasingly integral roles in our lives. The future of AI in home robotics promises a new era of personalized assistance and seamless integration into our everyday routines, ensuring smarter and more connected homes for everyone.
              </p>
              <a href="/company/blog4" className="flex items-center text-green-400 hover:text-green-600 font-semibold">
                Read Next Article
                <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Blog3;
