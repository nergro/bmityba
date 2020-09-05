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
  top: 50%;
`;

export const Vertical = styled.div`
  transition: all 0.5s ease-in-out;
  position: absolute;
  background: #666;
  width: 2px;
  height: 13px;
  left: 50%;
  top: 50%;
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
            transform: translate(-50%, -50%) rotate(90deg);
            opacity: 0;
            background: ${props => props.theme.colors.accents.primary};
          }
          ${Vertical} {
            transform: translate(-50%, -50%) rotate(90deg);
            background: ${props => props.theme.colors.accents.primary};
          }
        `
      : css`
          ${Horizontal} {
            transform: translate(-50%, -50%) rotate(-90deg);
            opacity: 1;
          }
          ${Vertical} {
            transform: translate(-50%, -50%) rotate(-90deg);
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
