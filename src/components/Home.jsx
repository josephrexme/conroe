import React from 'react';
import styled from 'styled-components';
import Trailers from './Trailers';
import Feed from './Feed';
import { Container, Page } from './util/Helpers';
import { Heading1, Heading3 } from './util/Typography';
import SearchList from './SearchList';

const HomeStyle = styled.div`
  padding: 2rem;
  header{
    text-align: center;
  }
  input{
    appearance: none;
    display: block;
    width: 100%;
    height: 5rem;
    padding: 1rem 1.5rem;
    border: solid .2rem transparent;
    border-radius: var(--curve-radius);
    background: rgba(255, 255, 255, .2);
    color: #eee;
    box-shadow: 0 .2rem .4rem rgba(0, 0, 0, .5);
    &::placeholder{
      color: #bbb;
    }
    &:focus{
      outline: none;
      background: rgba(255, 255, 255, .8);
      color: #333;
      border-color: var(--color-link);
      &::placeholder{
        color: #555;
      }
    }
  }
  label{
    display: block;
    position: relative;
    width: 100%;
    height: 4rem;
    max-width: 60rem;
    margin: 5.8rem auto;
  }
  button{
    display: block;
    width: 100%;
    height: 5rem;
    margin: 1rem 0;
    padding: .5rem 3rem;
    border: solid .2rem transparent;
    border-radius: var(--curve-radius);
    background: var(--color-brand-1);
    cursor: pointer;
    &:focus{
      outline: none;
      background: var(--color-brand-2);
      border-color: var(--color-link);
    }
    &:hover, &:focus{
      background: var(--color-brand-2);
    }
  }
  @media (min-width: 720px) {
    input{
      padding: 1rem 12rem 1rem 1.5rem;
    }
    button{
      position: absolute;
      top: 0;
      right: 0;
      width: auto;
      margin: 0;
      padding: 1rem 3rem;
      border-radius: 0 var(--curve-radius) var(--curve-radius) 0;
    }
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
            <input type="search" placeholder="Search Movies, Celebrities, Shows" id="mainSearch" />
            <button type="submit">Search</button>
            <SearchList />
          </label>
        </form>
      </header>
    </HomeStyle>
    <Page>
      <Heading3 condensed themed>Browse Trailers</Heading3>
      <Trailers />
    </Page>
    <Feed />
  </Container>
);

export default Home;
