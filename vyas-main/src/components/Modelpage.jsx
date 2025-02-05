import React, { useState } from 'react';
import { ReactTyped } from "react-typed";
import Navbar from './Navbar';
import Footer from './Footer';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const modelData = [
  {
    title: "Linear Regression",
    description: "A linear approach to modeling the relationship between a dependent variable and one or more independent variables, where the prediction is a continuous value.",
    image: "https://img.icons8.com/?size=100&id=fuVH5gdie8Za&format=png&color=000000",
    category: "Regression",
    link:"/modellinearregression"
  },
  {
    title: "Logistic Regression",
    description: "A method used for binary classification that models the probability of a target variable being one of two possible outcomes based on one or more predictor variables.",
    image: "https://img.icons8.com/?size=100&id=xCl8pA8G18Wt&format=png&color=000000",
    category: "Classification",
    link: "/modellogisticregression"
  },
  {
    title: "Decision Tree",
    description: "A decision support tool that uses a tree-like model of decisions and their possible consequences.",
    image: "https://img.icons8.com/?size=100&id=3QpOTWDqiqQU&format=png&color=000000",
    category: "Classification",
    link: "/modeldecisiontree"
  },
  {
    title: "Random Forest",
    description: "An ensemble learning method that operates by constructing multiple decision trees.",
    image: "https://img.icons8.com/?size=100&id=97384&format=png&color=000000",
    category: "Classification",
    link: '/modelrandomforest'
  },
  {
    title: "Support Vector Machine (SVM)",
    description: "A supervised learning model that analyzes data for classification and regression analysis.",
    image: "https://img.icons8.com/?size=100&id=6nsw3h9gk8M8&format=png&color=000000",
    category: "Classification",
    link: "/modelsupportvectormachine"
  },
  {
    title: "K-Nearest Neighbors (KNN)",
    description: "A non-parametric method used for classification and regression by comparing distances between points.",
    image: "https://img.icons8.com/?size=100&id=cx04GeIy2JZ5&format=png&color=000000",
    category: "Classification",
    link: "/modelknearestneighbors"
  },
  {
    title: "Naive Bayes",
    description: "A family of simple probabilistic classifiers based on applying Bayes' theorem.",
    image: "https://img.icons8.com/?size=100&id=44804&format=png&color=000000",
    category: "Classification",
    link: '/modelnaivebayes'
  },
  {
    title: "Principal Component Analysis (PCA)",
    description: "A technique for reducing the dimensionality of datasets, increasing interpretability but at the same time minimizing information loss.",
    image: "https://img.icons8.com/?size=100&id=PvvcWRWxRKSR&format=png&color=000000",
    category: "Dimensionality Reduction",
    link: '/modelpca'
  },
  
  {
    title: "Gradient Boosting Machines (GBM)",
    description: "A machine learning technique for regression and classification problems, which builds a model in a stage-wise fashion.",
    image: "https://img.icons8.com/?size=100&id=kHa374LPzAvu&format=png&color=228BE6",
    category: "Classification",
    link: '/modelgbm'
  },
  {
    title: "Neural Networks (Deep Learning)",
    description: "A set of algorithms, modeled loosely after the human brain, designed to recognize patterns.",
    image: "https://img.icons8.com/?size=100&id=QlqmfUp2xkCq&format=png&color=000000",
    category: "Classification"
  },
  {
    title: "Convolutional Neural Networks (CNN)",
    description: "A class of deep neural networks, most commonly applied to analyzing visual imagery.",
    image: "https://img.icons8.com/?size=100&id=yjSFO4TGzhsn&format=png&color=000000",
    category: "Object Detection",
    link: '/modelcnn'
  },
  {
    title: "Recurrent Neural Networks (RNN)",
    description: "A class of artificial neural networks where connections between nodes can create a cycle, allowing output from some nodes to affect subsequent input to the same nodes.",
    image: "https://img.icons8.com/?size=100&id=Ja6N9gQK99nM&format=png&color=228BE6",
    category: "Vision-Language",
    link: '/modelrnn'
  },
  {
    title: "Long Short-Term Memory networks (LSTM)",
    description: "A type of RNN capable of learning order dependence in sequence prediction problems.",
    image: "https://img.icons8.com/?size=100&id=Qf9aBbonWfLd&format=png&color=000000",
    category: "Vision-Language"
  },
  {
    title: "Generative Adversarial Networks (GAN)",
    description: "A type of machine learning framework designed by two neural networks contesting with each other to generate new, synthetic instances of data that can pass for real data.",
    image: "https://img.icons8.com/?size=100&id=JSnLFBKCt9En&format=png&color=000000",
    category: "Classification"
  },
  {
    title: "K-Means Clustering",
    description: "A technique for reducing the dimensionality of datasets, increasing interpretability but at the same time minimizing information loss.",
    image: "https://img.icons8.com/?size=100&id=43227&format=png&color=000000",
    category: "Clustering"
  },
  {
    title: "Hierarchical Clustering",
    description: "A method of cluster analysis which seeks to build a hierarchy of clusters.",
    image: "https://img.icons8.com/?size=100&id=GBu1KXnCZZ8j&format=png&color=000000",
    category: "Clustering"
  },
  {
    title: "Association Rule Learning (Apriori)",
    description: "A rule-based machine learning method for discovering interesting relations between variables in large databases.",
    image: "https://img.icons8.com/?size=100&id=IJyJrL3znN8t&format=png&color=000000",
    category: "Association"
  },
  {
    title: "Collaborative Filtering (Matrix Factorization)",
    description: "A technique used by recommender systems that makes automatic predictions about the interests of a user by collecting preferences or taste information from many users.",
    image: "https://img.icons8.com/?size=100&id=5xMfU0pOhtpa&format=png&color=000000",
    category: "Recommendation"
  },
  {
    title: "Hidden Markov Models (HMM)",
    description: "A statistical model that represents a system that transitions between hidden states.",
    image: "https://img.icons8.com/?size=100&id=114910&format=png&color=000000",
    category: "Sequence Modeling"
  },
  {
    title: "Gaussian Mixture Models (GMM)",
    description: "A probabilistic model for representing normally distributed subpopulations within an overall population.",
    image: "https://img.icons8.com/?size=100&id=ehy8DUWMHmpu&format=png&color=000000",
    category: "Clustering"
  }
];


