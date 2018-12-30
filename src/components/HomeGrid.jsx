import React from 'react';
import styled, { css } from 'styled-components';

const HomeGridStyle = styled.div`
  display: grid;
  margin: 5rem 0;
`;

const Headline = styled.div`
  height: 32rem;
  padding: 4rem;
  ${({ image, color }) => image && css`
    background: linear-gradient(${color}, ${color}), url(${image});
    background-size: cover;
    background-position: center center;
  `}
  @media(min-width: 720px) {
    height: 28rem;
    &:nth-of-type(1) {
      grid-column: 1;
      grid-row: 1;
    }
    &:nth-of-type(2) {
      grid-column: 2 / 4;
      grid-row: 1;
    }
    &:nth-of-type(3) {
      grid-column: 1;
      grid-row: 2;
    }
    &:nth-of-type(4) {
      grid-column: 2;
      grid-row: 2;
    }
    &:nth-of-type(5) {
      grid-column: 3;
      grid-row: 2;
    }
    &:nth-of-type(6) {
      grid-column: 1;
      grid-row: 3;
    }
    &:nth-of-type(7) {
      grid-column: 2;
      grid-row: 3;
    }
    &:nth-of-type(8) {
      grid-column: 3;
      grid-row: 3;
    }
    &:nth-of-type(9) {
      grid-column: 1 / 3;
      grid-row: 4;
    }
    &:nth-of-type(10) {
      grid-column: 3;
      grid-row: 4;
    }
  }
  @media (min-width: 1020px) {
    height: 35rem;
  }
`;

const HomeGrid = () => (
  <HomeGridStyle>
    <Headline image="https://picsum.photos/200/300/?random" color="rgba(255, 201, 0, .8)">A</Headline>
    <Headline image="https://picsum.photos/200/300/?random" color="rgba(0, 0, 0, .5)">B</Headline>
    <Headline image="https://picsum.photos/200/300/?random" color="rgba(0, 0, 0, .5)">C</Headline>
    <Headline image="https://picsum.photos/200/300/?random" color="rgba(0, 0, 0, .5)">D</Headline>
    <Headline image="https://picsum.photos/200/300/?random" color="rgba(0, 0, 0, .5)">E</Headline>
    <Headline image="https://picsum.photos/200/300/?random" color="rgba(0, 0, 0, .5)">F</Headline>
    <Headline image="https://picsum.photos/200/300/?random" color="rgba(0, 0, 0, .5)">G</Headline>
    <Headline image="https://picsum.photos/200/300/?random" color="rgba(0, 0, 0, .5)">H</Headline>
    <Headline image="https://picsum.photos/200/300/?random" color="rgba(0, 0, 0, .5)">I</Headline>
    <Headline image="https://picsum.photos/200/300/?random" color="rgba(255, 201, 0, .8)">J</Headline>
  </HomeGridStyle>
);

export default HomeGrid;
