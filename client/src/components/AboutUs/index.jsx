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
      <div className="parallax parallax__a" />
      <p className="parallax__txt">
        Acte 1er: L&#39;INCENDI DELS PALLERS
        <br />
        Un foc fortuït crema els pallers del senyor feudal.
        Els remences estan obligats per llei a sufragar-ne els danys.
      </p>
      <div className="parallax parallax__b" />
      <p className="parallax__txt">
        Acte 2on: BARTOMEU HA DE FUGIR
        <br />
        L&#39;amo reclama la filla del remença Bartomeu Sala per a minyona del castell.
        El pare es nega a cedir-la.
        S&#39;anuncien les represàlies del senyor feudal i Bartomeu ha d&#39;escapar.
      </p>
      <div className="parallax parallax__c" />
      <p className="parallax__txt">
        Acte 3er:  LA REVOLTA ARRIBA AL VALLÈS
        <br />
        El mercat setmanal es veu trastornat per la proximitat de les tropes rebels.
        Cada pagès s&#39;ha de definir a favor o en contra de la revolta.
        Els joves es volen unir a la rebel·lió.
      </p>
      <div className="parallax parallax__d" />

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
