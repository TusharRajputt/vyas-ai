import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import backgroundVideo from "../../assets/aboutbg.mp4"; // Updated path

const About = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video and Overlay */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div> {/* Optional overlay for better text visibility */}
      </div>

      {/* Navbar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Main Content */}
      <div className="relative z-20 max-w-[1000px] mx-auto p-4 mt-16">
        <div className="text-center">
          <h2 className="text-5xl text-[rgb(0,223,154)] font-bold mb-4">Our Mission - Empowering with MLaaS</h2>
          <hr className="mt-2 w-40 mx-auto border-t-2 border-[#00df9a]" />
        </div>
        <p className="text-2xl mb-6 text-white">
          Vyas.AI is a cutting-edge platform that offers Machine Learning-as-a-Service (MLaaS), empowering businesses and researchers to harness the power of machine learning without the overhead of infrastructure management. Our platform not only facilitates the execution of research-level projects but also provides comprehensive training solutions tailored to your specific needs.
          <br/><br/>
                               Features:
          <ul className="list-disc pl-6">
            <li>MLaaS: Access state-of-the-art machine learning algorithms and models through our easy-to-use API.</li>
            <li>Research Projects: Take your research projects to completion with our platform's robust infrastructure and support.</li>
            <li>Custom Training: Tailor-made training solutions designed to address your unique business challenges.</li>
            <li>Scalability: Seamlessly scale your machine learning tasks to match your evolving requirements.</li>
            <li>Security: Trust in our secure platform infrastructure to safeguard your data and models.</li>
          </ul>
          <br/>
          After building our own applications, we learned firsthand how tedious it can be to train and deploy a computer vision model. We found ourselves writing excess code to format our data. It was difficult to collaborate, and benchmarking machine learning tools was a lot of work.
          <br/><br/>
          That’s why we launched Vyas.AI in January 2023. We believe every developer should have computer vision available in their toolkit. Our mission is to remove any barriers that might prevent them from succeeding.
        </p>
      </div>

      {/* Footer */}
      <div className="relative z-20">
        <Footer />
      </div>
    </div>
  );
};

export default About;
