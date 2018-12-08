import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { Container, FloatRight } from './util/Helpers';
import Search from './Search';
import {
  Heading2,
  Heading3,
  Heading4,
  Heading6
} from './util/Typography';

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
    padding: 20rem 2rem 2rem 2rem;
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

const Photos = styled.div`
  img{
    width: 12rem;
    height: 12rem;
    margin-right: 1rem;
    border-radius: var(--curve-radius);
    object-fit: cover;
  }
`;

const Name = () => (
  <Container>
    <Search />
    <PageStyle>
      <Content leftpad>
        <Actor>
          <img src="http://placehold.it/200" alt="Actor" />
          <p>
            <strong>Contact: </strong>
            <a href="/">View agent or request access</a>
          </p>
        </Actor>
        <div>
          <Heading2 condensed themed>Artist Name</Heading2>
          <p>
            Actress/Producer
          </p>
          <p>
            <strong>Born: </strong>
            21 October 1976 in Lagos, Nigeria
          </p>
          <article>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eos libero commodi nulla error natus unde vero veniam
              quibusdam quis omnis laudantium quisquam repudiandae minus
              nemo alias? Corrupti quae sed vel voluptas, error accusamus
              Possimus accusantium, voluptatibus iste repellendus dolorem
              Repellendus fuga vero nostrum officiis, vel culpa eius
              voluptatibus magni non exercitationem in pariatur similique
              animi, labore sint? Voluptate, pariatur reiciendis.
            </p>
          </article>
          <Heading4 condensed themed>Official Photos</Heading4>
          <Photos>
            <img src="http://placehold.it/200" alt="official shot" />
            <img src="http://placehold.it/200" alt="official shot" />
            <img src="http://placehold.it/200" alt="official shot" />
            <img src="http://placehold.it/200" alt="official shot" />
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
          <a href="/">Facebook</a>
        </p>
        <p>
          <strong>Star Sign: </strong>
          Libra
        </p>
        <p>
          <strong>Height: </strong>
          { '5"8' }
        </p>
        <p>
          <strong>Personal Quotes: </strong>
          Fun is a requirement in a successful life.
        </p>
      </Content>
    </PageStyle>
  </Container>
);

export default Name;
