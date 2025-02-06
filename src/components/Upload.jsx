import React, { useState } from 'react';
import Papa from 'papaparse';
import Navbar from './Navbar';
import Footer from './Footer';
import './Upload.css'; // Ensure Upload.css is imported for styling

function Upload() {
  const [parsedData, setParsedData] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [values, setValues] = useState([]);

  const changeHandler = (event) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        const rowsArray = Object.keys(results.data[0]);
        const valuesArray = results.data.map((d) => Object.values(d));

        setParsedData(results.data);
        setTableRows(rowsArray);
        setValues(valuesArray);
      },
    });
  };

  return (
    <div className='container'>
      <Navbar />
      <div className='header'>
        <div className='text'>Upload</div>
        <div className='underline'></div>
      </div>

      {/* Styled File Uploader */}
      <label htmlFor='file-upload' className='sub'>
        Choose File
      </label>
      <input
        id='file-upload'
        type='file'
        name='file'
        onChange={changeHandler}
        accept='.csv'
        style={{ display: 'none' }}
      />

      <div>
        <table>
          <thead>
            <tr>
              {tableRows.map((row, index) => (
                <th key={index}>{row}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {values.map((row, index) => (
              <tr key={index}>
                {row.map((value, i) => (
                  <td key={i}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer/>
    </div>
  );
}

export default Upload;
