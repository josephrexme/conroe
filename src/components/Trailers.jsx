import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components';
import Slider from 'react-slick';
import * as actionCreators from '../actionCreators';
import { getContentByReady } from '../helpers/functions';
import ArrowLeft from '../../assets/arrow-left.svg';
import ArrowRight from '../../assets/arrow-right.svg';
import PlayButton from '../../assets/play-video-nmdb.svg';

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

const SlideItem = styled.div`
  padding: 1rem;
  outline: none;
  svg{
    width: 8rem;
    fill: rgba(255, 255, 255, .6);
    stroke: rgba(255, 255, 255, .6);
    cursor: pointer;
  }
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 24rem;
    background-size: cover;
    background-position: center center;
    border-radius: .4rem;
    @media(min-width: 420px) {
      height: 28rem;
    }
    @media(min-width: 500px) {
      height: 32rem;
    }
    @media(min-width: 570px) {
      height: 35rem;
    }
    ${({ preview }) => css`
      background-image: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .6)), url(${preview});
    `}
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

class Trailers extends Component {
  componentDidMount() {
    const { fetchTrailers } = this.props;
    fetchTrailers();
  }

  loading() {
    return (<p>Loading...</p>);
  }

  loaded() {
    const { trailers: { list } } = this.props;
    return (
      <Slider {...settings}>
        { list.map(slide => (
          <SlideItem key={slide.id} preview={slide.fields.preview[0].url}>
            <div title={slide.fields.title}>
              <PlayButton />
            </div>
          </SlideItem>
        )) }
      </Slider>
    );
  }

  error() {
    return (<p>An error occured</p>);
  }

  render() {
    const { trailers: { ready } } = this.props;
    return getContentByReady(ready, this);
  }
}

const mapStateToProps = ({ trailers }) => ({
  trailers,
});

const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Trailers);
