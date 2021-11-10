import React, { useState } from 'react';
import '../sass/_crew.scss';
import data from '../data/data';
import { motion } from 'framer-motion';

export default function Crew() {
  const { crew } = data;
  const [memberData, setMemberData] = useState(crew[0]);
  const [slideIndex, setSlideIndex] = useState(0);

  const onDotSelected = (index) => {
    setSlideIndex(index);
    setMemberData(crew[index]);
  };

  return (
    <motion.div
      initial={{ translateX: '100%', scale: 0.1, opacity: 0 }}
      animate={{ translateX: 0, scale: 1, opacity: 1 }}
      exit={{ translateX: '-100%', scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="crew">
        <div className="crew__text-box">
          <h5 className="crew__heading heading--fifth">
            <span>02</span>Meet your crew
          </h5>
          <ul className="crew__dots-component">
            {crew.map((_, i) => {
              return (
                <li
                  key={i}
                  className={`crew__dot ${
                    slideIndex === i ? 'crew__dot--active' : ''
                  }`}
                  onClick={() => {
                    onDotSelected(i);
                  }}
                >
                  &nbsp;
                </li>
              );
            })}
          </ul>
          <h4 className="crew__position-name heading--fourth">
            {memberData.role}
          </h4>
          <h3 className="crew__member-name heading--tertiary">
            {memberData.name}
          </h3>
          <p className="crew__member-description body-text">{memberData.bio}</p>
        </div>
        <img
          src={memberData.images.png}
          alt="crewMember"
          className="crew__member-photo"
        />
      </section>
    </motion.div>
  );
}
