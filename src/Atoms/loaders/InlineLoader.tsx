import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components/macro';

const rhombusAnim = keyframes`
    0% {
        transform: translateX(0) rotate(45deg) scale(0);
      }
      50% {
        transform: translateX(-233%) rotate(45deg) scale(1);
      }
      100% {
        transform: translateX(-466%) rotate(45deg) scale(0);
      }
`;

const Rhombus = styled.div`
  height: 15px;
  width: 15px;
  background-color: ${props => props.theme.colors.accents.primary};
  left: calc(15px * 4);
  position: absolute;
  margin: 0 auto;
  border-radius: 2px;
  transform: translateY(0) rotate(45deg) scale(0);
  animation: ${rhombusAnim} 2500ms linear infinite;
`;

const Wrapper = styled.div`
  width: calc(15px * 4);
  height: 15px;
  position: relative;

  ${Rhombus}:nth-child (1) {
    animation-delay: calc(2500ms * 1 / -1.5);
  }
  ${Rhombus}:nth-child (2) {
    animation-delay: calc(2500ms * 2 / -1.5);
  }
  ${Rhombus}:nth-child (3) {
    animation-delay: calc(2500ms * 3 / -1.5);
  }
`;

interface Props {
  className?: string;
}

export const InlineLoader: FC<Props> = () => {
  return (
    <Wrapper data-testid="loader">
      <Rhombus />
      <Rhombus />
      <Rhombus />
    </Wrapper>
  );
};
