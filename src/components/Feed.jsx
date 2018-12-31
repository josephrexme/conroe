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

class Feed extends Component {
  componentDidMount() {
    const { fetchFeed } = this.props;
    fetchFeed();
  }

  loading() {
    return (<Loading />);
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
            color={colorOverlayByRole(fields.role)}
            key={id}
          >
            {fields.role}
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
