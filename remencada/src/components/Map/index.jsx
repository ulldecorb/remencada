import React from 'react';
import './Map.css';

export const Map = function Map() {
  return (
    <section className="map">
      <iframe className="map__goggle-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23888.863668618316!2d2.2476306597133635!3d41.54525967198261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4b854771a08d9%3A0xda02e5e04ad21d2e!2s08170%20Montorn%C3%A8s%20del%20Vall%C3%A8s%2C%20Barcelona!5e0!3m2!1ses!2ses!4v1643242303022!5m2!1ses!2ses" title="montornes" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy" />
    </section>
  );
};

export default Map;
