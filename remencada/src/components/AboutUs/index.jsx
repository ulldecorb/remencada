import React from 'react';
import { PropTypes } from 'prop-types';

export const AboutUs = function AboutUs({ data }) {
  return (
    <section className="qui-som">
      {data.map((article) => (
        <article key={article.title}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </article>
      ))}
    </section>
  );
};

AboutUs.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
  // title: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired
};

export default AboutUs;
