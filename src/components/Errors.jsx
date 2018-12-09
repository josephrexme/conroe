import React from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from './util/Helpers';
import Error404 from '../../assets/404sign-ndb.svg';
import { Heading5 } from './util/Typography';
import Button from './util/Button';

const ErrorStyle = styled.div`
  margin: 10rem 0;
  text-align: center;
`;

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if(staticContext) {
      /* eslint-disable-next-line no-param-reassign */
      staticContext.status = code;
    }
    return children;
  }}
  />
);

export const NotFound = () => (
  <Status code="404">
    <ErrorStyle>
      <Container>
        <Error404 width="70%" />
        <Heading5>THE CONTENT YOU ARE LOOKING FOR DOES NOT EXIST</Heading5>
        <Link to="/">
          <Button size="big" variant="primary">VISIT HOMEPAGE</Button>
        </Link>
      </Container>
    </ErrorStyle>
  </Status>
);

export const NoAccess = () => (
  <Status code="401">
    <ErrorStyle>
      <Container>
        <h3>Restricted Access</h3>
        <p>You are not authorized to view this page</p>
      </Container>
    </ErrorStyle>
  </Status>
);

Status.propTypes = {
  code: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
