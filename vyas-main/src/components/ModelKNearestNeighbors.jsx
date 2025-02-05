import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const ModelKNearestNeighbors = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const handleSectionClick = (sectionId) => {
    setActiveSection(sectionId);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      <Navbar /> {/* Include the Navbar component */}

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-1/4 bg-black border-r border-white">
          <div className="h-full flex flex-col justify-start">
            {/* Table of Contents Heading */}
            <h2 className="text-2xl font-bold text-white uppercase px-4 pt-4">Table of Contents</h2>

            {/* Navigation Links */}
            <nav className="text-left">
              <ul className="space-y-4">
                <li>
                  <button onClick={() => handleSectionClick('overview')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'overview' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Overview</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('types')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'types' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Types of k-Nearest Neighbors (KNN)</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('distance')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'distance' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Distance Metrics</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('applications')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'applications' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Applications</button>
                </li>
                {/* New section */}
                <li>
                  <h2 className="text-xl font-bold text-white uppercase px-4 pt-4">Training Options</h2>
                  <ul className="ml-2 space-y-2">
                    <li>
                      <a href="https://colab.research.google.com/drive/1lSNa0XI6_I56IkdvmfjszNwIdk1rKUEn#scrollTo=1Z5sBAqwPk1q?authuser=0" target="_blank" rel="noopener noreferrer" className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15">Train on Colab</a>
                    </li>
                    <li>
                      <a href="https://www.kaggle.com/" target="_blank" rel="noopener noreferrer" className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15">Train on Kaggle</a>
                    </li>
                    <li>
                      <a href="https://aws.amazon.com/sagemaker/" target="_blank" rel="noopener noreferrer" className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15">Train on SageMaker</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <div className="max-w-4xl mx-auto py-12">
            <h1 className="text-5xl font-bold text-green-500 mb-8 flex items-center gap-4">
              Understanding k-Nearest Neighbors (KNN)
            </h1>

            {/* Overview Section */}
            <section id="overview" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'overview' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://th.bing.com/th/id/OIP.KZ5sgbcp-y2f1KTzQWK6aAAAAA?rs=1&pid=ImgDetMain" alt="Overview Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">Overview</div>
              </div>
              <div className="flex items-center justify-center mb-8">
                <div className="square-video-container overflow-hidden">
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://youtube.com/embed/HVXime0nQeI?feature=shared" 
                    title="KNN Overview Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="square-video"
                  ></iframe>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                k-Nearest Neighbors (KNN) is a simple, instance-based learning algorithm used for classification and regression tasks. It predicts the label of a data point by considering the majority label of its k nearest neighbors in the training dataset.
              </p>
            </section>

            {/* Types of KNN Section */}
            <section id="types" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'types' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://thoughts-on-coding.com/img/remote/Z1fFLCA.jpg" alt="Types Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">Types of k-Nearest Neighbors (KNN)</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                k-Nearest Neighbors can vary based on different factors such as the value of k and the distance metric used:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Uniform Weighting: All nearest neighbors contribute equally to the prediction.</li>
                <li>Distance Weighting: Closer neighbors have more influence than farther ones.</li>
                <li>Variable k: Adaptively choosing k based on the local density of points.</li>
              </ul>
            </section>

            {/* Distance Metrics Section */}
            <section id="distance" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'distance' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://th.bing.com/th/id/OIP.6neLLzSl8xxntX9xKYdAJwHaHw?rs=1&pid=ImgDetMain" alt="Distance Metrics Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Distance Metrics in KNN</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                The choice of distance metric affects how k-Nearest Neighbors computes the distance between points:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Euclidean Distance: Straight-line distance between two points.</li>
                <li>Manhattan Distance: Sum of absolute differences between coordinates.</li>
                <li>Cosine Similarity: Measures the cosine of the angle between two vectors.</li>
              </ul>
            </section>

            {/* Applications of KNN Section */}
            <section id="applications" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'applications' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://img.icons8.com/?size=100&id=fuVH5gdie8Za&format=png&color=000000" alt="Applications Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Applications of KNN</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                k-Nearest Neighbors finds applications in various domains due to its simplicity and effectiveness:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Recommendation systems and collaborative filtering.</li>
                <li>Anomaly detection and fraud detection.</li>
                <li>Pattern recognition and image recognition.</li>
                <li>Medical diagnosis and gene expression analysis.</li>
              </ul>
            </section>
          </div>
        </main>
      </div>

      <Footer className="bg-black text-white" /> {/* Include the Footer component */}
    </div>
  );
};

export default ModelKNearestNeighbors;
