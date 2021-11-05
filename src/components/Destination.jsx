import React from 'react';
import '../sass/_destination.scss';
import planet from '../assets/destination/image-moon.png';

export default function Destination() {
  return (
    <section className="destination">
      <h2 className="destination__heading heading--fifth">
        <span>02</span>Pick your destination
      </h2>
      <div className="destination__content">
        <img src={planet} alt="planet" className="destination__planet-img" />
      </div>
    </section>
  );
}
