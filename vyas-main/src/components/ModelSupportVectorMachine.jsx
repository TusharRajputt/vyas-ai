import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const ModelSupportVectorMachine = () => {
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
                  <button onClick={() => handleSectionClick('types')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'types' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Types of SVM</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('kernel')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'kernel' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Kernel Methods</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('applications')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'applications' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Applications</button>
                </li>
                {/* New section */}
                <li>
                  <h2 className="text-xl font-bold text-white uppercase px-4 pt-4">Training Options</h2>
                  <ul className="ml-2 space-y-2">
                    <li>
                      <a href="https://colab.research.google.com/drive/1YW-z1ndmxXvnu4bWzSR0MZOXTfkPTumX#scrollTo=PNbo2APoBI_Z?authuser=0" target="_blank" rel="noopener noreferrer" className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15">Train on Colab</a>
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
              Understanding Support Vector Machines (SVM)
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
                    src="https://youtube.com/embed/efR1C6CvhmE?feature=shared" 
                    title="SVM Overview Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="square-video"
                  ></iframe>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Support Vector Machines (SVM) are powerful supervised learning models used for classification and regression tasks. They find optimal hyperplanes in high-dimensional space to separate different classes of data points.
              </p>
            </section>

            {/* Types of SVM Section */}
            <section id="types" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'types' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://thoughts-on-coding.com/img/remote/Z1fFLCA.jpg" alt="Types Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">Types of SVM</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Support Vector Machines can vary based on different factors such as the kernel used and the nature of the problem:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Linear SVM: Uses a linear kernel for linearly separable data.</li>
                <li>Non-linear SVM: Utilizes kernels like polynomial, radial basis function (RBF), or sigmoid to handle non-linear separable data.</li>
                <li>Support Vector Regression (SVR): Extension of SVM for regression tasks.</li>
              </ul>
            </section>

            {/* Kernel Methods Section */}
            <section id="kernel" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'kernel' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://th.bing.com/th/id/OIP.6neLLzSl8xxntX9xKYdAJwHaHw?rs=1&pid=ImgDetMain" alt="Kernel Methods Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Kernel Methods in SVM</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Kernel methods in SVM allow the algorithm to operate in a higher-dimensional feature space without explicitly computing the transformations. This approach enables SVM to handle complex decision boundaries and non-linear relationships between features.
              </p>
            </section>

            {/* Applications of SVM Section */}
            <section id="applications" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'applications' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://img.icons8.com/?size=100&id=fuVH5gdie8Za&format=png&color=000000" alt="Applications Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Applications of SVM</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                SVM finds applications across various domains due to its ability to handle high-dimensional data and complex decision boundaries:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Text classification and sentiment analysis.</li>
                <li>Image recognition and computer vision tasks.</li>
                <li>Bioinformatics and medical diagnostics.</li>
                <li>Financial forecasting and stock market analysis.</li>
              </ul>
            </section>
          </div>
        </main>
      </div>

      <Footer className="bg-black text-white" /> {/* Include the Footer component */}
    </div>
  );
};

export default ModelSupportVectorMachine;
