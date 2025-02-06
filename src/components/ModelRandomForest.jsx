import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const ModelRandomForest = () => {
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
                  <button onClick={() => handleSectionClick('how-it-works')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'how-it-works' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>How Random Forest Works</button>
                </li>
               
                <li>
                  <button onClick={() => handleSectionClick('feature-importance')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'feature-importance' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Feature Importance</button>
                </li>
                
                <li>
                  <button onClick={() => handleSectionClick('advantages-disadvantages')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'advantages-disadvantages' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Advantages & Disadvantages</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('applications')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'applications' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Applications</button>
                </li>
                <li>
                  <h2 className="text-xl font-bold text-white uppercase px-4 pt-4">Training Options</h2>
                  <ul className="ml-2 space-y-2">
                    <li>
                      <a href="https://colab.research.google.com/drive/1SIpsmi2S3NlmRZo6n7L10O38_DQfcxJ2#scrollTo=-Z8CT6HXuA9O?authuser=0" target="_blank" rel="noopener noreferrer" className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15">Train on Colab</a>
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
              Understanding Random Forests
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
                    src="https://www.youtube.com/embed/J4Wdy0Wc_xQ" 
                    title="Random Forest Overview Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="square-video"
                  ></iframe>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Random Forest is a versatile machine learning algorithm that operates by constructing a multitude of decision trees during training and outputting the mode of the classes (classification) or mean prediction (regression) of the individual trees. This method enhances accuracy and reduces the risk of overfitting compared to a single decision tree.
              </p>
            </section>

            {/* How Random Forest Works Section */}
            <section id="how-it-works" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'how-it-works' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://thoughts-on-coding.com/img/remote/Z1fFLCA.jpg" alt="How It Works Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">How It Works</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
              Random Forest works by creating a multitude of decision trees during training and combining their outputs to make a final prediction. Each tree is built using a random subset of the data and features, which introduces diversity and reduces overfitting. During training, the algorithm uses a technique called bagging (Bootstrap Aggregating) to sample the data, allowing each tree to learn from different aspects of the dataset. For classification, the final prediction is made by majority voting among the trees, while for regression, it is the average of all tree predictions. This ensemble approach enhances accuracy and robustness. </p>
            </section>

            {/* Feature Importance Section */}
            <section id="feature-importance" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'feature-importance' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://th.bing.com/th/id/OIP.6neLLzSl8xxntX9xKYdAJwHaHw?rs=1&pid=ImgDetMain" alt="Feature Importance Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Feature Importance</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Random Forest provides a straightforward method to measure feature importance. By evaluating how much each feature reduces impurity in the decision trees, we can identify which features are most influential in making predictions. This helps in feature selection and improving model performance by focusing on the most relevant features.
              </p>
            </section>

            {/* Advantages & Disadvantages Section */}
            <section id="advantages-disadvantages" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'advantages-disadvantages' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://img.icons8.com/?size=100&id=fuVH5gdie8Za&format=png&color=000000" alt="Advantages & Disadvantages Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Advantages & Disadvantages</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
              Random Forest is a powerful machine learning algorithm with several advantages. Its ensemble approach combines multiple decision trees to improve prediction accuracy and reduce overfitting, making it robust against noise and variability in the data. This diversity of decision trees enhances the model’s generalization capability, allowing it to handle large datasets and high-dimensional feature spaces effectively. Additionally, Random Forest provides valuable insights into feature importance, helping in feature selection and understanding the underlying data relationships.

However, Random Forest also comes with some disadvantages. It can be computationally intensive, particularly when dealing with a large number of trees, which can result in longer training and prediction times. The model’s complexity may also lead to increased resource consumption and slower real-time predictions. Despite its robustness, Random Forest lacks interpretability compared to simpler models like decision trees. The ensemble nature makes it challenging to understand how decisions are made, which can be a drawback for applications requiring model transparency. Furthermore, while it handles missing values well, tuning hyperparameters such as the number of trees and tree depth is often necessary to optimize performance, adding to the model's complexity and tuning effort. Balancing these factors is essential for leveraging Random Forest effectively in practical applications.  </p>
            </section>

            {/* Applications Section */}
            <section id="applications" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'applications' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://thoughts-on-coding.com/img/remote/Z1fFLCA.jpg" alt="Applications Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Applications</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
              Random Forest is widely used across various domains due to its versatility and robustness. In finance, it helps in detecting fraudulent transactions, predicting stock prices, and assessing credit risks by analyzing complex patterns in financial data. In healthcare, it aids in diagnosing diseases, predicting patient outcomes, and identifying key biomarkers for treatment. In e-commerce, Random Forest enhances recommendation systems, customer segmentation, and sales forecasting by evaluating diverse data features. Additionally, it is employed in environmental science for classifying land cover types, predicting climate changes, and managing natural resources. Its ability to handle large datasets and provide insights into feature importance makes Random Forest a valuable tool in any field requiring accurate predictions and data analysis.    </p>
            </section>
          </div>
        </main>
      </div>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default ModelRandomForest;
