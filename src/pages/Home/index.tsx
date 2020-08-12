import girlImage from 'assets/girl.png';
import { H1, Span } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to right bottom,
    rgba(110, 214, 239, 1) 0%,
    rgba(72, 204, 243, 1) 12%,
    rgba(113, 214, 242, 1) 22%,
    rgba(140, 224, 237, 1) 31%,
    rgba(129, 218, 224, 1) 41%,
    rgba(124, 215, 215, 1) 53%,
    rgba(124, 215, 206, 1) 66%,
    rgba(133, 218, 199, 1) 79%,
    rgba(141, 220, 191, 1) 100%
  );
  overflow: hidden;
  display: flex;
`;

const ImageWrapper = styled.div`
  width: 35%;
`;
const Image = styled.img``;

const Titles = styled.div`
  width: 100%;
  align-self: center;
`;

export const Home: FC = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={girlImage} />
      </ImageWrapper>
      <Titles>
        <H1 size="huge" color="secondary" weight="400" font="Rowdies">
          Health Coaching
        </H1>
        <H1 size="huge" color="secondary" weight="400" font="Rowdies">
          Just Got{' '}
          <Span size="huge" color="secondary" weight="400" font="Caveat">
            Easier!
          </Span>
        </H1>
      </Titles>
    </Container>
  );
};
