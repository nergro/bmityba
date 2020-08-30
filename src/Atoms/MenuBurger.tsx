import React, { FC } from 'react';
import styled, { css } from 'styled-components/macro';

const StyledSpan = styled.span<Props>`
  display: block;
  position: absolute;
  height: 6px;
  width: 100%;
  background: ${props => props.theme.colors.accents.secondary};
  border-radius: 9px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 0.25s ease-in-out;
`;

const Wrapper = styled.div<Props>`
  width: 45px;
  height: 30px;
  position: relative;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  ${StyledSpan}:nth-child(1) {
    ${props =>
      props.isOpen
        ? css`
            top: 18px;
            width: 0%;
            left: 50%;
          `
        : css`
            top: 0px;
          `}
  }

  ${StyledSpan}:nth-child(2) {
    ${props =>
      props.isOpen &&
      css`
        transform: rotate(45deg);
      `};
  }

  ${StyledSpan}:nth-child(3) {
    ${props =>
      props.isOpen &&
      css`
        transform: rotate(-45deg);
      `};
  }

  ${StyledSpan}:nth-child(2),
  ${StyledSpan}:nth-child(3) {
    top: 12px;
  }

  ${StyledSpan}:nth-child(4) {
    ${props =>
      props.isOpen
        ? css`
            top: 18px;
            width: 0%;
            left: 50%;
          `
        : css`
            top: 24px;
          `}
  }
`;

interface Props {
  className?: string;
  isOpen?: boolean;
  onClick?: () => void;
}

export const MenuBurger: FC<Props> = ({ className, onClick, isOpen }) => {
  return (
    <Wrapper className={className} onClick={onClick} isOpen={isOpen}>
      <StyledSpan />
      <StyledSpan />
      <StyledSpan />
      <StyledSpan />
    </Wrapper>
  );
};
