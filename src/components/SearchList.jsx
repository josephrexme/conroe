import React from 'react';
import styled from 'styled-components';

const ListStyle = styled.ul`
  display: none;
  position: absolute;
  left: .5rem;
  top: 5.1rem;
  z-index: 10;
  list-style-type: none;
  width: 96%;
  margin: 0;
  padding: 0;
  border-radius: 0 0 .5rem .5rem;
  text-align: left;
  background: rgba(0, 0, 0, .8);
  li{
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    &:not(:last-of-type){
      border-bottom: solid thin #222;
    }
  }
  a{
    color: var(--color-brand-2);
  }
  span{
    color: #aaa;
    font-size: 1.4rem;
  }
  @media (min-width: 720px) {
    width: 80%;
  }
`;

const SearchList = () => (
  <ListStyle>
    <li>
      <a href="/">The Legend of FooBar</a>
      <span>Movie</span>
    </li>
    <li>
      <a href="/">The Legend of FooBar</a>
      <span>Movie</span>
    </li>
    <li>
      <a href="/">The Legend of FooBar and his little penguin brothers that live alone down the lake</a>
      <span>Movie</span>
    </li>
  </ListStyle>
);

export default SearchList;
