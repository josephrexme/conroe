import React from 'react';
import styled from 'styled-components';
import { Container } from './util/Helpers';
import { Heading1 } from './util/Typography';

const HomeStyle = styled.div`
  padding: 4rem 2rem;
  header{
    text-align: center;
  }
  input{
    display: block;
    width: 100%;
    height: 4rem;
    padding: 0 2rem;
    border: 0;
    border-radius: var(--curve-radius);
    background: rgba(255, 255, 255, .2);
    color: #eee;
    box-shadow: 0 .2rem .4rem rgba(0, 0, 0, .5);
  }
  label{
    display: block;
    position: relative;
    width: 100%;
    max-width: 60rem;
    margin: 5.8rem auto;
  }
  button{
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    padding: 1rem 3rem;
    border: 0;
    border-radius: 0 var(--curve-radius) var(--curve-radius) 0;
    background: var(--color-brand-1);
  }
`;

const Home = () => (
  <Container>
    <HomeStyle>
      <header>
        <Heading1>NOLLYWOOD DATABASE</Heading1>
        <p>Your most reliable source on the Nigerian movie industry</p>
        <form action="">
          <label htmlFor="mainSearch">
            <input type="search" id="mainSearch" />
            <button type="submit">Search</button>
          </label>
        </form>
      </header>
    </HomeStyle>
  </Container>
);

export default Home;
