import React from 'react';
import '../sass/_navigation.scss';
import logo from '../assets/shared/logo.svg';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="navigation">
      <img className="navigation__logo" src={logo} alt="logo" />
      <ul className="navigation__links">
        <li className="navigation__item">
          <NavLink to="/" className="navigation__link navigation__link--active">
            <span className="navigation__item-number">00</span>Home
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/destination" className="navigation__link">
            <span className="navigation__item-number">01</span>Destination
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/crew" className="navigation__link">
            <span className="navigation__item-number">02</span>Crew
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink to="/technology" className="navigation__link">
            <span className="navigation__item-number">03</span>Technology
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
