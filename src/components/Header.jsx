import React from 'react';
import data from '../data/data';

export default function Header() {
  console.log(data.destinations[0].images.png);
  return (
    <div>
      <div>
        <img src={data.destinations[2].images.png} alt="pic"></img>
      </div>
    </div>
  );
}
