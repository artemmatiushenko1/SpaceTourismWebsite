import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../sass/_navigation.scss';
import logo from '../assets/shared/logo.svg';
import iconHumburger from '../assets/shared/icon-hamburger.svg';
import iconClose from '../assets/shared/icon-close.svg';

export default function Navigation() {
  const [visible, setVisible] = useState(false);
  const onPageSelected = () => {
    setVisible(false);
  };

  return (
    <nav className="navigation">
      <img className="navigation__logo" src={logo} alt="logo" />
      <img
        src={visible ? iconClose : iconHumburger}
        alt="nav-btn"
        className="navigation__toogle-btn"
        onClick={() => {
          setVisible(!visible);
        }}
      />
      <ul
        className={
          'navigation__links' +
          (!visible ? ' navigation__hidden' : ' navigation__active')
        }
      >
        <li className="navigation__item">
          <NavLink
            to="/"
            className="navigation__link"
            data-location="home"
            onClick={onPageSelected}
          >
            <span className="navigation__item-number">00</span>Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/destination"
            className="navigation__link"
            data-location="destination"
            onClick={onPageSelected}
          >
            <span className="navigation__item-number">01</span>Destination
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/crew"
            className="navigation__link"
            data-location="crew"
            onClick={onPageSelected}
          >
            <span className="navigation__item-number">02</span>Crew
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            to="/technology"
            data-location="technology"
            className="navigation__link"
            onClick={onPageSelected}
          >
            <span className="navigation__item-number">03</span>Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
