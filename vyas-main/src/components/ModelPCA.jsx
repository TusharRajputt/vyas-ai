import React, { useState } from 'react';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

const ModelPCA = () => {
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
                  <button onClick={() => handleSectionClick('steps')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'steps' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Steps in PCA</button>
                </li>
                <li>
                  <button onClick={() => handleSectionClick('linear-algebra')} className={`block py-4 pl-4 pr-4 text-lg text-left ${activeSection === 'linear-algebra' ? 'text-green-500' : 'hover:bg-blue-800 hover:bg-opacity-15'}`}>Linear Algebra Concepts</button>
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
                      <a href="https://colab.research.google.com/drive/1gr6e_KaFPup8XRwwNBBwZbqScm0ZaStH#scrollTo=pI2QwBxKzP5s?authuser=0" target="_blank" rel="noopener noreferrer" className="block py-2 pl-4 text-lg text-white hover:text-green-500 hover:bg-blue-800 hover:bg-opacity-15">Train on Colab</a>
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
              Understanding Principal Component Analysis (PCA)
            </h1>

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
        src="https://www.youtube.com/embed/_UVHneBUBW0" 
        title="PCA Overview Video" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen
        className="square-video"
      ></iframe>
    </div>
  </div>
  <p className="text-gray-300 text-lg leading-relaxed">
    Principal Component Analysis (PCA) is a dimensionality reduction technique used to reduce the number of features in a dataset while retaining the most important information. It transforms the data into a new coordinate system, where the greatest variances lie on the first few coordinates, known as principal components.
  </p>
</section>

            {/* Applications Section */}
            <section id="applications" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'applications' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://thoughts-on-coding.com/img/remote/Z1fFLCA.jpg" alt="Applications Icon" className="h-12 w-12" />
                <div className="font-semibold text-5xl">Applications</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                PCA is widely used in:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
              <li>Data Visualization: PCA reduces high-dimensional data to 2 or 3 dimensions, making it easier to visualize patterns and relationships in the data.</li>
               <li>Noise Reduction: By focusing on principal components with the highest variance, PCA can filter out noise and improve the signal-to-noise ratio.</li>
<li>Feature Extraction: In machine learning, PCA helps in identifying and selecting the most relevant features from a large set, enhancing model performance and reducing overfitting.</li>
<li>Image Compression: PCA is used to compress image data by reducing dimensionality while retaining important visual features, leading to efficient storage and faster processing.</li>
<li>Genomics: In bioinformatics, PCA helps in analyzing gene expression data and identifying patterns in genetic research.</li>
              </ul>
            </section>

            {/* Steps in PCA Section */}
            <section id="steps" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'steps' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://th.bing.com/th/id/OIP.6neLLzSl8xxntX9xKYdAJwHaHw?rs=1&pid=ImgDetMain" alt="Steps Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Steps in PCA</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                PCA involves several key steps:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
              <li>Standardize the Data: Scale the data so that each feature has a mean of 0 and a standard deviation of 1, ensuring that each feature contributes equally to the analysis.</li>
              <li>Compute the Covariance Matrix: Calculate the covariance matrix to understand the relationships between features and how they vary together.</li>
              <li>Calculate Eigenvectors and Eigenvalues: Perform eigen decomposition on the covariance matrix to obtain eigenvectors and eigenvalues. Eigenvectors represent the directions of maximum variance, while eigenvalues indicate the magnitude of variance along these directions.</li>
              <li>Sort Eigenvectors: Order the eigenvectors by their corresponding eigenvalues in descending order to prioritize components that capture the most variance.</li>
              <li>Select Principal Components: Choose the top eigenvectors based on the desired number of components, forming a new feature space.</li>
              <li>Transform the Data: Project the original data onto the new feature space, reducing dimensionality while retaining significant variance.</li>
              </ul>
            </section>

            {/* Linear Algebra Concepts Section */}
            <section id="linear-algebra" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'linear-algebra' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://img.icons8.com/?size=100&id=fuVH5gdie8Za&format=png&color=000000" alt="Linear Algebra Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Linear Algebra Concepts Behind PCA</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Understanding the linear algebra concepts behind PCA is crucial for grasping how it works:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
              <li>
  <strong>Vectors and Eigenvalues/Eigenvectors:</strong> Vectors represent individual data points as entities in a high-dimensional space. In PCA, eigenvalues and eigenvectors play a crucial role. Eigenvectors are vectors that indicate the directions of maximum variance in the data, essentially defining the principal components. Eigenvalues measure the magnitude of the variance along these eigenvectors, quantifying the amount of variance captured by each principal component.
</li>

<li>
  <strong>Covariance Matrix:</strong> The covariance matrix  provides a measure of how each pair of features in the dataset varies together. It is a square matrix where each element at position (i, j) represents the covariance between the i-th and j-th features. Essentially, it captures the relationships between different dimensions of the data, indicating whether features increase or decrease together.
</li>

<li>
  <strong>Matrix Factorization:</strong> Principal Component Analysis (PCA) can be understood as a process of matrix factorization, where the original data matrix is decomposed into simpler, more interpretable components. Singular Value Decomposition (SVD) is a widely used method for this purpose. In SVD, the data matrix is decomposed into three matrices: one representing the principal components (left singular vectors), one representing the singular values (which indicate the importance of each component), and one representing the feature vectors (right singular vectors). This factorization allows PCA to identify the directions (principal components) in which the data varies the most, and to represent the original data in a reduced-dimensional space that retains most of its variance.
</li>

              </ul>
              
             
            </section>

            {/* Advantages of PCA Section */}
            <section id="advantages" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'advantages' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://th.bing.com/th/id/OIP.I3Qr77rOtLzqPYDNXxMLnwAAAA?rs=1&pid=ImgDetMain" alt="Advantages Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Advantages of PCA</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                PCA offers several benefits:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Dimensionality Reduction: Simplifies data analysis by reducing the number of variables.</li>
                <li>Feature Selection: Helps in identifying the most important variables.</li>
                <li>Data Visualization: Facilitates the visualization of high-dimensional data.</li>
                <li>Multicollinearity: Addresses multicollinearity by creating uncorrelated variables.</li>
                <li>Noise Reduction: Improves signal-to-noise ratio by removing components with low variance.</li>
                <li>Data Compression: Reduces storage and processing requirements.</li>
                <li>Outlier Detection: Identifies outliers in the principal component space.</li>
              </ul>
            </section>

            {/* Disadvantages of PCA Section */}
            <section id="disadvantages" className={`mb-12 rounded-xl overflow-hidden bg-black border border-white p-8 shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 ${activeSection === 'disadvantages' ? 'block' : 'hidden'}`}>
              <div className="flex items-center gap-4 mb-4">
                <img src="https://img.icons8.com/?size=100&id=fuVH5gdie8Za&format=png&color=000000" alt="Disadvantages Icon" className="h-12 w-12" />
                <div className="font-semibold text-4xl">Disadvantages of PCA</div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                PCA has some limitations:
              </p>
              <ul className="list-disc list-inside text-gray-300 text-lg mt-4">
                <li>Interpretation of Principal Components: Difficult to relate components to original variables.</li>
                <li>Data Scaling: Sensitive to data scaling; requires proper standardization.</li>
                <li>Information Loss: Possible loss of information depending on the number of components retained.</li>
                <li>Non-linear Relationships: Assumes linear relationships; may not work well with non-linear data.</li>
                <li>Computational Complexity: Can be computationally expensive for large datasets.</li>
                <li>Overfitting: Risk of overfitting if too many components are used or data is small.</li>
              </ul>
            </section>
          </div>
        </main>
      </div>

      <Footer className="bg-black text-white" /> {/* Include the Footer component */}
    </div>
  );
};

export default ModelPCA;
