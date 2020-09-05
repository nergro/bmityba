import React, { FC } from 'react';
import styled, { css } from 'styled-components/macro';

export const Circle = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  border-radius: 100%;
  transition: all 0.5s ease-in-out;
  border: 2px solid #666;
`;

export const Horizontal = styled.div`
  transition: all 0.5s ease-in-out;
  position: absolute;
  background: #666;
  width: 13px;
  height: 2px;
  left: 50%;
  margin-left: -6px;
  top: 50%;
  margin-top: -1.5px;
`;

export const Vertical = styled.div`
  transition: all 0.5s ease-in-out;
  position: absolute;
  background: #666;
  width: 2px;
  height: 14px;
  left: 50%;
  margin-left: -1.5px;
  top: 50%;
  margin-top: -8px;
`;

const Wrapper = styled.div<Props>`
  opacity: 0.7;

  ${props =>
    props.isOpen
      ? css`
          opacity: 1;
          ${Circle} {
            border-color: ${props => props.theme.colors.accents.primary};
          }
          ${Horizontal} {
            transform: rotate(90deg);
            opacity: 0;
            background: ${props => props.theme.colors.accents.primary};
          }
          ${Vertical} {
            transform: rotate(90deg);
            background: ${props => props.theme.colors.accents.primary};
          }
        `
      : css`
          ${Horizontal} {
            transform: rotate(-90deg);
            opacity: 1;
          }
          ${Vertical} {
            transform: rotate(-90deg);
          }
        `}
`;

interface Props {
  className?: string;
  isOpen?: boolean;
}

export const AnimatedPlus: FC<Props> = ({ className, isOpen }) => {
  return (
    <Wrapper className={className} isOpen={isOpen}>
      <Circle>
        <Horizontal />
        <Vertical />
      </Circle>
    </Wrapper>
  );
};
