import React from 'react';
import './Gallery.css';

export const Gallery = function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__slider">
        <img src="http://www.laremencada.cat/4/images/10001000_0_5525139_170891.jpg" alt="bartomeu alçant espasa" className="slider__image" />
        <img src="http://www.laremencada.cat/4/images/1000_0_5193300_170891.jpg" alt="les remençes" className="slider__image" />
        <img src="http://www.laremencada.cat/4/images/1000_0_5193301_170891.jpg" alt="soldats de la diputació" className="slider__image" />
      </div>
    </section>
  );
};

export default Gallery;
