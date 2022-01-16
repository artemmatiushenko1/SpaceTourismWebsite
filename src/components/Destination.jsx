import React, { useState } from 'react';
import '../sass/_destination.scss';
import data from '../data/data.json';
import { motion } from 'framer-motion';

export default function Destination() {
  const { destinations } = data;
  const [planetData, setPlanetData] = useState(destinations[0]);
  const [selectedTab, setSelectedTab] = useState(0);

  const onTabSelected = (tabIndex) => {
    setPlanetData(destinations[tabIndex]);
    setSelectedTab(tabIndex);
  };

  return (
    <motion.div
      initial={{ translateX: '100%', scale: 0.1, opacity: 0 }}
      animate={{ translateX: 0, scale: 1, opacity: 1 }}
      exit={{ translateX: '-100%', scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="destination">
        <h5 className="destination__heading heading--fifth">
          <span>01</span>Pick your destination
        </h5>
        <div className="destination__content">
          <img
            src={destinations[selectedTab].images.png}
            alt="planet"
            className="destination__planet-img"
          />
          <div className="destination__text-box">
            {/* TODO: create tabs component */}
            <ul className="destination__tabs">
              {destinations.map((destination, i) => {
                return (
                  <li key={i} className="destination__tab-item">
                    <button
                      className={`destination__tab-btn ${
                        selectedTab === i ? 'destination__tab-btn--active' : ''
                      }`}
                      data-planet={destination.name}
                      onClick={(e) => {
                        onTabSelected(i);
                      }}
                    >
                      {destination.name}
                    </button>
                  </li>
                );
              })}
            </ul>
            <h2 className="destination__planet-name heading--secondary">
              {planetData.name}
            </h2>
            <p className="destination__planet-description body-text">
              {planetData.description}
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
                  {planetData.distance}
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
                  {planetData.travel}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
