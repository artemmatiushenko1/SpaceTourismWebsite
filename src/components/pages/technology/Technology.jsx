import React from 'react';
import './Technology.scss';
import data from 'data/data.json';
import useTabs from 'hooks/use-tabs';
import { Tabs } from 'components/common';

const Technology = () => {
  const { technology } = data;
  const { activeTab, onTabChangeHandler } = useTabs(0);

  return (
    <section className="technology">
      <h5 className="technology__heading heading--fifth">
        <span>03</span>SPACE LAUNCH 101
      </h5>
      <Tabs
        className="technology__dots-component"
        value={activeTab}
        data={[1, 2, 3]}
        onChange={onTabChangeHandler}
        tabClassName="technology__dot"
      />
      <div className="technology__text-box">
        <h4 className="technology__subheading nav-text">THE TERMINOLOGY…</h4>
        <h3 className="technology__term-name heading--tertiary">
          {technology[activeTab].name}
        </h3>
        <p className="technology__term-description body-text">
          {technology[activeTab].description}
        </p>
      </div>
      <picture className="technology__term-photo">
        <source
          className="technology__term-photo"
          srcSet={technology[activeTab].images.portrait}
          media="(min-width: 68.75em)"
        />
        <img
          className="technology__term-photo"
          src={technology[activeTab].images.landscape}
          alt="term"
        />
      </picture>
    </section>
  );
};

export default Technology;
