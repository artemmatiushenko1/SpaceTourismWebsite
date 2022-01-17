import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import logo from '../../assets/shared/logo.svg';
import MobileNavigation from '../MobileNavigation';
import ROUTES from '../../constants/routes';

const NavigationItem = ({ children, to }) => {
  return (
    <li className="navigation__item">
      <NavLink to={to} className="navigation__link">
        {children}
      </NavLink>
    </li>
  );
};

const Navigation = () => {
  return (
    <nav className="navigation">
      <img className="navigation__logo" src={logo} alt="logo" />
      <MobileNavigation />
      <ul className="navigation__links">
        {Object.keys(ROUTES).map((route, i) => {
          const routeName = route[0].toUpperCase() + route.slice(1);
          return (
            <NavigationItem to={ROUTES[route]}>
              <span className="navigation__item-number">{`0${i}`}</span>
              {routeName}
            </NavigationItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
