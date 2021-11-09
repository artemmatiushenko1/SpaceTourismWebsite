import React, { useState } from 'react';
import '../sass/_technology.scss';
import data from '../data/data';

export default function Technology() {
  const { technology } = data;
  const [technologyData, setTechnologyData] = useState(technology[0]);
  const [slideIndex, setSlideIndex] = useState(0);

  const onTabSelected = (index) => {
    setSlideIndex(index);
    setTechnologyData(technology[index]);
  };

  return (
    <section className="technology">
      <h5 className="technology__heading heading--fifth">
        <span>03</span>SPACE LAUNCH 101
      </h5>
      <ul className="technology__dots-component">
        {technology.map((_, i) => {
          return (
            <li
              key={i}
              className={`technology__dot ${
                slideIndex === i ? 'technology__dot--active' : ''
              }`}
              onClick={() => {
                onTabSelected(i);
              }}
            >
              {i + 1}
            </li>
          );
        })}
      </ul>
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
          srcset={technologyData.images.portrait}
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
}
