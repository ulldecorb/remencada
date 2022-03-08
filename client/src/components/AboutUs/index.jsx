import React, { useEffect, useState } from 'react';
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
      <h2>Actes de l&#39;Obra</h2>
      <div className="parallax parallax__a" />
      <p className="parallax__txt">
        Acte 1er: L&#39;INCENDI DELS PALLERS
        <br />
        Un foc fortuït crema els pallers del senyor feudal.
        <br />
        Els remences estan obligats per llei a sufragar-ne els danys.
        <br />
      </p>
      <div className="parallax parallax__b" />
      <p className="parallax__txt">
        Acte 2on: BARTOMEU HA DE FUGIR
        <br />
        L&#39;amo reclama la filla del remença Bartomeu Sala per a minyona del castell.
        <br />
        El pare es nega a cedir-la.
        <br />
        S&#39;anuncien les represàlies del senyor feudal i Bartomeu ha d&#39;escapar.
        <br />
      </p>
      <div className="parallax parallax__c" />
      <p className="parallax__txt">
        Acte 3er: LA REVOLTA ARRIBA AL VALLÈS
        <br />
        El mercat setmanal es veu trastornat per la proximitat de les tropes rebels.
        <br />
        Cada pagès s&#39;ha de definir a favor o en contra de la revolta.
        <br />
        Els joves es volen unir a la rebel·lió.
      </p>
      <div className="parallax parallax__d" />
      <p className="parallax__txt">
        Acte 4rt: LA DIPUTACIÓ ATACA MONTORNÈS
        <br />
        Bartomeu Sala ha tornat al poble com comandant de la insurrecció pagesa,
        <br />
        però la Diputació ha enviat un important exèrcit  feudal a liquidar la
        revolta  dels remences.
      </p>
      <div className="parallax parallax__e" />
      <p className="parallax__txt">
        Acte 5è: NEGOCIACIONS DE PAU
        <br />
        El rei Ferran II ha enviat un mitjancer que negocia la pau amb els remences
        i amb els senyors feudals.
        <br />
        Tot el país viu en un difícil compàs d&#39;espera.
      </p>
      <div className="parallax parallax__f" />
      <p className="parallax__txt">
        Acte 6è: EL FUTUR HA COMENÇAT
        <br />
        Amb la victòria de la revolució remença,
        <br />
        la vida dels pagesos catalans ha millorat considerablement.
        <br />
        Hi ha pau al país, i el rei dicta l&#39;amnistia per a tots els revoltats.
        <br />
        Bartomeu Sala pot tornar a Montornès amb la família.
      </p>
      <div className="parallax parallax__g" />

    </section>
  );
};

export default AboutUs;
