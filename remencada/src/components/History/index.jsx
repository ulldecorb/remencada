import React from 'react';
import { PropTypes } from 'prop-types';
import './History.css';

export const History = function History({ data }) {
  const firstData = data[0];
  const {
    title, first, second, thirth, fourth, fifth, sixth, seventh
  } = firstData;
  return (
    <section className="history">
      <h2>{title}</h2>
      <article>
        <p>{first}</p>
        <p>{second}</p>
        <p>{thirth}</p>
        <p>{fourth}</p>
        <p>{fifth}</p>
        <p>{sixth}</p>
        <p>{seventh}</p>
      </article>
    </section>
  );
};

History.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired
};

export default History;