export const Modelpage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Models');
  const navigate = useNavigate();

  const handleSelect = (model) => {
    navigate(`/upload?model=${model}`);
  };

  const filteredModels = modelData.filter((model) => {
    return (
      model.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All Models' || model.category === selectedCategory)
    );
  });

  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className='border-b border-t border-slate-700 p-12 px-20 pb-20 pt-20'>
        <div className='flex items-center'>
          <div className='w-1/2'>
            <div className='text-6xl font-semibold text-white'>
              Next-Generation Vision
            </div>
            <div className='text-2xl text-slate-400 mt-6'>
              <ReactTyped
                strings={[
                  "Explore high-performance computer vision models",
                  "Optimized for your specific dataset requirements",
                ]}
                typeSpeed={140}
                backSpeed={160}
                loop
              />
            </div>
          </div>
          <div className='w-1/2'>
            <img src='https://miro.medium.com/v2/resize:fit:1200/0*415bOphqpjJTGkKR.jpg' alt='Next Generation Vision' className='w-full h-auto' />
          </div>
        </div>
      </div>

      <div className='mt-10 md:flex sm:inline-block text-white px-20'>
        <div className=''>
          <div>
            <div className='font-semibold'>Search Models</div>
            <div className='mt-3'>
              <input
                type="text"
                placeholder='🔎 Search...'
                className='bg-transparent border rounded p-1 px-3 w-[350px]'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className='mt-8'>
            <div className='text-semibold text-lg border-b-2 border-slate-800 pb-2'>Filter By Task</div>
            <div className='mt-5 text-slate-300'>
              {['All Models', 'Object Detection', 'Classification', 'Regression', 'Dimensionality Reduction', 'Clustering', 'Vision-Language', 'Sequence Modeling', 'Association', 'Recommendation'].map((category) => (
                <div
                  key={category}
                  className={`cursor-pointer hover:text-slate-400 mb-1 ${selectedCategory === category ? 'text-slate-400' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='md:grid md:grid-cols-2 lg:grid-cols-2 gap-8 px-4 mt-10'>
          {filteredModels.map((model, index) => (
            <a href={model.link} key={index}>
              <div className='border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
                <div className='flex gap-6'>
                  <div className='my-auto'>
                    <img src={model.image} alt='' />
                  </div>
                  <div className='font-semibold text-2xl'>{model.title}</div>
                </div>
                <div className='mt-2 text-slate-400'>{model.description}</div>
                <div className='flex mt-4'>
                  <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full'>{model.category}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Modelpage;
