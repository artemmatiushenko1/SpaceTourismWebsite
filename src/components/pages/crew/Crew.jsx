import React, { useState } from 'react';
import './_crew.scss';
import data from '../../../data/data.json';
import Tabs from './Tabs';

export default function Crew() {
  const { crew } = data;
  const [memberData, setMemberData] = useState(crew[0]);

  const onTabSelectedHandler = (index) => {
    setMemberData(crew[index]);
  };

  return (
    <section className="crew">
      <div className="crew__content">
        <h5 className="crew__heading heading--fifth">
          <span>02</span>Meet your crew
        </h5>
        <div className="crew__text-box">
          <Tabs
            className="crew__dots-component"
            data={new Array(4).fill(' ')}
            onTabSelected={onTabSelectedHandler}
            tabClassName="crew__dot"
            activeTabClassName="crew__dot--active"
          />
          <h4 className="crew__position-name heading--fourth">
            {memberData.role}
          </h4>
          <h3 className="crew__member-name heading--tertiary">
            {memberData.name}
          </h3>
          <p className="crew__member-description body-text">{memberData.bio}</p>
        </div>
      </div>
      <img
        src={memberData.images.png}
        alt="crewMember"
        className="crew__member-photo"
      />
    </section>
  );
}
