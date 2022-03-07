import React from 'react';
import { PropTypes } from 'prop-types';

export const Article = function Article({ data }) {
  return (
    <>
      {data.map((p) => (
        <p>{p}</p>
      ))}
    </>
  );
};

Article.propTypes = {
  data: PropTypes.shapeOf({}).isRequired
};

export default Article;
