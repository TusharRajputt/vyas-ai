import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const ModelDecisionTree = () => {
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
                  <button onClick={() => handleSectionClick('types')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'types' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Types of Decision Trees</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('construction')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'construction' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Construction of Decision Trees</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('advantages')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'advantages' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Advantages</button>
                </li>
                {/* New section */}
                <li>
                  <h2 className="text-xl font-bold text-white uppercase px-4 pt-4">Training Options</h2>
                  <ul className="ml-2 space-y-2">
                    <li>
                      <a href="https://colab.research.google.com/drive/1W4HE5Yd-rqT86CJdK_xBz5232y6KxuCx#scrollTo=vnCYNCfZttt4?authuser=0" target="_blank" rel="noopener noreferrer" className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15">Train on Colab</a>
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
              Understanding Decision Trees
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
                    src="https://www.youtube.com/embed/_L39rN6gz7Y?feature=shared" 
                    title="Decision Trees Overview Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="square-video"
                  ></iframe>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Decision Trees are a popular machine learning algorithm used for classification and regression tasks. They create models that predict the value of a target variable by learning simple decision rules inferred from the data features.
              </p>
            </section>

            {/* Types of Decision Trees Section */}
            <section id="types" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'types' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://thoughts-on-coding.com/img/remote/Z1fFLCA.jpg" alt="Types Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">Types of Decision Trees</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Decision Trees can vary based on the type of target variable they handle and how they make decisions:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Classification Trees: Used when the target variable is categorical, classifying data into classes or categories.</li>
                <li>Regression Trees: Used when the target variable is continuous, predicting numerical values.</li>
                <li>Decision Trees can also be distinguished based on the algorithm used, such as CART (Classification and Regression Trees), ID3, C4.5, etc.</li>
              </ul>
            </section>

            {/* Construction of Decision Trees Section */}
            <section id="construction" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'construction' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://th.bing.com/th/id/OIP.6neLLzSl8xxntX9xKYdAJwHaHw?rs=1&pid=ImgDetMain" alt="Construction Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Construction of Decision Trees</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Decision Trees are constructed recursively by splitting the dataset into subsets based on the value of a chosen feature. The splits continue until a stopping criterion is met, such as a maximum depth, minimum number of samples per leaf, or no further improvement in purity measures like Gini impurity or entropy.
              </p>
            </section>

            {/* Advantages of Decision Trees Section */}
            <section id="advantages" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'advantages' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://img.icons8.com/?size=100&id=fuVH5gdie8Za&format=png&color=000000" alt="Advantages Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Advantages of Decision Trees</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Decision Trees offer several advantages in machine learning applications:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Easy to interpret and visualize.</li>
                <li>Handle both numerical and categorical data.</li>
                <li>Implicitly perform feature selection.</li>
                <li>Non-parametric approach suitable for nonlinear relationships.</li>
                <li>Robust to outliers and missing values (to some extent).</li>
              </ul>
            </section>
          </div>
        </main>
      </div>

      <Footer className="bg-black text-white" /> {/* Include the Footer component */}
    </div>
  );
};

export default ModelDecisionTree;
