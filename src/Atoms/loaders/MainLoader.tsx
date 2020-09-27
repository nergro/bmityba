import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components/macro';

const pixelAnimation = keyframes`
50% {
        box-shadow: 20px 20px 0px 0px,
                    -20px -20px 0px 0px,
                    20px -20px 0px 0px,
                    -20px 20px 0px 0px,
                    0px 10px 0px 0px,
                    10px 0px 0px 0px,
                    -10px 0px 0px 0px,
                    0px -10px 0px 0px;
      }
      75% {
        box-shadow: 20px 20px 0px 0px,
                    -20px -20px 0px 0px,
                    20px -20px 0px 0px,
                    -20px 20px 0px 0px,
                    0px 10px 0px 0px,
                    10px 0px 0px 0px,
                    -10px 0px 0px 0px,
                    0px -10px 0px 0px;
      }
      100% {
        transform: rotate(360deg);
      }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 70px;
  width: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: calc(70px / 7);
  height: calc(70px / 7);
  background-color: #ff1d5e;
  color: #ff1d5e;
  box-shadow: 15px 15px 0 0, -15px -15px 0 0, 15px -15px 0 0, -15px 15px 0 0, 0 15px 0 0, 15px 0 0 0,
    -15px 0 0 0, 0 -15px 0 0;
  animation: ${pixelAnimation} 2000ms linear infinite;
`;

interface Props {
  className?: string;
}

export const MainLoader: FC<Props> = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Inner />
    </Wrapper>
  );
};
