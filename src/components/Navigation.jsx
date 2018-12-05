import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import NDBLogo from '../../assets/ndb-logo.svg';

const NavStyle = styled.nav`
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 5rem 3rem;
  @media (min-width: 762px) {
    padding: 8rem 6rem;
  }
  svg{
    position: relative;
    z-index: 100;
  }
  div{
    position: absolute;
    top: 10rem;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 4rem 0 0;
    z-index: -1;
    opacity: 0;
    > * {
      position: relative;
      display: block;
      padding: 2rem 1rem;
      font-size: 3rem;
      text-align: center;
      transform: translateY(10rem);
      opacity: 0;
      transition: transform .4s ease-in-out, opacity .5s ease-in;
      &:nth-of-type(1){
        transition-delay: .02s;
      }
      &:nth-of-type(2){
        transition-delay: .06s;
      }
      &:nth-of-type(3){
        transition-delay: .10s;
      }
      &:nth-of-type(4){
        transition-delay: .14s;
      }
      &:nth-of-type(5){
        transition-delay: .18s;
      }
      &::before, &::after{
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10rem;
        height: 10rem;
        border: solid .2rem rgba(255, 255, 255, .1);
        border-radius: 50%;
        content: '';
        opacity: 0;
        transition: transform .3s, opacity .3s;
        transform: translateX(-50%) translateY(-50%) scale(0.1);
      }
      &::after{
        width: 8rem;
        height: 8rem;
        border-width: .6rem;
        transform: translateX(-50%) translateY(-50%) scale(0.3);
      }
      &:hover::before, &:hover::after, &:focus::before, &:focus::after{
        opacity: 1;
        transform: translateX(-50%) translateY(-50%) scale(0.7);
      }
    }
    @media(min-width: 762px) {
      position: static;
      opacity: 1;
      z-index: 0;
      background: none;
      width: auto;
      height: auto;
      padding: 0;
      > * {
        display: inline-block;
        margin-left: 2rem;
        padding: 0;
        font-size: 1.6rem;
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
  ${props => props.nav && css`
    div{
      opacity: 1;
      z-index: 100;
      > *{
        transform: translateY(0);
        opacity: 1;
      }
    }
  `}
  a{
    color: inherit;
    &:hover, &:focus{
      color: #888;
    }
  }
`;

const Hamburger = styled.button`
  appearance: none;
  position: relative;
  display: block;
  position: absolute;
  top: 5rem;
  right: 3.5rem;
  z-index: 99;
  width: 3rem;
  height: 3rem;
  padding: 0;
  background: none;
  border: 0;
  cursor: pointer;
  &:focus{
    outline: none;
  }
  span{
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    border: solid thin #fff;
    width: 100%;
    transition: transform .5s ease, transform-origin .5s ease;
    &:first-of-type{
      top: 0;
    }
    &:nth-of-type(2){
      top: 1rem;
      width: 60%;
    }
    &:last-of-type{
      top: 2rem;
    }
  }
  &::after{
    position: absolute;
    top: -.5rem;
    right: -.5rem;
    z-index: -1;
    content: '';
    width: 4rem;
    height: 4rem;
    background: #000;
    border-radius: 50%;
    transition: transform .5s ease;
  }
  @media (min-width: 762px){
    display: none;
  }
  ${props => props.nav && css`
    span{
      &:first-of-type{
        transform: rotate(-45deg);
        transform-origin: top right;
      }
      &:nth-of-type(2){
        transform: scaleX(0);
      }
      &:last-of-type{
        transform: rotate(45deg);
        transform-origin: bottom right;
      }
    }
    &::after{
      transform: scale(100);
    }
  `}
`;

class Navigation extends Component {
  state = {
    mobileNav: false
  };

  showMenu = () => {
    const { mobileNav } = this.state;
    this.setState({
      mobileNav: !mobileNav,
    });
  }

  render() {
    const { mobileNav } = this.state;
    return (
      <NavStyle nav={mobileNav}>
        <Link to="/">
          <NDBLogo width={60} />
        </Link>
        <Hamburger nav={mobileNav} onClick={this.showMenu}>
          <span />
          <span />
          <span />
        </Hamburger>
        <div>
          <Link to="/movies">Movies</Link>
          <Link to="/movies">TV Shows</Link>
          <Link to="/events">Events</Link>
          <Link to="/news">News</Link>
          <Link to="/celebrities">Celebrities</Link>
        </div>
      </NavStyle>
    );
  }
}

export default Navigation;
