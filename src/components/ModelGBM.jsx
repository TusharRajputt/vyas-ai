import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const ModelGBM = () => {
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
                  <button onClick={() => handleSectionClick('applications')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'applications' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Applications</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('steps')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'steps' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Steps in GBM Training</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('types')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'types' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Types of GBMs</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('advantages')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'advantages' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Advantages</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('disadvantages')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'disadvantages' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Disadvantages</button>
                </li>
                {/* New section */}
                <li>
                  <h2 className="text-xl font-bold text-white uppercase px-4 pt-4">Training Options</h2>
                  <ul className="ml-2 space-y-2">
                    <li>
                      <a href="https://colab.research.google.com/drive/1lSaIUL2yoLRzmAsxxiXC6ORgo8AXd1rJ#scrollTo=XGQ2oOax3T9q?authuser=0" target="_blank" rel="noopener noreferrer" className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15">Train on Colab</a>
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
              Understanding Gradient Boosting Machines (GBMs)
            </h1>

            {/* Overview Section */}
            <section id="overview" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'overview' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://static.vecteezy.com/system/resources/previews/010/897/448/original/overview-glyph-blue-and-black-icon-vector.jpg" alt="Overview Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">Overview</div>
              </div>
              <div className="relative w-full flex justify-center mb-8">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/3CC4N4z3GJc" 
                    title="GBM Overview Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Gradient Boosting Machines (GBMs) are a powerful class of machine learning algorithms that build models in a stage-wise fashion. They combine the predictions of multiple weak learners, typically decision trees, to produce a strong predictive model. GBMs are widely used for their accuracy and efficiency in handling various types of data. The core idea behind GBMs is to sequentially add models that correct the errors of the combined model from previous iterations. By doing so, the model gradually improves its performance, resulting in a highly accurate predictive model. GBMs are flexible and can be used for both classification and regression tasks, making them a versatile tool in the machine learning toolkit.
              </p>
            </section>

            {/* Applications Section */}
            <section id="applications" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'applications' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://static.vecteezy.com/system/resources/previews/000/608/012/original/application-development-icon-concept-to-building-successful-business-tablet-with-app-development-icons-flat-vector-illustration.jpg" alt="Applications Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">Applications</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                GBMs are used in various applications, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Classification tasks such as credit scoring, fraud detection, and disease diagnosis.</li>
                <li>Regression tasks for predicting continuous values like house prices and sales forecasting.</li>
                <li>Ranking tasks such as search engine result ranking and recommendation systems.</li>
                <li>Feature selection and engineering in complex datasets.</li>
              </ul>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                In the financial industry, GBMs are used to assess credit risk and detect fraudulent transactions. In healthcare, they assist in diagnosing diseases by analyzing patient data. E-commerce platforms use GBMs to recommend products to users by analyzing their browsing and purchase history. Additionally, GBMs are employed in natural language processing tasks such as sentiment analysis and language translation. Their versatility and high accuracy make GBMs a preferred choice for many machine learning practitioners.
              </p>
            </section>

            {/* Steps in GBM Training Section */}
            <section id="steps" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'steps' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://cdn-icons-png.flaticon.com/512/1173/1173377.png" alt="Steps Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Steps in GBM Training</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Training a Gradient Boosting Machine involves several steps:
              </p>
              <ol className="list-decimal list-inside text-gray-300 text-lg mt-4 space-y-2">
                <li>Initialize the model with a constant value, typically the mean of the target variable for regression tasks or the log odds for classification tasks.</li>
                <li>Calculate the residual errors for the current model.</li>
                <li>Train a new weak learner, usually a decision tree, to predict the residual errors.</li>
                <li>Update the model by adding the predictions from the new weak learner, weighted by a learning rate.</li>
                <li>Repeat steps 2-4 for a specified number of iterations or until the residual errors are minimized.</li>
                <li>Combine the predictions from all weak learners to make the final prediction.</li>
              </ol>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                The learning rate is a crucial hyperparameter in GBM training, as it controls the contribution of each weak learner. A smaller learning rate typically requires more iterations but can lead to a more accurate model. Additionally, regularization techniques such as shrinkage and subsampling are used to prevent overfitting and improve the model's generalization ability. Hyperparameter tuning is essential to achieve the best performance, and techniques like grid search or random search are commonly used for this purpose.
              </p>
            </section>

            {/* Types of GBMs Section */}
            <section id="types" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'types' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://icon-library.com/images/type-icon/type-icon-6.jpg" alt="Types Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">Types of GBMs</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                There are various types of Gradient Boosting Machines, each with unique characteristics and advantages:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li><strong>Gradient Boosting for Regression:</strong> Used for predicting continuous values, such as house prices and sales forecasting. The model minimizes the mean squared error between the predicted and actual values.</li>
                <li><strong>Gradient Boosting for Classification:</strong> Used for binary or multiclass classification tasks, such as spam detection and image recognition. The model minimizes the log loss or exponential loss to improve the accuracy of predictions.</li>
                <li><strong>XGBoost (Extreme Gradient Boosting):</strong> An optimized implementation of gradient boosting that offers speed and performance improvements. It includes advanced features like regularization, parallel processing, and handling missing values.</li>
                <li><strong>LightGBM (Light Gradient Boosting Machine):</strong> Designed for efficiency and scalability, LightGBM uses a histogram-based algorithm for faster training and lower memory usage. It is suitable for large datasets and high-dimensional data.</li>
                <li><strong>CatBoost (Categorical Boosting):</strong> Specifically designed to handle categorical features without the need for extensive preprocessing. CatBoost provides robust performance and is particularly useful for datasets with a high proportion of categorical variables.</li>
              </ul>
              
            </section>

            {/* Advantages Section */}
            <section id="advantages" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'advantages' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://icon-library.com/images/advantage-icon/advantage-icon-6.jpg" alt="Advantages Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">Advantages</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                GBMs offer several advantages that make them a popular choice among machine learning practitioners:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li><strong>High Predictive Accuracy:</strong> GBMs are known for their superior predictive performance, often outperforming other machine learning algorithms. They excel in capturing complex patterns and interactions in the data.</li>
                <li><strong>Flexibility with Loss Functions:</strong> GBMs can be tailored to different tasks by using various loss functions, such as mean squared error for regression or log loss for classification. This flexibility allows GBMs to be applied to a wide range of problems.</li>
                <li><strong>Handling Missing Data:</strong> GBMs can effectively handle missing values by using surrogate splits in the decision trees. This feature eliminates the need for extensive data preprocessing and imputation.</li>
                <li><strong>Feature Importance Estimation:</strong> GBMs provide insights into the importance of features in the model. This helps in understanding which features contribute most to the predictions and can guide feature selection and engineering efforts.</li>
                <li><strong>Scalability and Efficiency:</strong> Advanced implementations of GBMs, such as XGBoost and LightGBM, are designed for efficient computation and can handle large datasets with ease. They leverage parallel processing and optimized algorithms to speed up training times.</li>
              </ul>
              
            </section>

            {/* Disadvantages Section */}
            <section id="disadvantages" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'disadvantages' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://tse1.mm.bing.net/th?id=OIP.4FMJHvX1MG1gwiQtSXntcAAAAA&pid=Api&P=0&h=180" alt="Disadvantages Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">Disadvantages</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Despite their many advantages, GBMs also have some disadvantages:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li><strong>Computationally Intensive:</strong> Training GBMs can be computationally expensive and time-consuming, especially for large datasets. This is due to the iterative nature of the algorithm and the need to train multiple weak learners.</li>
                <li><strong>Prone to Overfitting:</strong> If not properly tuned, GBMs can overfit the training data, leading to poor generalization on unseen data. Regularization techniques and careful hyperparameter tuning are essential to mitigate this risk.</li>
                <li><strong>Hyperparameter Tuning:</strong> GBMs have several hyperparameters that need to be tuned for optimal performance. This process can be complex and time-consuming, often requiring extensive experimentation and cross-validation.</li>
                <li><strong>Long Training Times:</strong> Due to the iterative nature of the algorithm, training GBMs can take a long time, especially for large datasets or high-dimensional data. This can be a limitation in scenarios where quick model deployment is required.</li>
              </ul>
              
            </section>
          </div>
        </main>
      </div>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default ModelGBM;
