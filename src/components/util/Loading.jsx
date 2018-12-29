import React from 'react';
import styled, { keyframes } from 'styled-components';

const flip = keyframes`
  to{
    transform: rotateX(1turn);
  }
`;

const LoadStyle = styled.div`
  margin: 4rem 0;
  font: 2.6rem/1.5 Monospace;
  color: var(--color-brand-1);
  text-align: center;
  perspective: 100px;
  span{
    animation: ${flip} 1.5s infinite;
    display: inline-block;
    transform-origin: 50% 50% -10px;
    transform-style: preserve-3d;
    &:nth-child(1){
      animation-delay: .1s;
    }
    &:nth-child(2){
      animation-delay: .2s;
    }
    &:nth-child(3){
      animation-delay: .3s;
    }
    &:nth-child(4){
      animation-delay: .4s;
    }
    &:nth-child(5){
      animation-delay: .5s;
    }
    &:nth-child(6){
      animation-delay: .6s;
    }
    &:nth-child(7){
      animation-delay: .7s;
    }
  }
`;

const Loading = () => (
  <LoadStyle>
    <span>L</span>
    <span>o</span>
    <span>a</span>
    <span>d</span>
    <span>i</span>
    <span>n</span>
    <span>g</span>
  </LoadStyle>
);

export default Loading;
