import React from 'react';
import './Hamburger.scss';
import iconClose from '../../assets/shared/icon-close.svg';
import iconHumburger from '../../assets/shared/icon-hamburger.svg';

const Hamburger = ({ visible, onClick }) => {
  return (
    <img
      src={visible ? iconClose : iconHumburger}
      alt="hamburger"
      className="hamburger"
      onClick={onClick}
    />
  );
};

export default Hamburger;
