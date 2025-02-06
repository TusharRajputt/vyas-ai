import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const ModelNaiveBayes = () => {
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
                  <button onClick={() => handleSectionClick('assumptions')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'assumptions' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Assumptions</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('why-naive-bayes')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'why-naive-bayes' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Why Naive Bayes</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('bayesTheorem')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'bayesTheorem' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Bayes Theorem</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('types')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'types' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Types of Naive Bayes</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('applications')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'applications' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Applications</button>
                </li>
                {/* New section */}
                <li>
                  <h2 className="text-xl font-bold text-white uppercase px-4 pt-4">Training Options</h2>
                  <ul className="ml-2 space-y-2">
                    <li>
                      <a href="https://colab.research.google.com/drive/12VF-CNSg1GqvfHH3NgWc3ou5a00Cmor1#scrollTo=NJUgQYN7PcOK?authuser=0" target="_blank" rel="noopener noreferrer" className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15">Train on Colab</a>
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
              Understanding Naive Bayes Classifier
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
                    src="https://www.youtube.com/embed/O2L2Uv9pdDA" 
                    title="Naive Bayes Overview Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="square-video"
                  ></iframe>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Naive Bayes is a probabilistic classifier based on Bayes' theorem, used for solving classification problems, especially in text classification with high-dimensional datasets.
              </p>
            </section>

            {/* Assumptions Section */}
            <section id="assumptions" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'assumptions' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://thoughts-on-coding.com/img/remote/Z1fFLCA.jpg" alt="Assumptions Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Assumptions of Naïve Bayes</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                The Naïve Bayes classifier relies on several key assumptions:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li><strong>Feature Independence:</strong> Features are assumed to be conditionally independent given the class label. For example, the temperature being ‘Hot’ is considered independent of the humidity level.</li>
                <li><strong>Continuous Features:</strong> If a feature is continuous, it is assumed to follow a normal distribution within each class.</li>
                <li><strong>Discrete Features:</strong> Discrete features are assumed to follow a multinomial distribution within each class.</li>
                <li><strong>Equal Importance:</strong> All features are considered equally important for predicting the class label.</li>
                <li><strong>No Missing Data:</strong> The algorithm assumes that there are no missing values in the dataset.</li>
              </ul>
             
            </section>

            {/* Why Naive Bayes Section */}
            <section id="why-naive-bayes" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'why-naive-bayes' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://th.bing.com/th/id/OIP.6neLLzSl8xxntX9xKYdAJwHaHw?rs=1&pid=ImgDetMain" alt="Why Naive Bayes Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Why Naïve Bayes?</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
              Naive Bayes is favored for its simplicity and effectiveness in various classification tasks. It assumes feature independence, which simplifies computation and often performs well even with limited data. Its probabilistic nature provides clear insights into predictions, making it valuable for tasks like spam filtering and sentiment analysis. The model is computationally efficient, easy to implement, and scales well with large datasets. Despite its simplicity, Naive Bayes can deliver surprisingly accurate results, especially when features are indeed independent or nearly so. This combination of efficiency, ease of use, and performance makes it a popular choice in many practical applications. </p>
            </section>

            {/* Bayes Theorem Section */}
            <section id="bayesTheorem" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'bayesTheorem' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://img.icons8.com/?size=100&id=fuVH5gdie8Za&format=png&color=000000" alt="Bayes Theorem Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Bayes Theorem</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Bayes' Theorem describes the probability of a class given the features. It’s formulated as: <br />
                P(A | B) = P(B | A) * P(A) / P(B). <br />
                This theorem forms the basis of the Naive Bayes classifier.<br></br>
Where:<br></br>
P(A∣B) is the posterior probability, the probability of event A occurring given that B is true.<br></br>

P(B∣A) is the likelihood, the probability of observing event B given that A is true.<br></br>

P(A) is the prior probability, the initial probability of event A before observing B.<br></br>

P(B) is the marginal likelihood, the total probability of observing event B.
              </p>
            </section>

            {/* Types of Naive Bayes Section */}
            <section id="types" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'types' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://th.bing.com/th/id/OIP.KZ5sgbcp-y2f1KTzQWK6aAAAAA?rs=1&pid=ImgDetMain" alt="Types Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Types of Naïve Bayes</div>
              </div>
              <ul className="list-disc list-inside text-gray-300 text-lg">
              <li>Gaussian Naive Bayes: Assumes that features follow a Gaussian (normal) distribution. It is suitable for continuous data and is used when the data features are normally distributed.</li>
              <li>Multinomial Naive Bayes: Optimized for discrete features, especially useful for text classification problems where data is represented as word counts or frequencies. It models the probability of each feature being part of a class.</li>
              <li>Bernoulli Naive Bayes: Assumes binary/boolean features, meaning it considers whether a feature is present or absent. It is effective for tasks where features are binary, such as document classification with presence or absence of words.</li>
              <li>Categorical Naive Bayes: Extends the multinomial Naive Bayes to handle categorical features that have more than two possible values. It is suitable for datasets where features can take on multiple categories</li>
              </ul>
            </section>

            {/* Applications Section */}
            <section id="applications" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'applications' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://th.bing.com/th/id/OIP.6neLLzSl8xxntX9xKYdAJwHaHw?rs=1&pid=ImgDetMain" alt="Applications Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Applications</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Naive Bayes is widely used in:
              </p>
1. Spam Filtering: Naive Bayes is highly effective in identifying spam emails by analyzing the frequency of words and patterns in email content.<br></br>
2. Sentiment Analysis:It classifies the sentiment of text, such as determining whether movie reviews or social media posts are positive or negative.<br></br>
3. Document Classification: Useful for categorizing documents into predefined categories, such as news articles or research papers, based on their content.<br></br>
4. Medical Diagnosis: Assists in diagnosing diseases by analyzing patient symptoms and medical data, helping in early disease detection.<br></br>
5. Recommendation Systems: Enhances recommendations by predicting user preferences based on past behavior and user characteristics.<br></br>
6. Text Classification:Widely used for classifying text data in various applications like language detection and topic categorization.<br></br>
Naive Bayes is favored for its simplicity, speed, and effectiveness, especially with large datasets.
            </section>
          </div>
        </main>
      </div>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default ModelNaiveBayes;
