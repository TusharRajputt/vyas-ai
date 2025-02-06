import React, { useState } from 'react';
import Papa from 'papaparse';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

const LogisticRegression = () => {
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  const [totalColumns, setTotalColumns] = useState(0);
  const [totalRows, setTotalRows] = useState(0);
  const [modelTrained, setModelTrained] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type !== 'text/csv') {
      setError('Please upload a .csv file.');
      setData([]);
      setTotalColumns(0);
      setTotalRows(0);
      setModelTrained(false);
    } else {
      setError('');
      Papa.parse(file, {
        header: true,
        complete: (results) => {
          setData(results.data);
          setTotalColumns(Object.keys(results.data[0]).length);
          setTotalRows(results.data.length);
          setModelTrained(false);
        },
        error: (error) => {
          setError('Error parsing the file.');
          setData([]);
          setTotalColumns(0);
          setTotalRows(0);
          setModelTrained(false);
        }
      });
      console.log('File uploaded:', file);
    }
  };

  const handleTrainModel = () => {
    setModelTrained(true);
  };

  return (
    <div className='container mx-auto' style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '100%' }}>
      <Navbar />
      <div className='header'>
        <div className='text' style={{ color: '#00df9a', textAlign: 'center', fontSize: '2.5em', fontWeight: 'bold', marginBottom: '10px' }}>
          Training Dashboard
        </div>
        <div className='underline' style={{ borderBottom: '2px solid #00df9a', margin: '0 auto 20px', width: '50%' }}></div>
      </div>
      <div className='content'>
        <div className='box border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
          <div className='flex gap-6 justify-center'>
            <div className='my-auto'>
              <img src="https://img.icons8.com/?size=100&id=xCl8pA8G18Wt&format=png&color=000000" alt="" />
            </div>
            <div className='font-semibold text-6xl'>Logistic Regression</div>
          </div>
          <div className='mt-2 text-slate-400 text-center'>
            A method used for binary classification that models the probability of a target variable being one of two possible outcomes based on one or more predictor variables.
          </div>
          <div className='flex justify-center mt-4'>
            <div className='p-1 text-xs font-semibold text-slate-400 border rounded-full'>
              INSTANCE SEGMENTATION
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6'>
          <div className='border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'>
                <img src="https://img.icons8.com/?size=100&id=49445&format=png&color=000000" alt="" />
              </div>
              <div className='font-semibold text-3xl'>Key Concepts</div>
            </div>
            <ul className='mt-2 text-slate-400 list-disc pl-5'>
              <li>Binary Classification: Used when the dependent variable has two possible outcomes.</li>
              <li>Sigmoid Function: Maps predicted values to probabilities between 0 and 1.</li>
              <li>Log Odds: Predicts the log odds of the probability of the dependent variable being 1.</li>
              <li>Maximum Likelihood Estimation (MLE): Estimates model parameters to maximize the likelihood of observing the given data.</li>
            </ul>
          </div>

          <div className='border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'>
                <img src="https://img.icons8.com/?size=100&id=BEViFzYcviOb&format=png&color=000000" alt="" />
              </div>
              <div className='font-semibold text-3xl'>Applications</div>
            </div>
            <ul className='mt-2 text-slate-400 list-disc pl-5'>
              <li>Medical Field: Predicting the presence or absence of a disease.</li>
              <li>Marketing: Predicting whether a customer will buy a product.</li>
              <li>Finance: Predicting loan default risk.</li>
              <li>Social Sciences: Analyzing survey data to predict outcomes like election results.</li>
            </ul>
          </div>

          <div className='border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'>
                <img src="https://img.icons8.com/?size=100&id=8m89hFwpmX6a&format=png&color=000000" alt="" />
              </div>
              <div className='font-semibold text-3xl'>Advantages</div>
            </div>
            <ul className='mt-2 text-slate-400 list-disc pl-5'>
              <li>Interpretable: Coefficients help understand the relationship between variables.</li>
              <li>Efficient: Computationally efficient for large datasets.</li>
              <li>Probability Scores: Provides probabilities for decision-making.</li>
            </ul>
          </div>

          <div className='border border-slate-900 rounded-xl p-6 text-white cursor-pointer hover:scale-105 shadow-xl shadow-slate-900 ease-out duration-300'>
            <div className='flex gap-6'>
              <div className='my-auto'>
                <img src="https://img.icons8.com/?size=100&id=VIv8t3G3jp6o&format=png&color=000000" alt="" />
              </div>
              <div className='font-semibold text-3xl'>Limitations</div>
            </div>
            <ul className='mt-2 text-slate-400 list-disc pl-5'>
              <li>Linear Boundaries: Assumes a linear relationship between variables.</li>
              <li>Complex Relationships: May not capture complex patterns as effectively as other methods like decision trees or neural networks.</li>
            </ul>
          </div>
        </div>

        <div className='flex justify-center'>
          <input
            type="file"
            onChange={handleFileUpload}
            style={{ color: '#00df9a', fontSize: '1.1em', padding: '8px', border: '2px solid #00df9a', borderRadius: '5px', backgroundColor: '#000', cursor: 'pointer', marginTop: '20px' }}
            accept=".csv"
          />
        </div>
        {error && <p style={{ color: 'red', marginTop: '10px', textAlign: 'center' }}>{error}</p>}
        {data.length > 0 && !modelTrained && (
          <div className='flex justify-center'>
            <button onClick={handleTrainModel} style={{ color: '#00df9a', fontSize: '1.1em', padding: '10px', border: '2px solid #00df9a', borderRadius: '5px', backgroundColor: '#000', cursor: 'pointer', marginTop: '10px' }}>Train Model</button>
          </div>
        )}
        {data.length > 0 && (
          <div style={{ marginTop: '20px', color: '#ffffff', textAlign: 'left' }}>
            <p style={{ color: '#ffffff', fontSize: '1.1em' }}>Total Columns: {totalColumns}</p>
            <p style={{ color: '#ffffff', fontSize: '1.1em' }}>Total Rows: {totalRows}</p>
            <div style={{ maxHeight: '400px', overflowY: 'scroll', overflowX: 'auto', border: '1px solid #00df9a', borderRadius: '5px', marginTop: '10px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '1.1em' }}>
                <thead style={{ position: 'sticky', top: 0, backgroundColor: '#00df9a', zIndex: 1 }}>
                  <tr>
                    {Object.keys(data[0]).map((header, index) => (
                      <th key={index} style={{ border: '1px solid #00df9a', padding: '8px', color: '#ffffff', textAlign: 'left', textTransform: 'capitalize' }}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, rowIndex) => (
                    <tr key={rowIndex} style={{ backgroundColor: rowIndex % 2 === 0 ? '#333' : '#444' }}>
                      {Object.values(row).map((value, colIndex) => (
                        <td key={colIndex} style={{ border: '1px solid #00df9a', padding: '8px', color: '#ffffff', textAlign: 'left' }}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LogisticRegression;
