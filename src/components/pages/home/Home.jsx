import React from 'react';
import './Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home">
      <div className="home__text-box">
        <h5 className="home__subheading heading--fifth">
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1 className="home__heading heading--primary">SPACE</h1>
        <p className="home__paragraph body-text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destination" className="home__btn-explore">
        Explore
      </Link>
    </section>
  );
};

export default Home;
