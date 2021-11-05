import React from 'react';
import '../sass/_navigation.scss';
import logo from '../assets/shared/logo.svg';

export default function Navigation() {
  return (
    <nav className="navigation">
      <img className="navigation__logo" src={logo} alt="logo" />
      <ul className="navigation__links">
        <li className="navigation__item">
          <a href="#" className="navigation__link navigation__link--active">
            <span className="navigation__item-number">00</span>Home
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__item-number">01</span>Destination
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__item-number">02</span>Crew
          </a>
        </li>
        <li className="navigation__item">
          <a href="#" className="navigation__link">
            <span className="navigation__item-number">03</span>Technology
          </a>
        </li>
      </ul>
    </nav>
  );
}
