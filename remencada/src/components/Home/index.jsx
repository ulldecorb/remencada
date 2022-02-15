import React from 'react';

export const Home = function Home() {
  return (
    <div className="home">
      <h2 className="home__title">HOLA REMENÇA!!!</h2>
      <iframe className="home__video" width="560" height="315" src="https://www.youtube.com/embed/YX35ioAwFRM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </div>
  );
};

export default Home;
