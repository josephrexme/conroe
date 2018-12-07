import React from 'react';
import styled from 'styled-components';
import { Container } from './util/Helpers';
import Search from './Search';

const PageStyle = styled.div`
  position: relative;
  padding: 2rem 0;
  background: #161616;
  box-shadow: 0 .2rem .5rem rgba(10, 10, 10, .5);
`;

const Name = () => (
  <Container>
    <Search />
    <PageStyle>
      <h1>Artist Name</h1>
    </PageStyle>
  </Container>
);

export default Name;
