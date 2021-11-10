import React from 'react';
import '../sass/_home.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      initial={{ translateX: '100%', scale: 0.1, opacity: 0 }}
      animate={{ translateX: 0, scale: 1, opacity: 1 }}
      exit={{ translateX: '-100%', scale: 0.5, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section className="home">
        <div className="home__text-box">
          <h5 className="home__subheading heading--fifth">
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="home__heading heading--primary">SPACE</h1>
          <p className="home__paragraph body-text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link to="/destination" className="home__btn-explore">
          Explore
        </Link>
      </section>
    </motion.div>
  );
}
