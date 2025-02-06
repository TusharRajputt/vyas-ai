import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const ModelCNN = () => {
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
                  <button
                    onClick={() => handleSectionClick('overview')}
                    className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'overview' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}
                  >
                    Overview
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionClick('architecture')}
                    className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'architecture' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}
                  >
                    CNN Architecture
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionClick('training-evaluation')}
                    className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'training-evaluation' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}
                  >
                    Training & Evaluation
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionClick('importance')}
                    className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'importance' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}
                  >
                    Importance
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleSectionClick('types')}
                    className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'types' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}
                  >
                    Different Types of CNN Models
                  </button>
                </li>
                <li>
                  <h2 className="text-xl font-bold text-white uppercase px-4 pt-4">Training Options</h2>
                  <ul className="ml-2 space-y-2">
                    <li>
                      <a
                        href="https://colab.research.google.com/drive/1l08ccdFc_qmJEx5-xyEnIdtdeLSMDYvf#scrollTo=mkoRHQzUK1g7?authuser=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15"
                      >
                        Train on Colab
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.kaggle.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15"
                      >
                        Train on Kaggle
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://aws.amazon.com/sagemaker/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15"
                      >
                        Train on SageMaker
                      </a>
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
              Understanding Convolutional Neural Networks (CNNs)
            </h1>

            {/* Overview Section */}
            <section
              id="overview"
              className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'overview' ? 'block' : 'hidden'}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://th.bing.com/th/id/OIP.KZ5sgbcp-y2f1KTzQWK6aAAAAA?rs=1&pid=ImgDetMain"
                  alt="Overview Icon"
                  className="h-12 w-12"
                />
                <div className="font-semibold text-5xl">Overview</div>
              </div>
              {/* Video Embed */}
              <div className="relative w-full h-0 pb-[56.25%] mb-8">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/HGwBXDKFk9I?feature=shared"
                  title="Understanding Convolutional Neural Networks"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Convolutional Neural Networks (CNNs) are a specialized type of neural network designed for processing structured grid data, such as images. They use convolutional layers to automatically and adaptively learn spatial hierarchies of features from input images, making them highly effective for image classification, object detection, and more.
              </p>
            </section>

            {/* CNN Architecture Section */}
            <section
              id="architecture"
              className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'architecture' ? 'block' : 'hidden'}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://thoughts-on-coding.com/img/remote/Z1fFLCA.jpg"
                  alt="Architecture Icon"
                  className="h-12 w-12"
                />
                <div className="font-semibold text-5xl">CNN Architecture</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                The architecture of a CNN typically includes several key components:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Convolutional Layers: These layers apply convolution operations to the input data, detecting local patterns.</li>
                <li>Activation Functions: Non-linear functions, such as ReLU, are applied to introduce non-linearity into the model.</li>
                <li>Pooling Layers: Pooling operations, such as max pooling, reduce the spatial dimensions of the data, capturing important features while reducing computational complexity.</li>
                <li>Fully Connected Layers: These layers make predictions based on the features extracted by the convolutional and pooling layers.</li>
              </ul>
            </section>

            {/* Training & Evaluation Section */}
            <section
              id="training-evaluation"
              className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'training-evaluation' ? 'block' : 'hidden'}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://th.bing.com/th/id/OIP.6neLLzSl8xxntX9xKYdAJwHaHw?rs=1&pid=ImgDetMain"
                  alt="Training & Evaluation Icon"
                  className="h-12 w-12"
                />
                <div className="font-semibold text-4xl">Training & Evaluation</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                CNNs are trained using a supervised learning approach. This means that the CNN is given a set of labeled training images. The CNN then learns to map the input images to their correct labels.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4">
                The training process involves:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li><strong>Forward Pass:</strong> The input image is passed through the network to compute the predicted output.</li>
                <li><strong>Loss Calculation:</strong> The loss function calculates the difference between the predicted output and the actual label.</li>
                <li><strong>Backpropagation:</strong> The network uses gradient descent to adjust the weights to minimize the loss.</li>
                <li><strong>Optimizer:</strong> An optimizer is used to adjust the weights of the CNN to minimize the loss function. Common optimizers include stochastic gradient descent (SGD) and Adam.</li>
                <li><strong>Evaluation:</strong> After training, the CNN is evaluated on a separate validation set to check its performance and ensure it generalizes well to unseen data.</li>
              </ul>
            </section>

            {/* Importance Section */}
            <section
              id="importance"
              className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'importance' ? 'block' : 'hidden'}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2921/2921222.png"
                  alt="Importance Icon"
                  className="h-12 w-12"
                />
                <div className="font-semibold text-4xl">Importance</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                CNNs are highly important in the field of deep learning due to their ability to learn hierarchical feature representations directly from raw image data. This capability makes them exceptionally powerful for a wide range of computer vision tasks.
              </p>
            </section>

            {/* Different Types of CNN Models Section */}
            <section
              id="types"
              className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'types' ? 'block' : 'hidden'}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--EBC3DsId--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/7j7lzvnj9impxg32vsbt.png"
                  alt="Types Icon"
                  className="h-12 w-12"
                />
                <div className="font-semibold text-4xl">Different Types of CNN Models</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                There are several types of CNN architectures, each designed to address specific types of problems or improve certain aspects of model performance. Some popular types include:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li><strong>LeNet-5:</strong> An early and influential CNN architecture designed for handwritten digit recognition.</li>
                <li><strong>AlexNet:</strong> A deep CNN model that achieved significant improvement in image classification tasks on the ImageNet dataset.</li>
                <li><strong>VGGNet:</strong> Known for its use of very small convolutional filters, VGGNet is widely used for image classification.</li>
                <li><strong>ResNet:</strong> Introduces residual connections to address the problem of vanishing gradients in very deep networks.</li>
                <li><strong>Inception:</strong> Uses inception modules to improve the efficiency of CNN models by combining different convolutional filter sizes.</li>
              </ul>
            </section>
          </div>
        </main>
      </div>

      <Footer /> {/* Include the Footer component */}
    </div>
  );
};

export default ModelCNN;
