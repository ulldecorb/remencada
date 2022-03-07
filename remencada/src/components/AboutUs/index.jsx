import React, { useEffect, useState } from 'react';
// import { PropTypes } from 'prop-types';

export const AboutUs = function AboutUs() {
  const [aboutUsData, setAboutUsData] = useState([]);

  const getAboutUs = async () => {
    const response = await fetch('http://localhost:4545/api/aboutus');
    const data = await response.json();
    setAboutUsData(data);
  };

  useEffect(() => {
    getAboutUs();
  }, []);

  return (
    <section className="qui-som">
      {aboutUsData.map((article) => (
        <article key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.p1}</p>
          <p>{article.p2}</p>
          <p>{article.p3}</p>
          <p>{article.p4}</p>
        </article>
      ))}

    </section>
  );
};

// AboutUs.propTypes = {
//   data: PropTypes.arrayOf(
//     PropTypes.object
//   ).isRequired
//   // title: PropTypes.string.isRequired,
//   // description: PropTypes.string.isRequired
// };

export default AboutUs;
