import React from 'react';
import './Technology.scss';
import data from '../../../data/data.json';
import useTabs from '../../../hooks/use-tabs';
import { Tabs } from '../../common';

const Technology = () => {
  const { technology } = data;
  const { tabIndex, onTabSelectedHandler } = useTabs(technology);

  return (
    <section className="technology">
      <h5 className="technology__heading heading--fifth">
        <span>03</span>SPACE LAUNCH 101
      </h5>
      <Tabs
        className="technology__dots-component"
        value={tabIndex}
        data={[1, 2, 3]}
        onTabSelected={onTabSelectedHandler}
        tabClassName="technology__dot"
      />
      <div className="technology__text-box">
        <h4 className="technology__subheading nav-text">THE TERMINOLOGY…</h4>
        <h3 className="technology__term-name heading--tertiary">
          {technology[tabIndex].name}
        </h3>
        <p className="technology__term-description body-text">
          {technology[tabIndex].description}
        </p>
      </div>
      <picture className="technology__term-photo">
        <source
          className="technology__term-photo"
          srcSet={technology[tabIndex].images.portrait}
          media="(min-width: 68.75em)"
        />
        <img
          className="technology__term-photo"
          src={technology[tabIndex].images.landscape}
          alt="term"
        />
      </picture>
    </section>
  );
};

export default Technology;
