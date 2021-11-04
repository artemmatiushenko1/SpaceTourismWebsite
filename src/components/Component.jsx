import React from 'react';
import data from '../data/data.json';

export default function component() {
  return (
    <div>
      <div>
        <img src={data.destinations[0].images.png} alt="pic"></img>
      </div>
    </div>
  );
}
