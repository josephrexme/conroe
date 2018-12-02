import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonStyle = styled.button`
  display: inline-block;
  border: 0;
  ${props => props.variant === 'primary' && css`
    background: #0be;
  `}
`;

const Button = ({ children, type, variant }) => (
  <ButtonStyle type={type} variant={variant}>{children}</ButtonStyle>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  type: 'submit',
  variant: '',
};

export default Button;
