import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const ModelRNN = () => {
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
                  <button onClick={() => handleSectionClick('steps')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'steps' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Steps in RNN Training</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('types')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'types' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Types of RNNs</button>
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
                      <a href="https://colab.research.google.com/drive/1q9OHcy8txZXhjV6NZ7W5CcY4Z_VAmphY#scrollTo=hc2_yAWQMGAc?authuser=0" target="_blank" rel="noopener noreferrer" className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15">Train on Colab</a>
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
              Understanding Recurrent Neural Networks (RNNs)
            </h1>

            {/* Overview Section */}
            <section id="overview" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'overview' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://th.bing.com/th/id/OIP.KZ5sgbcp-y2f1KTzQWK6aAAAAA?rs=1&pid=ImgDetMain" alt="Overview Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">Overview</div>
              </div>
              <div className="relative w-full flex justify-center mb-8">
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/AsNTP8Kwu80?feature=shared" 
                    title="RNN Overview Video" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                  ></iframe>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Recurrent Neural Networks (RNNs) are a class of neural networks designed for sequential data. Unlike traditional feedforward neural networks, RNNs have connections that loop back on themselves, allowing them to maintain a memory of previous inputs. This makes RNNs particularly useful for tasks such as time series forecasting, natural language processing, and speech recognition.
              </p>
            </section>

            {/* Applications Section */}
            <section id="applications" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'applications' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://cdn4.iconfinder.com/data/icons/badges-9/66/17-1024.png" alt="Applications Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">Applications</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                RNNs are used in various applications, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Natural Language Processing (NLP): For tasks like language modeling, machine translation, and sentiment analysis.</li>
                <li>Speech Recognition: To transcribe spoken language into text.</li>
                <li>Time Series Forecasting: For predicting future values based on historical data.</li>
                <li>Music Generation: To create new music sequences based on learned patterns.</li>
                <li>Video Analysis: For action recognition and sequence prediction in videos.</li>
              </ul>
            </section>

            {/* Steps in RNN Training Section */}
            <section id="steps" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'steps' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://cdn-icons-png.flaticon.com/512/446/446287.png" alt="Steps Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Steps in RNN Training</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Training an RNN involves several key steps:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Prepare Data: Format and preprocess sequential data for training.</li>
                <li>Define Model: Specify the RNN architecture and parameters.</li>
                <li>Train the Model: Use backpropagation through time (BPTT) to optimize the RNN's weights.</li>
                <li>Evaluate Performance: Assess the model's performance using metrics suitable for the task.</li>
                <li>Tune Hyperparameters: Adjust learning rates, batch sizes, and other parameters to improve performance.</li>
              </ul>
            </section>

            {/* Types of RNNs Section */}
            <section id="types" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'types' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/artificial-intelligence-82-914904.png" alt="Types Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Types of RNNs</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Different types of RNNs are designed to address specific challenges and improve performance:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Vanilla RNN: The basic form of RNN with simple architecture.</li>
                <li>LSTM (Long Short-Term Memory): Designed to address the vanishing gradient problem with gating mechanisms.</li>
                <li>GRU (Gated Recurrent Unit): A variation of LSTM with fewer parameters and similar performance.</li>
                <li>Bidirectional RNN: Processes data in both forward and backward directions to capture context from both ends of a sequence.</li>
                <li>Attention Mechanism: Enhances RNNs by allowing the model to focus on different parts of the sequence for better performance.</li>
              </ul>
            </section>

            {/* Advantages Section */}
            <section id="advantages" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'advantages' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://www.freeiconspng.com/thumbs/results-icon-png/results-icon-png-15.png" alt="Advantages Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Advantages</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                RNNs offer several advantages, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Ability to process sequential data and capture temporal dependencies.</li>
                <li>Effective for various sequential tasks such as language modeling and time series prediction.</li>
                <li>Flexible architectures that can be tailored to specific tasks and data types.</li>
                <li>Integration with attention mechanisms to improve performance and focus on relevant parts of the sequence.</li>
              </ul>
            </section>

            {/* Disadvantages Section */}
            <section id="disadvantages" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'disadvantages' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://miro.medium.com/v2/resize:fit:800/0*0rbrFPQKI8JrKuCo.jpg" alt="Disadvantages Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Disadvantages</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Despite their strengths, RNNs have some disadvantages:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Difficulty in learning long-term dependencies due to vanishing or exploding gradients.</li>
                <li>Computationally intensive and slow to train, especially with large datasets.</li>
                <li>Complex architectures such as LSTMs and GRUs can be difficult to tune and optimize.</li>
                <li>May require significant amounts of data to perform well on certain tasks.</li>
              </ul>
            </section>
          </div>
        </main>
      </div>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default ModelRNN;
