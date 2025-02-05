import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
    transform: none;
  }
`;

const StyledCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  transition: transform 0.3s ease;
  position: relative; /* Add position relative for pseudo-element */
  overflow: hidden; /* Ensure overflow is hidden for glow effect */
  border-radius: 10px; /* Adjust border radius as needed */
  border: 2px solid transparent; /* Initially transparent border */
  &:hover {
    transform: scale(1.05); /* Scale up by 10% */
    z-index: 1.1;
    border-color: rgba(0, 223, 154, 0.8); /* Glow color on hover */
    box-shadow: 0 0 20px rgba(0, 223, 154, 0.8); /* Optional: Add a box-shadow for more glow effect */
  }
`;

const TrainButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Profile = () => {
  const models = [
    {
      name: 'Linear Regression',
      description: 'Predict continuous values based on independent variables using a straight-line relationship.',
      iconUrl: 'https://img.icons8.com/?size=100&id=fuVH5gdie8Za&format=png&color=000000',
      link: '/linearregression'
    },
    {
      name: 'Logistic Regression',
      description: 'Classify data into binary outcomes by modeling probabilities based on predictor variables.',
      iconUrl: 'https://img.icons8.com/?size=100&id=xCl8pA8G18Wt&format=png&color=000000',
      link: '/logisticregression'
    },
    {
      name: 'Decision Tree',
      description: 'Make decisions by visualizing a tree-like structure of possible choices and outcomes.',
      iconUrl: 'https://img.icons8.com/?size=100&id=3QpOTWDqiqQU&format=png&color=000000',
      link: '/decisiontree'
    },
    {
      name: 'Random Forest',
      description: 'Combine multiple decision trees to improve accuracy and avoid overfitting.',
      iconUrl: 'https://img.icons8.com/?size=100&id=97384&format=png&color=000000',
      link: '/randomforest'
    },
    {
      name: 'Support Vector Machine (SVM)',
      description: 'Classify data by finding the best hyperplane that separates different classes.',
      iconUrl: 'https://img.icons8.com/?size=100&id=6nsw3h9gk8M8&format=png&color=000000',
      link: '/supportvectormachine'
    },
    {
      name: 'K-Nearest Neighbors (KNN)',
      description: 'Classify objects based on their similarity to neighboring examples in a feature space.',
      iconUrl: 'https://img.icons8.com/?size=100&id=44804&format=png&color=000000',
      link: '/knearestneighbors'
    },
    {
      name: 'Naive Bayes',
      description: 'Use probabilities and Bayes\' theorem to predict the class of an object based on its attributes.',
      iconUrl: 'https://img.icons8.com/?size=100&id=PvvcWRWxRKSR&format=png&color=000000',
      link: '/naivebayes'
    },
    {
      name: 'Principal Component Analysis (PCA)',
      description: 'Reduce the complexity of high-dimensional data while retaining its essential features.',
      iconUrl: 'https://assets-global.website-files.com/5e6f9b297ef3941db2593ba1/5f76ef7799e20652be0d79f6_Screenshot%202020-10-02%20at%2011.12.32.png',
      link: '/pca'
    },
    {
      name: 'Gradient Boosting Machines (GBM)',
      description: 'Build predictive models by combining the outputs of many weak learners in a sequential manner.',
      iconUrl: 'https://img.icons8.com/?size=100&id=JSnLFBKCt9En&format=png&color=000000',
      link: '/gbm'
    },
    {
      name: 'Neural Networks (Deep Learning)',
      description: 'Mimic the human brain to recognize patterns and make decisions based on vast amounts of data.',
      iconUrl: 'https://img.icons8.com/?size=100&id=kHa374LPzAvu&format=png&color=228BE6',
      link: '/neuralnetworks'
    },
    {
      name: 'Convolutional Neural Networks (CNN)',
      description: 'Specialize in processing and analyzing visual data such as images and videos.',
      iconUrl: 'https://img.icons8.com/?size=100&id=QlqmfUp2xkCq&format=png&color=000000',
      link: '/convolutionalneuralnetworks'
    },
    {
      name: 'Recurrent Neural Networks (RNN)',
      description: 'Process sequences of data by retaining memory of previous inputs.',
      iconUrl: 'https://img.icons8.com/?size=100&id=Ja6N9gQK99nM&format=png&color=000000',
      link: '/recurrentneuralnetwork'
    },
    {
      name: 'Long Short-Term Memory networks (LSTM)',
      description: 'Extend RNN capabilities by learning long-term dependencies in sequential data.',
      iconUrl: 'https://img.icons8.com/?size=100&id=Qf9aBbonWfLd&format=png&color=000000'
    },
    {
      name: 'Generative Adversarial Networks (GAN)',
      description: 'Pit two neural networks against each other to generate new data instances.',
      iconUrl: 'https://img.icons8.com/?size=100&id=GBu1KXnCZZ8j&format=png&color=000000'
    },
    {
      name: 'K-Means Clustering',
      description: 'Partition data into clusters based on similarity using iterative computation.',
      iconUrl: 'https://img.icons8.com/?size=100&id=43227&format=png&color=000000'
    },
    {
      name: 'Hierarchical Clustering',
      description: 'Build nested clusters by recursively merging or splitting data points.',
      iconUrl: 'https://img.icons8.com/?size=100&id=IJyJrL3znN8t&format=png&color=000000'
    },
    {
      name: 'Association Rule Learning (Apriori)',
      description: 'Discover relationships between variables in large datasets to make informed decisions.',
      iconUrl: 'https://img.icons8.com/?size=100&id=Qf9aBbonWfLd&format=png&color=000000'
    },
    {
      name: 'Collaborative Filtering (Matrix Factorization)',
      description: 'Predict user preferences by analyzing similarities between users and items.',
      iconUrl: 'https://img.icons8.com/?size=100&id=Q8TZgy8bDaSf&format=png&color=000000'
    },
    {
      name: 'Hidden Markov Models (HMM)',
      description: 'Model sequential data where the system transitions between hidden states.',
      iconUrl: 'https://img.icons8.com/?size=100&id=jQhWk5R601OC&format=png&color=000000'
    },
    {
      name: 'Gaussian Mixture Models (GMM)',
      description: 'Represent data as a mixture of several Gaussian distributions to identify clusters.',
      iconUrl: 'https://img.icons8.com/?size=100&id=qH0Q9k6h6YA8&format=png&color=000000'
    }
  ];

  return (
    <div className='container'>
      <Navbar />
      <div className='header' style={{ textAlign: 'center', margin: '20px 0' }}>
        <div className='text' style={{ color: '#00df9a', animation: `${fadeInUp} 4s ease` }}>
          Let's Train the Model!
        </div>
        <div
          className='underline'
          style={{ backgroundColor: '#00df9a', height: '3px', width: '50px', margin: 'auto' }}
        ></div>
      </div>
      <div className='profile-details' style={{ padding: '20px' }}>
        <h1 className='welcome-text' style={{ color: 'lightgray', textAlign: 'center', marginBottom: '20px' }}>
          Select the model on which you want to train your dataset.
        </h1>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-6'>
          {models.map((model, index) => (
            <StyledCard key={index}>
              <CardContent>
                <div className='flex gap-4 items-center'>
                  <img
                    src={model.iconUrl}
                    alt={model.name}
                    style={{ width: 150, height: 150, borderRadius: '50%', objectFit: 'cover' }} // Larger size
                  />
                  <div>
                    <Typography variant='h5' style={{ fontSize: '2.2rem' }}>{model.name}</Typography> {/* Adjust font size */}
                    <Typography variant='body1' >{model.description}</Typography>
                  </div>
                </div>
              </CardContent>
              <TrainButtonWrapper>
                {model.link ? (
                  <Link to={model.link} style={{ textDecoration: 'none', width: '100%' }}>
                    <Button
                      variant='contained'
                      size='large' // Adjust button size
                      style={{ backgroundColor: 'rgb(0, 223, 154)', color: 'black', marginTop: '20px' }} // Adjust styles
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                    >
                      Train
                    </Button>
                  </Link>
                ) : (
                  <Button variant='contained' size='small' disabled>
                    Coming Soon
                  </Button>
                )}
              </TrainButtonWrapper>
            </StyledCard>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
