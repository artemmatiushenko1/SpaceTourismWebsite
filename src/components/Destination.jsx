import React, { useState } from 'react';
import '../sass/_destination.scss';
import destinationData from '../data/data';

export default function Destination() {
  const { destinations } = destinationData;
  const [currentPlanet, setCurrentPlanet] = useState(destinations[0]);

  const onTabSelected = ({ target }) => {
    const tabs = document.querySelectorAll('.destination__tab-btn');
    tabs.forEach((tab) => {
      tab.classList.remove('destination__tab-btn--active');
    });
    target.classList.add('destination__tab-btn--active');
    const selectedPlanet = target.dataset['planet'];
    const planetData = destinations.find((el) => {
      return el.name === selectedPlanet;
    });
    setCurrentPlanet(planetData);
  };

  return (
    <section className="destination">
      <h5 className="destination__heading heading--fifth">
        <span>01</span>Pick your destination
      </h5>
      <div className="destination__content">
        <img
          src={currentPlanet.images.png}
          alt="planet"
          className="destination__planet-img"
        />
        <div className="destination__text-box">
          <ul className="destination__tabs">
            <li className="destination__tab-item">
              <button
                className="destination__tab-btn destination__tab-btn--active"
                data-planet="Moon"
                onClick={onTabSelected}
              >
                Moon
              </button>
            </li>
            <li className="destination__tab-item">
              <button
                className="destination__tab-btn"
                data-planet="Mars"
                onClick={onTabSelected}
              >
                Mars
              </button>
            </li>
            <li className="destination__tab-item">
              <button
                className="destination__tab-btn"
                data-planet="Europa"
                onClick={onTabSelected}
              >
                Europa
              </button>
            </li>
            <li className="destination__tab-item">
              <button
                className="destination__tab-btn"
                data-planet="Titan"
                onClick={onTabSelected}
              >
                Titan
              </button>
            </li>
          </ul>
          <h2 className="destination__planet-name heading--secondary">
            {currentPlanet.name}
          </h2>
          <p className="destination__planet-description body-text">
            {currentPlanet.description}
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
                {currentPlanet.distance}
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
                {currentPlanet.travel}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
