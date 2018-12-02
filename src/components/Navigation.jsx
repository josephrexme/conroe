import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NDBLogo from '../../assets/ndb-logo.svg';

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 8rem 5rem;
  h1{
    margin: 0;
  }
  a{
    display: inline-block;
    margin-left: 1.5rem;
  }
`;

const Navigation = () => (
  <NavStyle>
    <Link to="/">
      <NDBLogo width={50} />
    </Link>
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
