import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const LogisticRegressionPage = () => {
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
                  <button onClick={() => handleSectionClick('types')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'types' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Types of Logistic Regression</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('difference')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'difference' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Difference Between Linear and Logistic Regression</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('applications')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'applications' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Applications</button>
                </li>
                {/* New section */}
                <li>
                  <h2 className="text-xl font-bold text-white uppercase px-4 pt-4">Training Options</h2>
                  <ul className="ml-2 space-y-2">
                    <li>
                      <a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer" className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15">Train on Collab</a>
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
            <h1 className="text-5xl font-bold text-green-500 mb-8">Understanding Logistic Regression</h1>

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
                    src="https://www.youtube.com/embed/yIYKR4sgzI8?feature=shared" 
                    title="Logistic Regression Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="square-video"
                  ></iframe>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Logistic Regression is a statistical model that uses a logistic function to model a binary dependent variable. It estimates the probability of an event occurring based on one or more predictor variables (features).
              </p>
            </section>

            {/* Types of Logistic Regression Section */}
            <section id="types" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'types' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://thoughts-on-coding.com/img/remote/Z1fFLCA.jpg" alt="Types Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">Types of Logistic Regression</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Logistic Regression can be categorized into different types based on the nature of the dependent variable and the number of predictor variables:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Binary Logistic Regression: Used when the dependent variable has only two possible outcomes.</li>
                <li>Multinomial Logistic Regression: Used when the dependent variable has more than two discrete outcomes.</li>
                <li>Ordinal Logistic Regression: Used when the dependent variable is ordered categorical.</li>
              </ul>
            </section>

            {/* Difference Between Linear and Logistic Regression Section */}
            <section id="difference" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'difference' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
              <img src="https://th.bing.com/th/id/OIP.6neLLzSl8xxntX9xKYdAJwHaHw?rs=1&pid=ImgDetMain" alt="Difference Icon" className="h-12 w-12" />
              <div className="font-semibold text-4xl">Difference Between Linear and Logistic Regression</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                While both linear and logistic regression are used to model relationships between variables, they differ in several key aspects:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Linear Regression predicts continuous numerical values, while Logistic Regression predicts the probability of a binary outcome.</li>
                <li>Linear Regression uses a linear equation, whereas Logistic Regression uses the logistic function to model probabilities.</li>
                <li>Linear Regression assumes a linear relationship between the dependent and independent variables, while Logistic Regression does not make this assumption.</li>
              </ul>
            </section>

            {/* Applications of Logistic Regression Section */}
            <section id="applications" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'applications' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://img.icons8.com/?size=100&id=fuVH5gdie8Za&format=png&color=000000" alt="Applications Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Applications</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Logistic Regression finds wide application across various fields due to its effectiveness in binary classification tasks. In medicine, it aids in predicting disease outcomes; in finance, it assesses credit risk; and in marketing, it segments customers based on behavior. Its adaptability and interpretability make it indispensable for decision-making in diverse domains.
              </p>
            </section>
          </div>
        </main>
      </div>

      <Footer className="bg-black text-white" /> {/* Include the Footer component */}
    </div>
  );
};

export default LogisticRegressionPage;
