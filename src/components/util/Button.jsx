import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonStyle = styled.button`
  display: inline-block;
  ${props => props.primary && css`
    background: #0be;
  `}
`;

const Button = ({ children, type }) => (
  <ButtonStyle type={type}>{children}</ButtonStyle>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: 'submit'
};

export default Button;
