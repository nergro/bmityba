import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { ActionButton } from 'Atoms/buttons/ActionButton';
import { H1, Span } from 'Atoms/text';
import { Logos } from 'Molecules/Logos';
import mainImage from 'assets/main.png';

const Container = styled.div`
  position: relative;
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
  position: relative;
  width: 50%;
  margin-left: 50px;
`;
const Image = styled.img`
  width: 115%;
`;

const TitlesWrapper = styled.div`
  width: 100%;
  align-self: center;
  position: relative;
`;

const Titles = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(H1)`
  margin: 35px 0;
`;

const BackgroundTitle = styled(H1)`
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translate(-50%, 50%);
  opacity: 0.035;
`;

const StyledActionButton = styled(ActionButton)`
  margin-top: 50px;
`;

const StyledLogos = styled(Logos)`
  position: absolute;
  left: 40px;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 50%;
  justify-content: space-evenly;
`;

interface Props {
  className?: string;
}

export const MainSection: FC<Props> = () => {
  return (
    <Container>
      <ImageWrapper>
        <Image src={mainImage} />
      </ImageWrapper>
      <TitlesWrapper>
        <Titles>
          <Title size="big" color="secondary" weight="400" font="Rowdies">
            Health Coaching
          </Title>
          <Title size="big" color="secondary" weight="400" font="Rowdies">
            Just Got{' '}
            <Span size="huge" color="secondary" weight="400" font="Caveat">
              Easier!
            </Span>
          </Title>
          <StyledActionButton>More about health</StyledActionButton>
        </Titles>
        <BackgroundTitle size="veryBig" font="Rowdies">
          Healthy
        </BackgroundTitle>
      </TitlesWrapper>
      <StyledLogos />
    </Container>
  );
};
