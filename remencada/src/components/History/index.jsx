import React, { useState, useEffect } from 'react';
// import { PropTypes } from 'prop-types';
import './History.css';

export const History = function History() {
  // const firstData = data.find((doc) => doc.title === 'QUI SOM?');

  const [historyData, setHistoryData] = useState([]);

  const getHistory = async () => {
    const response = await fetch('http://localhost:4545/api/histories');
    const data = await response.json();
    setHistoryData(data);
  };

  useEffect(() => {
    getHistory();
  }, []);

  // const firstData = historyData[0];
  const {
    title
    // , first, second, thirth, fourth, fifth, sixth, seventh
  } = historyData[0];
  return (
    <section className="history">
      <h2>{title}</h2>
      <article>
        {/* <p>{first}</p>
        <p>{second}</p>
        <p>{thirth}</p>
        <p>{fourth}</p>
        <p>{fifth}</p>
        <p>{sixth}</p>
        <p>{seventh}</p> */}
      </article>
    </section>
  );
};

// History.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.object
//   ).isRequired
// };

export default History;
