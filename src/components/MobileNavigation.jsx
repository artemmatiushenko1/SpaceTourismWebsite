import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import iconHumburger from '../assets/shared/icon-hamburger.svg';
import iconClose from '../assets/shared/icon-close.svg';
import '../styles/_mobile-navigation.scss';

export default function MobileNavigation() {
  const [visible, setVisible] = useState(false);
  const onPageSelected = () => {
    setVisible(false);
  };

  return (
    <>
      <img
        src={visible ? iconClose : iconHumburger}
        alt="toogle-btn"
        className="mob-navigation__toogle-btn"
        onClick={() => {
          setVisible(!visible);
        }}
      />
      <ul
        className={
          'mob-navigation__links' +
          (!visible ? ' mob-navigation__hidden' : ' mob-navigation__active')
        }
      >
        <li className="mob-navigation__item">
          <NavLink
            to="/"
            className="mob-navigation__link"
            data-location="home"
            onClick={onPageSelected}
          >
            <span className="mob-navigation__item-number">00</span>Home
          </NavLink>
        </li>
        <li className="mob-navigation__item">
          <NavLink
            to="/destination"
            className="mob-navigation__link"
            data-location="destination"
            onClick={onPageSelected}
          >
            <span className="mob-navigation__item-number">01</span>Destination
          </NavLink>
        </li>
        <li className="mob-navigation__item">
          <NavLink
            to="/crew"
            className="mob-navigation__link"
            data-location="crew"
            onClick={onPageSelected}
          >
            <span className="mob-navigation__item-number">02</span>Crew
          </NavLink>
        </li>
        <li className="mob-navigation__item">
          <NavLink
            to="/technology"
            data-location="technology"
            className="mob-navigation__link"
            onClick={onPageSelected}
          >
            <span className="mob-navigation__item-number">03</span>Technology
          </NavLink>
        </li>
      </ul>
    </>
  );
}
