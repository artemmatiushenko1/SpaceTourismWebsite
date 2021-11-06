import React from 'react';
import '../sass/_destination.scss';
import planet from '../assets/destination/image-moon.png';

export default function Destination() {
  return (
    <section className="destination">
      <h5 className="destination__heading heading--fifth">
        <span>01</span>Pick your destination
      </h5>
      <div className="destination__content">
        <img src={planet} alt="planet" className="destination__planet-img" />
        <div className="destination__text-box">
          <ul className="destination__tabs">
            <li className="destination__tab-item">
              <button className="destination__tab-btn destination__tab-btn--active">
                Moon
              </button>
            </li>
            <li className="destination__tab-item">
              <button className="destination__tab-btn">Mars</button>
            </li>
            <li className="destination__tab-item">
              <button className="destination__tab-btn">Europa</button>
            </li>
            <li className="destination__tab-item">
              <button className="destination__tab-btn">Titan</button>
            </li>
          </ul>
          <h2 className="destination__planet-name heading--secondary">Moon</h2>
          <p className="destination__planet-description body-text">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="destination__key-values">
            <div className="destination__key-value">
              <label
                htmlFor="destination__distance"
                className="destination__value-label sub-heading--secondary "
              >
                AVG. DISTANCE
              </label>
              <h6
                id="destination__distance"
                className="destination__distance sub-heading--primary"
              >
                384,400 km
              </h6>
            </div>
            <div className="destination__key-value">
              <label
                htmlFor="destination__time"
                className="destination__value-label sub-heading--secondary "
              >
                Est. travel time
              </label>
              <h6
                id="destination__time"
                className="destination__time sub-heading--primary"
              >
                3 days
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
