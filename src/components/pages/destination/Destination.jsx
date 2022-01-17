import React from 'react';
import './Destination.scss';
import data from '../../../data/data.json';
import Tabs from '../../tabs/Tabs';
import useTabs from '../../../hooks/use-tabs';

const Destination = () => {
  const { destinations } = data;
  const { tabData: planetData, onTabSelectedHandler } = useTabs(destinations);

  return (
    <section className="destination">
      <h5 className="destination__heading heading--fifth">
        <span>01</span>Pick your destination
      </h5>
      <div className="destination__content">
        <img
          src={planetData.images.png}
          alt="planet"
          className="destination__planet-img"
        />
        <div className="destination__text-box">
          <Tabs
            className="destination__tabs"
            data={destinations.map((dest) => dest.name)}
            onTabSelected={onTabSelectedHandler}
            tabClassName="destination__tab-btn"
          />
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
  );
};

export default Destination;
