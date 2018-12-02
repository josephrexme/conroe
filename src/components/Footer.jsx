import React from 'react';
import styled from 'styled-components';
import { Container } from './util/Helpers';

const FooterStyle = styled.footer`
  display: flex;
  box-shadow: 0 .2rem .5rem rgba(10, 10, 10, .5);
  > div{
    padding: 4rem 2rem;
    &:first-of-type{
      flex-basis: 25%;
      background: var(--color-brand-1);
      color: #222;
      text-align: center;
    }
    &:last-of-type{
      position: relative;
      flex-basis: 75%;
      background: #161616;
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
    }
  }
`;

const Footer = () => (
  <Container>
    <FooterStyle>
      <div>
        <p>&copy; 2019 Nollywood DB</p>
        <h6>nollywooddb.com</h6>
      </div>
      <div>
        <h3>Footer content</h3>
        <p>
          Managed and owned by Strich LLC
        </p>
      </div>
    </FooterStyle>
  </Container>
);

export default Footer;
