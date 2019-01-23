import React from 'react';
import styled from 'styled-components';
import SearchList from './SearchList';

const SearchStyle = styled.form`
  margin-bottom: 10rem;
  label{
    position: relative;
    display: block;
    width: 100%;
    max-width: 70rem;
    margin: auto;
  }
  input{
    appearance: none;
    display: block;
    width: 100%;
    height: 5rem;
    padding: 1rem 1.5rem;
    background: #202020;
    color: #fafafa;
    border: solid .2rem transparent;
    border-radius: var(--curve-radius);
    box-shadow: 0 .3rem .5rem rgba(10, 10, 10, .5);
    &:focus{
      outline: none;
      border-color: var(--color-link);
    }
  }
  button{
    appearance: none;
    display: block;
    width: 100%;
    height: 5rem;
    margin: 1rem 0;
    background: var(--color-brand-1);
    border: solid .2rem transparent;
    border-radius: var(--curve-radius);
    cursor: pointer;
    &:focus{
      outline: none;
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
      margin: auto;
      padding: 1rem 4rem;
      border-radius: 0 var(--curve-radius) var(--curve-radius) 0;
    }
  }
`;

const Search = () => (
  <SearchStyle>
    <label htmlFor="pageSearch">
      <input type="search" placeholder="Search Movies, Celebrities, Shows" />
      <button type="submit">Search</button>
      <SearchList />
    </label>
  </SearchStyle>
);

export default Search;
