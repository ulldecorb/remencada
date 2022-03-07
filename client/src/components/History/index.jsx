import React, { useState, useEffect } from 'react';
import './History.css';

export const History = function History() {
  const [historyData, setHistoryData] = useState([]);

  const getHistory = async () => {
    const response = await fetch('http://localhost:4545/api/histories');
    const data = await response.json();
    setHistoryData(data);
  };

  useEffect(() => {
    getHistory();
  }, []);

  return (
    <section className="history">
      {historyData.map((article) => (
        <article key={article.title}>
          <h2>{article.title}</h2>
          <p>{article.p1}</p>
          <p>{article.p2}</p>
          <p>{article.p3}</p>
          <p>{article.p4}</p>
          <p>{article.p5}</p>
          <p>{article.p6}</p>
          <p>{article.p7}</p>
        </article>
      ))}
    </section>
  );
};

// History.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.object
//   ).isRequired
// };

export default History;
