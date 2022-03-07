import React, { useEffect, useState } from 'react';
// import { PropTypes } from 'prop-types';
import './aboutUs.css';

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
        <article key={article.title}>
          <h2>{article.title}</h2>
          <p>{article.p1}</p>
          <p>{article.p2}</p>
          <p>{article.p3}</p>
          <p>{article.p4}</p>
        </article>
      ))}
      <h2>Remençada</h2>
      <div className="parallax parallax__1" />
      <pre className="parallax__txt">
        Un foc fortuït crema els pallers del senyor feudal.
        Els remences estan obligats per llei a sufragar-ne els danys.
      </pre>
      <div className="parallax parallax__2" />
      <pre className="parallax__txt">
        L&#39;amo reclama la filla del remença Bartomeu Sala per a minyona del castell.
        El pare es nega a cedir-la.
        S&#39;anuncien les represàlies del senyor feudal i Bartomeu ha d&#39;escapar.
      </pre>
      <div className="parallax parallax__3" />
      <pre className="parallax__txt">
        El mercat setmanal es veu trastornat per la proximitat de les tropes rebels.
        Cada pagès s&#39;ha de definir a favor o en contra de la revolta.
        Els joves es volen unir a la rebel·lió.
      </pre>
      <div className="parallax parallax__4" />

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
