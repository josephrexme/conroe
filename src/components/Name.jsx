import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getContentByReady,
  formatLocalDate,
  zodiacSign,
} from '../helpers/functions';
import { Container, FloatRight } from './util/Helpers';
import Search from './Search';
import {
  Heading2,
  Heading3,
  Heading4,
  Heading6
} from './util/Typography';
import * as actionCreators from '../actionCreators';
import { NotFound } from './Errors';

const PageStyle = styled.div`
  position: relative;
  margin-top: 15rem;
  margin-bottom: 8rem;
  padding: 2rem 0 5rem;
  background: #161616;
  box-shadow: 0 .2rem .5rem rgba(10, 10, 10, .5);
`;

const Content = styled.section`
  padding: 2rem;
  p{
    margin: 2rem 0;
  }
  article{
    margin-top: 3rem;
  }
  @media (min-width: 720px) {
    padding: 2rem 4rem;
  }
  ${props => props.leftpad && css`
    padding: 28rem 2rem 2rem 2rem;
    @media (min-width: 720px) {
      padding: 2rem 2rem 3rem 35rem;
    }
  `}
`;

const Actor = styled.div`
  position: absolute;
  top: -6rem;
  left: 0;
  width: 100%;
  padding: 0 2rem;
  text-align: center;
  img{
    width: 20rem;
    height: 20rem;
    border-radius: var(--curve-radius);
    object-fit: cover;
    box-shadow: 0 .8rem 1.5rem rgba(0, 0, 0, .8);
  }
  p{
    margin: 4rem 0;
    font-size: 1.4rem;
  }
  @media(min-width: 720px) {
    left: 3rem;
    width: 30rem;
    img{
      width: 25rem;
      height: 25rem;
    }
  }
`;

const FilmList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  li{
    padding: 2rem 2rem;
    &:nth-of-type(odd){
      background: #1c1c1c;
    }
  }
  strong{
    display: inline-block;
    margin-top: 1.6rem;
    color: #75736B;
  }
  h6{
    text-overflow: wrap;
    max-width: 90%;
  }
  @media(min-width: 720px) {
    li{
      padding: 2rem 4rem;
    }
  }
`;

const Starmeter = styled.div`
  position: absolute;
  top: 24rem;
  width: 90%;
  padding: 1.5rem 2rem;
  background: var(--color-brand-1);
  color: #222;
  font-weight: 700;
  box-shadow: 0 .8rem 1.5rem rgba(0, 0, 0, .8);
  @media(min-width: 722px) {
    top: 11.2rem;
    right: -2rem;
    width: 15rem;
  }
`;

const Photos = styled.div`
  img{
    width: 12rem;
    height: 12rem;
    margin-right: 1rem;
    border-radius: var(--curve-radius);
    object-fit: cover;
  }
`;

class Name extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    const { fetchName } = this.props;
    fetchName(params.id);
  }

  loading() {
    return null;
  }

  error() {
    return <NotFound />;
  }

  loaded() {
    const { name: { field } } = this.props;
    return (
      <Container>
        <Search />
        <PageStyle>
          <Content leftpad>
            <Actor>
              <img src={field.image && field.image[0].url} alt={field.name} />
              <p>
                <strong>Contact: </strong>
                <a href="/">View agent or request access</a>
              </p>
            </Actor>
            <Starmeter>
              {`${field.starmeter}/200`}
            </Starmeter>
            <div>
              <Heading2 condensed themed>{field.name}</Heading2>
              <p>
                {field.role}
              </p>
              <p>
                <strong>Born: </strong>
                {`${formatLocalDate(field.birth_date)} in ${field.birth_location}`}
              </p>
              <article>
                <p>
                  {field.bio}
                </p>
              </article>
              <Heading4 condensed themed>Official Photos</Heading4>
              <Photos>
                { field.photos && field.photos.map(photo => (
                  <img src={photo.url} alt="official shot" key={photo.id} />
                )) }
              </Photos>
            </div>
          </Content>
          <Content>
            <Heading3 condensed themed>Filmography</Heading3>
          </Content>
          <FilmList>
            <li>
              <FloatRight>
                <strong>2017</strong>
              </FloatRight>
              <Heading6><Link to="/">Movie Title</Link></Heading6>
              <p>Janet Doe</p>
            </li>
            <li>
              <FloatRight>
                <strong>2016</strong>
              </FloatRight>
              <Heading6><Link to="/">Movie Title</Link></Heading6>
              <p>Janet Doe</p>
            </li>
            <li>
              <FloatRight>
                <strong>2015</strong>
              </FloatRight>
              <Heading6><Link to="/">Movie Title</Link></Heading6>
              <p>Janet Doe</p>
            </li>
          </FilmList>
          <Content>
            <Heading3 condensed themed>Personal Details</Heading3>
            <p>
              <strong>Official Pages: </strong>
              { field.facebook && <a href={field.facebook}>Facebook</a> }
              { field.twitter && <a href={field.twitter}>Twitter</a> }
              { field.instagram && <a href={field.instagram}>Instagram</a> }
            </p>
            <p>
              <strong>Star Sign: </strong>
              {zodiacSign(field.birth_date)}
            </p>
            <p>
              <strong>Height: </strong>
              {field.height}
            </p>
            <p>
              <strong>Personal Quote: </strong>
            </p>
            <blockquote>
              {field.quote}
            </blockquote>
          </Content>
        </PageStyle>
      </Container>
    );
  }

  render() {
    const { name: { ready } } = this.props;
    return getContentByReady(ready, this);
  }
}

Name.propTypes = {
  fetchName: PropTypes.func.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
    url: PropTypes.string,
    isExact: PropTypes.bool,
    params: PropTypes.object,
  }).isRequired,
  name: PropTypes.shape({
    ready: PropTypes.string,
    field: PropTypes.object,
  }).isRequired,
};

const mapStateToProps = ({ name }) => ({
  name,
});

const mapDispatchToProps = dispatch => (bindActionCreators(actionCreators, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(Name);
