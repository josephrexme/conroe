import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Navigation = () => (
  <NavStyle>
    <h1>NDB</h1>
    <div>
      <Link to="/movies">Movies</Link>
      <Link to="/movies">TV Shows</Link>
      <Link to="/events">Events</Link>
      <Link to="/news">News</Link>
      <Link to="/celebrities">Celebrities</Link>
    </div>
  </NavStyle>
);

export default Navigation;
