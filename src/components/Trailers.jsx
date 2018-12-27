import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Slider from 'react-slick';
import * as actionCreators from '../actionCreators';
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

const SlideItem = styled.div`
  padding: 1rem;
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

  load() {
    return (<p>Loading...</p>);
  }

  showTrailers() {
    const { trailers: { list } } = this.props;
    return (
      <Slider {...settings}>
        { list.map(slide => (
          <SlideItem key={slide.id}>
            <img src={slide.fields.preview[0].url} alt={slide.fields.title} />
          </SlideItem>
        )) }
      </Slider>
    );
  }

  render() {
    const { trailers: { ready } } = this.props;
    return ready === 'loading' ? this.load() : this.showTrailers();
  }
}

const mapStateToProps = ({ trailers }) => ({
  trailers,
});

const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Trailers);
