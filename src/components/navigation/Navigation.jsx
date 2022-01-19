import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from 'assets/shared/logo.svg';
import ROUTES from 'constants/routes';
import './Navigation.scss';
import { Hamburger } from 'components/common';

const NavigationItem = ({ children, to, onClick }) => {
  return (
    <li className={`navigation__item`} onClick={onClick}>
      <NavLink to={to} className={`navigation__link`}>
        {children}
      </NavLink>
    </li>
  );
};

const NaviagationItems = ({ onClick, isHidden }) => {
  return (
    <ul className={`navigation__links ${isHidden ? 'navigation--hidden' : ''}`}>
      {Object.keys(ROUTES).map((route, i) => {
        const routeName = route[0].toUpperCase() + route.slice(1);
        return (
          <NavigationItem key={i} to={ROUTES[route]} onClick={onClick}>
            <span className={`navigation__item-number`}>{`0${i}`}</span>
            {routeName}
          </NavigationItem>
        );
      })}
    </ul>
  );
};

const Navigation = () => {
  const [isMobileScreen, setIsMobileScreen] = useState(window.innerWidth < 600);
  const [isMobNavVisible, setIsMobNavVisible] = useState(false);
  const isMobNavClosed = isMobileScreen && !isMobNavVisible;

  const onHamburgerClickHandler = () => {
    setIsMobNavVisible(!isMobNavVisible);
  };

  const onNavItemClickHandler = () => {
    setIsMobNavVisible(false);
  };

  const onScreenResizeHandler = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 600) {
      setIsMobileScreen(false);
      return;
    }
    setIsMobileScreen(true);
  };

  useEffect(() => {
    window.addEventListener('resize', onScreenResizeHandler);
    return () => {
      window.removeEventListener('resize', onScreenResizeHandler);
    };
  });

  return (
    <nav className="navigation">
      <img className="navigation__logo" src={logo} alt="logo" />
      {isMobileScreen && (
        <Hamburger
          visible={!isMobNavClosed}
          onClick={onHamburgerClickHandler}
        />
      )}
      <NaviagationItems
        isHidden={isMobNavClosed}
        onClick={onNavItemClickHandler}
      />
    </nav>
  );
};

export default Navigation;
