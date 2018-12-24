import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import '../../assets/slick/slick.css';
import '../../assets/slick/slick-theme.css';
import ArrowLeft from '../../assets/arrow-left.svg';
import ArrowRight from '../../assets/arrow-right.svg';

const ArrowStyle = styled.button`
  appearance: none;
  background: none;
  border: 0;
  padding: 0;
  &::before{
    display: none;
  }
  &.slick-next{
    right: -20px;
  }
  &.slick-prev{
    left: -30px;
  }
  svg{
    width: 28px;
    height: 28px;
    fill: #999;
  }
`;

/* eslint-disable react/prop-types */
const Previous = ({ className, onClick }) => (
  <ArrowStyle className={className} onClick={onClick}>
    <ArrowLeft />
  </ArrowStyle>
);

const Next = ({ className, onClick }) => (
  <ArrowStyle className={className} onClick={onClick}>
    <ArrowRight />
  </ArrowStyle>
);

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  infinite: true,
  swipeToSlide: true,
  nextArrow: <Next />,
  prevArrow: <Previous />,
  centerPadding: '50px',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ],
};

const Trailers = () => (
  <Slider {...settings}>
    <div>
      <img src="http://placehold.it/200" alt="placed" />
    </div>
    <div>
      <img src="http://placehold.it/200" alt="placed" />
    </div>
    <div>
      <img src="http://placehold.it/200" alt="placed" />
    </div>
    <div>
      <img src="http://placehold.it/200" alt="placed" />
    </div>
    <div>
      <img src="http://placehold.it/200" alt="placed" />
    </div>
  </Slider>
);

export default Trailers;
