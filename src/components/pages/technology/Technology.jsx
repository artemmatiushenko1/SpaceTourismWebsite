import React from 'react';
import './Technology.scss';
import data from '../../../data/data.json';
import useTabs from '../../../hooks/use-tabs';
import { Tabs } from '../../common';

const Technology = () => {
  const { technology } = data;
  const { tabData: technologyData, onTabSelectedHandler } = useTabs(technology);

  return (
    <section className="technology">
      <h5 className="technology__heading heading--fifth">
        <span>03</span>SPACE LAUNCH 101
      </h5>
      <Tabs
        className="technology__dots-component"
        data={[1, 2, 3]}
        onTabSelected={onTabSelectedHandler}
        tabClassName="technology__dot"
      />
      <div className="technology__text-box">
        <h4 className="technology__subheading nav-text">THE TERMINOLOGY…</h4>
        <h3 className="technology__term-name heading--tertiary">
          {technologyData.name}
        </h3>
        <p className="technology__term-description body-text">
          {technologyData.description}
        </p>
      </div>
      <picture className="technology__term-photo">
        <source
          className="technology__term-photo"
          srcSet={technologyData.images.portrait}
          media="(min-width: 68.75em)"
        />
        <img
          className="technology__term-photo"
          src={technologyData.images.landscape}
          alt="term"
        />
      </picture>
    </section>
  );
};

export default Technology;
