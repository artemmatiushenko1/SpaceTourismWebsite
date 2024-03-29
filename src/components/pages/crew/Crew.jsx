import React from 'react';
import './Crew.scss';
import data from 'data/data.json';
import useTabs from 'hooks/use-tabs';
import { Tabs } from 'components/common';

const Crew = () => {
  const { crew } = data;
  const { activeTab, onTabChangeHandler } = useTabs(0);

  return (
    <section className="crew">
      <div className="crew__content">
        <h5 className="crew__heading heading--fifth">
          <span>02</span>Meet your crew
        </h5>
        <div className="crew__text-box">
          <Tabs
            className="crew__dots-component"
            value={activeTab}
            data={new Array(crew.length).fill(' ')}
            onChange={onTabChangeHandler}
            tabClassName="crew__dot"
          />
          <h4 className="crew__position-name heading--fourth">
            {crew[activeTab].role}
          </h4>
          <h3 className="crew__member-name heading--tertiary">
            {crew[activeTab].name}
          </h3>
          <p className="crew__member-description body-text">
            {crew[activeTab].bio}
          </p>
        </div>
      </div>
      <img
        src={crew[activeTab].images.png}
        alt="crewMember"
        className="crew__member-photo"
      />
    </section>
  );
};

export default Crew;
