import styled, { css } from 'styled-components';

export const Heading1 = styled.h1`
  margin: 1.5rem 0;
  font-size: 4.2rem;
  font-weight: 700;
  ${props => props.condensed && css`
    font-family: var(--font-secondary);
  `}
  ${props => props.themed && css`
    color: var(--color-brand-1);
  `}
`;

export const Heading2 = styled.h2`
  margin: 1.5rem 0;
  font-size: 3.6rem;
  font-weight: 700;
  ${props => props.condensed && css`
    font-family: var(--font-secondary);
  `}
  ${props => props.themed && css`
    color: var(--color-brand-1);
  `}
`;

export const Heading3 = styled.h3`
  margin: 1.5rem 0;
  font-size: 3.2rem;
  font-weight: 700;
  ${props => props.condensed && css`
    font-family: var(--font-secondary);
  `}
  ${props => props.themed && css`
    color: var(--color-brand-1);
  `}
`;

export const Heading4 = styled.h4`
  margin: 1.5rem 0;
  font-size: 2.8rem;
  font-weight: 700;
  ${props => props.condensed && css`
    font-family: var(--font-secondary);
  `}
  ${props => props.themed && css`
    color: var(--color-brand-1);
  `}
`;

export const Heading5 = styled.h5`
  margin: 1.5rem 0;
  font-size: 2.4rem;
  font-weight: 700;
  ${props => props.condensed && css`
    font-family: var(--font-secondary);
  `}
  ${props => props.themed && css`
    color: var(--color-brand-1);
  `}
`;

export const Heading6 = styled.h6`
  margin: 1.5rem 0;
  font-size: 1.8rem;
  font-weight: 700;
  ${props => props.condensed && css`
    font-family: var(--font-secondary);
  `}
  ${props => props.themed && css`
    color: var(--color-brand-1);
  `}
`;
