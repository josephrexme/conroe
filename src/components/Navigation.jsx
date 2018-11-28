import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <header>
    <h1>NDB</h1>
    <nav>
      <Link to="/movies">Movies</Link>
      <Link to="/movies">TV Shows</Link>
      <Link to="/events">Events</Link>
      <Link to="/news">News</Link>
      <Link to="/celebrities">Celebrities</Link>
    </nav>
  </header>
);

export default Navigation;
