import coverImg from 'assets/cover.jpg';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  background-image: url(${coverImg});
  height: 760px;
  background-size: cover;
  background-position: center center;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 400px;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 282px;
  }
`;

interface Props {
  className?: string;
}

export const MainSection: FC<Props> = () => {
  return <Container></Container>;
};
