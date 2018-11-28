import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

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
    <div className="error">
      <h3>
        <strong>404:</strong>
        Page not found
      </h3>
      <p>This page does not exist</p>
    </div>
  </Status>
);

export const NoAccess = () => (
  <Status code="401">
    <div className="error">
      <h3>Restricted Access</h3>
      <p>You are not authorized to view this page</p>
    </div>
  </Status>
);

Status.propTypes = {
  code: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};
