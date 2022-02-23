import React from 'react';
import { PropTypes } from 'prop-types';
import './History.css';

export const History = function History({ data }) {
  // const { title, description } = data[0];
  // console.log(typeof (description));
  return (
    <section className="history">
      {data.map((enter) => (
        <article key={enter.title}>
          <h2>{enter.title}</h2>
          <p>{enter.description}</p>
        </article>
      ))}
    </section>
  );
};

History.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default History;
