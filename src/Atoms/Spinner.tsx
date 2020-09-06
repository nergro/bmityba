import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components/macro';

const rhombus1 = keyframes`
    50% {
        transform: translate(-325%, -325%);
      }
`;

const rhombus2 = keyframes`
     50% {
        transform: translate(0, -325%);
      }
`;

const rhombus3 = keyframes`
    50% {
        transform: translate(325%, -325%);
      }
`;

const rhombus4 = keyframes`
       50% {
        transform: translate(325%, 0);
      }
`;

const rhombus5 = keyframes`
       50% {
        transform: translate(325%, 325%);
      }
`;

const rhombus6 = keyframes`
    50% {
        transform: translate(0, 325%);
      }
`;

const rhombus7 = keyframes`
    50% {
        transform: translate(-325%, 325%);
      }
`;

const rhombus8 = keyframes`
   50% {
        transform: translate(-325%, 0);
      }
`;

const rhombusBig = keyframes`
     50% {
        transform: scale(0.5);
      }
`;

const Rhombus = styled.div`
  height: calc(65px / 7.5);
  width: calc(65px / 7.5);
  animation-duration: 2000ms;
  top: calc(65px / 2.3077);
  left: calc(65px / 2.3077);
  background-color: #ff1d5e;
  position: absolute;
  animation-iteration-count: infinite;
`;

const Rhombus1 = styled(Rhombus)`
  animation: ${rhombus1} 2s infinite;
  animation-delay: calc(100ms * 1);
`;

const Rhombus2 = styled(Rhombus)`
  animation: ${rhombus2} 2s infinite;
  animation-delay: calc(100ms * 2);
`;

const Rhombus3 = styled(Rhombus)`
  animation: ${rhombus3} 2s infinite;
  animation-delay: calc(100ms * 3);
`;

const Rhombus4 = styled(Rhombus)`
  animation: ${rhombus4} 2s infinite;
  animation-delay: calc(100ms * 4);
`;

const Rhombus5 = styled(Rhombus)`
  animation: ${rhombus5} 2s infinite;
  animation-delay: calc(100ms * 5);
`;

const Rhombus6 = styled(Rhombus)`
  animation: ${rhombus6} 2s infinite;
  animation-delay: calc(100ms * 6);
`;

const Rhombus7 = styled(Rhombus)`
  animation: ${rhombus7} 2s infinite;
  animation-delay: calc(100ms * 7);
`;

const Rhombus8 = styled(Rhombus)`
  animation: ${rhombus8} 2s infinite;
  animation-delay: calc(100ms * 8);
`;

const RhombusBig = styled(Rhombus)`
  height: calc(65px / 3);
  width: calc(65px / 3);
  animation-duration: 2000ms;
  top: calc(65px / 3);
  left: calc(65px / 3);
  background-color: #ff1d5e;
  animation: ${rhombusBig} 2s infinite;
  animation-delay: 0.5s;
`;

const Wrapper = styled.div`
  height: 65px;
  width: 65px;
  position: relative;
  transform: rotate(45deg);
  box-sizing: border-box;

  &:nth-child(2n + 0) {
    margin-right: 0;
  }
`;

interface Props {
  className?: string;
}

export const Spinner: FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Rhombus1 />
      <Rhombus2 />
      <Rhombus3 />
      <Rhombus4 />
      <Rhombus5 />
      <Rhombus6 />
      <Rhombus7 />
      <Rhombus8 />
      <RhombusBig />
    </Wrapper>
  );
};
