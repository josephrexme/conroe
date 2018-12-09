import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const ButtonStyle = styled.button`
  apperance: none;
  display: inline-block;
  padding: 1rem 2rem;
  border: solid 2px transparent;
  cursor: pointer;
  ${({ variant }) => variant === 'primary' && css`
    background: var(--color-brand-1);
    border-radius: var(--curve-radius);
    &:hover{
      background: var(--color-brand-2);
    }
  `}
  ${({ size }) => size === 'big' && css`
    margin: 2rem 0;
    padding: 2rem 4rem;
  `}
`;

const Button = props => (
  <ButtonStyle {...props} />
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  variant: PropTypes.string,
  size: PropTypes.string,
};

Button.defaultProps = {
  type: 'submit',
  variant: '',
  size: 'normal',
};

export default Button;
