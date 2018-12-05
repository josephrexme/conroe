import React from 'react';
import styled from 'styled-components';
import { Grid, GridCol } from 'griz';
import { Container } from './util/Helpers';
import { Heading4, Heading6 } from './util/Typography';
import NDBLogo from '../../assets/ndb-logo-black.svg';

const FooterStyle = styled.footer`
  box-shadow: 0 .2rem .5rem rgba(10, 10, 10, .5);
  > div{
    &:first-of-type{
      display: flex;
      flex-basis: 25%;
      align-items: center;
      justify-content: center;
      padding: 4rem;
      background: var(--color-brand-1);
      color: #222;
      text-align: center;
    }
    &:last-of-type{
      position: relative;
      flex-basis: 75%;
      background: #161616;
      > div{
        padding: 2rem 4rem 8rem;
      }
      p{
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        margin: 0;
        padding: 2rem;
        background: #0e0e0e;
        color: #514b36;
        font-size: 1.4rem;
        text-align: center;
      }
      a{
        display: block;
        margin: 1rem 0;
        color: #a2a2a2;
        &:hover{
          color: #777;
        }
      }
    }
  }
  @media (min-width: 762px) {
    display: flex;
    > div:last-of-type > div {
      padding: 3rem 5rem 8rem;
    }
  }
  @media (min-width: 1020px) {
    > div:last-of-type > div {
      padding: 4rem 6rem 8rem;
    }
  }
`;

const Footer = () => (
  <Container>
    <FooterStyle>
      <div>
        <div>
          <NDBLogo width={60} />
          <p>&copy; 2019 NollywoodDB</p>
          <Heading6>nollywooddb.com</Heading6>
        </div>
      </div>
      <div>
        <div>
          <Grid responsiveMd>
            <GridCol>
              <Heading4 condensed>Movies</Heading4>
              <a href="/">Exclusives</a>
              <a href="/">Top Rated Reviews</a>
              <a href="/">Box Office</a>
              <a href="/">Coming Soon</a>
              <a href="/">In Theaters</a>
            </GridCol>
            <GridCol>
              <Heading4 condensed>Community</Heading4>
              <a href="/">Headlines</a>
              <a href="/">Become an Author</a>
              <a href="/">Events</a>
              <a href="/">Social</a>
            </GridCol>
            <GridCol>
              <Heading4 condensed>Celebrities</Heading4>
              <a href="/">Interviews</a>
              <a href="/">Stories</a>
              <a href="/">Gallery</a>
              <a href="/">Awards</a>
              <a href="/">Filmography</a>
            </GridCol>
          </Grid>
        </div>
        <p>
          Managed and owned by Strich LLC
        </p>
      </div>
    </FooterStyle>
  </Container>
);

export default Footer;
