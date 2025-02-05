import React, { useEffect, useRef, useState } from "react";
import Navbar from '../Navbar';
import Footer from '../Footer';
import vanshikaPhoto from '../../assets/passport_vb.jpg'; // Adjust the path as necessary

const Blog2 = () => {
  const sectionsRef = useRef([]);
  const [activeSection, setActiveSection] = useState("");

  

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <div className="max-w-[1000px] mx-auto p-6">
        <div className="flex items-center">
          {/* Vanshika's Photo */}
          <div className="mr-8">
            <img src={vanshikaPhoto} alt="Vanshika Bakshi" className="w-42 h-42 shodow-lg rounded-full " />
            <p className="text-lg mt-4 text-center">Vanshika Bakshi</p>
          </div>

          {/* Heading and Divider */}
          <div className="text-center">
            <h2 className="text-6xl text-blue-400 font-extrabold mb-6">Exploring the Impact of Convolutional Neural Networks (CNNs)</h2>
            <hr className="mt-4 w-48 mx-auto border-t-4 border-blue-400" />
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
                <a href="#introduction" className={`block ${activeSection === "introduction" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
                  Introduction
                </a>
              </li>
              <li>
                <a href="#understanding-cnns" className={`block ${activeSection === "understanding-cnns" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
                  Understanding CNNs
                </a>
              </li>
              <li>
                <a href="#structure-cnns" className={`block ${activeSection === "structure-cnns" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
                  Structure of CNNs
                </a>
              </li>
              <li>
                <a href="#training-cnns" className={`block ${activeSection === "training-cnns" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
                  Training CNNs
                </a>
              </li>
              <li>
                <a href="#applications-cnns" className={`block ${activeSection === "applications-cnns" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
                  Applications of CNNs
                </a>
              </li>
              <li>
                <a href="#challenges-future" className={`block ${activeSection === "challenges-future" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
                  Challenges and Future Directions
                </a>
              </li>
              <li>
                <a href="#conclusion" className={`block ${activeSection === "conclusion" ? "text-blue-400 font-bold" : "text-gray-400"}`}>
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
              src="https://analyticsindiamag.com/wp-content/uploads/2018/01/nural-network-05.jpg"
              alt="Exploring CNNs"
            />
          </div>
          <div className="blog-content content mx-auto w-full bg-gray-800 p-8 rounded-lg shadow-lg">
            <div id="introduction" ref={(el) => sectionsRef.current[0] = el}>
              <h3 className="text-3xl font-bold mb-6">Introduction</h3>
              <p className="mb-6">
                In the world of machine learning, Convolutional Neural Networks (CNNs) have become a revolutionary tool, especially in the area of computer vision. From facial recognition to self-driving cars, CNNs have fundamentally changed how machines perceive and interpret visual data. This blog delves into the basics of CNNs, their structure, and their uses.
              </p>
            </div>
            <div id="understanding-cnns" ref={(el) => sectionsRef.current[1] = el}>
              <h4 className="text-2xl font-semibold mb-4">Understanding Convolutional Neural Networks</h4>
              <p className="mb-4">Convolutional Neural Networks (CNNs) are a type of deep learning algorithm specifically designed for handling structured grid data, like images. Unlike traditional neural networks, CNNs can automatically learn spatial hierarchies of features from input images.</p>
            </div>
            <div id="structure-cnns" ref={(el) => sectionsRef.current[2] = el}>
              <h4 className="text-2xl font-semibold mb-4">Structure of CNNs</h4>
              <div className="flex justify-center items-center feature-image mx-auto mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="https://www.researchgate.net/publication/338199242/figure/fig1/AS:840889396113413@1577495063054/Basic-structure-of-a-CNN.jpg"
                  alt="Structure of CNNs"
                />
              </div>
              <p className="mb-4">The architecture of a CNN consists of several types of layers, each with a specific function:</p>
              <ul className="list-disc list-inside mb-6">
                <li><strong>Convolutional Layer</strong>: This layer is the main building block of a CNN. It uses a set of filters (kernels) to scan the input image, creating feature maps. These filters move over the image, performing element-wise multiplications and summing the results, which helps in detecting features like edges, textures, and patterns.</li>
                <li><strong>Activation Function (ReLU)</strong>: Following convolution, the Rectified Linear Unit (ReLU) is applied to add non-linearity to the model. ReLU sets all negative pixel values in the feature map to zero, which speeds up the model's convergence.</li>
                <li><strong>Pooling Layer</strong>: This layer reduces the spatial dimensions of the feature maps, preserving essential information while reducing computational complexity. Max pooling, which selects the highest value from each patch of the feature map, is commonly used.</li>
                <li><strong>Fully Connected Layer</strong>: After several convolutional and pooling layers, the fully connected layer (or dense layer) is used for final classifications. It connects every neuron in one layer to every neuron in the next, combining the features learned in the previous layers to predict the output.</li>
              </ul>
            </div>
            <div id="training-cnns" ref={(el) => sectionsRef.current[3] = el}>
              <h4 className="text-2xl font-semibold mb-4">Training CNNs</h4>
              <div className="flex justify-center items-center feature-image mx-auto mb-6 bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <img
                  className="w-full"
                  src="https://miro.medium.com/max/1034/1*XbuW8WuRrAY5pC4t-9DZAQ.jpeg"
                  alt="Training CNNs"
                />
              </div>
              <p className="mb-4">Training CNNs involves feeding labeled data into the network, adjusting weights and biases during backpropagation to minimize the difference between predicted and actual outputs. Techniques like transfer learning and data augmentation are often used to improve model performance.</p>
            </div>
            <div id="applications-cnns" ref={(el) => sectionsRef.current[4] = el}>
              <h4 className="text-2xl font-semibold mb-4">Applications of CNNs</h4>
              <img
                  className="w-full"
                  src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BIpRgx5FsEMhr1k2EqBKFg.gif"
                  alt="Application of CNNs"
                />
              <p className="mb-4">CNNs have a wide range of applications across various industries:</p>
              <ul className="list-disc list-inside mb-6">
                <li><strong>Image Recognition</strong>: Identifying objects, faces, and scenes in images.</li>
                <li><strong>Medical Imaging</strong>: Diagnosing diseases from medical scans like X-rays and MRIs.</li>
                <li><strong>Autonomous Vehicles</strong>: Analyzing surroundings for navigation and hazard detection.</li>
                <li><strong>Natural Language Processing (NLP)</strong>: Processing text and sentiment analysis.</li>
                <li><strong>Video Analysis</strong>: Understanding and classifying video content.</li>
              </ul>
            </div>
            <div id="challenges-future" ref={(el) => sectionsRef.current[5] = el}>
              <h4 className="text-2xl font-semibold mb-4">Challenges and Future Directions</h4>
              <p className="mb-4">Despite their successes, CNNs face challenges such as interpretability, scalability, and biases in training data. Future research is focused on improving model efficiency, handling larger datasets, and developing more transparent AI systems.</p>
            </div>
            <div id="conclusion" ref={(el) => sectionsRef.current[6] = el}>
              <h3 className="text-3xl font-bold mb-6">Conclusion</h3>
              <p className="mb-4">Convolutional Neural Networks (CNNs) have revolutionized machine learning by enabling computers to interpret visual data with remarkable accuracy. As we continue to advance in AI and deep learning, CNNs will play a crucial role in shaping the future of technology across various domains.</p>
              <a href="/company/blog3" className="flex items-center text-green-400 hover:text-green-600 font-semibold">
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
};

export default Blog2;
