import React from 'react';
import './Gallery.css';

export const Gallery = function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__video-box">
        <iframe className="video-box__video" width="400" height="250" src="https://www.youtube.com/embed/GQZHFL8cSn4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <iframe className="video-box__video" width="400" height="250" src="https://www.youtube.com/embed/ZTnPh1UMg1I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
      <div className="gallery__slider">
        <img src="http://www.laremencada.cat/4/images/10001000_0_5525139_170891.jpg" alt="bartomeu alçant espasa" className="slider__image" />
        <img src="http://www.laremencada.cat/4/images/1000_0_5193300_170891.jpg" alt="les remençes" className="slider__image" />
        <img src="http://www.laremencada.cat/4/images/1000_0_5193301_170891.jpg" alt="soldats de la diputació" className="slider__image" />
      </div>
      <div className="gallery__video-box">
        <iframe className="video-box__video" width="400" height="250" src="https://www.youtube.com/embed/qkHJOy6rh_4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        <iframe className="video-box__video" width="400" height="250" src="https://www.youtube.com/embed/Qi-HT64mMWg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
      </div>
    </section>
  );
};

export default Gallery;
