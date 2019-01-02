import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import * as actionCreators from '../actionCreators';
import { getContentByReady, colorOverlayByRole } from '../helpers/functions';
import Loading from './util/Loading';

const FeedStyle = styled.div`
  display: grid;
  margin: 5rem 0;
`;

const Content = styled.div`
  max-width: 100%;
  overflow: hidden;
  h2{
    position: relative;
    visibility: hidden;
    top: -8rem;
    height: 0;
    margin: 0;
  }
  h3, h4{
    max-width: 100%;
    margin: .5rem 0;
  }
`;

const Headline = styled.div`
  height: 32rem;
  overflow: hidden;
  > a {
    display: flex;
    width: 100%;
    height: 100%;
    padding: 4rem;
    color: inherit;
    transition: transform .5s ease-in-out;
    ${({ image, color }) => image && css`
      background: linear-gradient(${color}, ${color}), url(${image});
      background-size: cover;
      background-position: top center;
    `}
    &:hover{
      transform: scale(1.05);
    }
  }
  ${({ role }) => role === 'event' && css`
  text-align: center;
  color: #333;
    > a{
      align-items: center;
      justify-content: center;
    }
    h4{
      font-weight: 400;
      font-size: 1.4rem;
    }
  `}
  ${({ role }) => role === 'news' && css`
    > a{
      align-items: flex-end;
      justify-content: flex-start;
    }
    h3{
      font-family: 'Open Sans Condensed';
      font-weight: 300;
      font-size: 3rem;
      line-height: 1.0;
    }
    h4{
      position: relative;
      margin-top: 1rem;
      &::before{
        content: '';
        position: absolute;
        top: -.3rem;
        left: 0;
        width: 50%;
        border: solid thin var(--color-brand-2);
      }
    }
  `}
  ${({ role }) => role === 'spotlight' && css`
  text-align: center;
    > a{
      align-items: flex-end;
      justify-content: center;
    }
    h3{
      font-weight: 400;
      font-size: 1.6rem;
    }
    h4{
      position: relative;
      margin-top: 1rem;
      &::before{
        content: '';
        position: absolute;
        top: -.4rem;
        left: 0;
        right: 0;
        width: 30%;
        margin: 0 auto;
        border: solid thin var(--color-brand-2);
      }
    }
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

class Feed extends Component {
  componentDidMount() {
    const { fetchFeed } = this.props;
    fetchFeed();
  }

  loading() {
    return <Loading />;
  }

  loaded() {
    const { feed: { entries } } = this.props;
    /* eslint-disable-next-line */
    console.log(entries);
    return (
      <FeedStyle>
        { entries && entries.map(({ id, fields }) => (
          <Headline
            image={fields.image && fields.image[0].url}
            role={fields.role}
            color={colorOverlayByRole(fields.role)}
            key={id}
          >
            <a href={fields.link}>
              <Content>
                <h2>Lorem ipsum dolor sit amet cotronomy trfo</h2>
                <h3>{fields.title}</h3>
                <h4>{fields.subtitle}</h4>
              </Content>
            </a>
          </Headline>
        )) }
      </FeedStyle>
    );
  }

  error() {
    return (<p>An error occured</p>);
  }

  render() {
    const { feed: { ready } } = this.props;
    return getContentByReady(ready, this);
  }
}

Feed.propTypes = {
  fetchFeed: PropTypes.func.isRequired,
  feed: PropTypes.shape({
    ready: PropTypes.string,
    entries: PropTypes.array,
  }).isRequired,
};

const mapStateToProps = ({ feed }) => ({
  feed,
});

const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Feed);
