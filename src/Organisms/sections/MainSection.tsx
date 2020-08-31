import coverImg from 'assets/cover.jpg';
import { PrimaryButton, SecondaryButton } from 'Atoms/buttons/ActionButton';
import { H1, P, Span } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  background-image: url(${coverImg});
  height: 760px;
  background-size: cover;
  background-position: center center;

  display: flex;
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 400px;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 282px;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
`;

const CaptionWrapper = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

const Caption = styled(P)`
  letter-spacing: 1px;
`;

const Line = styled.hr`
  width: 40px;
  margin: 0;
  border: 1px solid ${props => props.theme.colors.accents.primary};
  margin-right: 20px;
`;

const Title = styled(H1)`
  text-align: left;
  margin: 20px 0;
`;

const HighlightedTitle = styled(Span)`
  font-size: inherit;
  color: ${props => props.theme.colors.accents.primary};
`;

const Description = styled(P)`
  margin-top: 20px;
  max-width: 590px;
  line-height: 25px;
`;

const Buttons = styled.div`
  margin-top: 50px;
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  margin-right: 20px;
`;

interface Props {
  className?: string;
}

export const MainSection: FC<Props> = () => {
  return (
    <Container>
      <TextSection>
        <CaptionWrapper>
          <Line />
          <Caption color="primaryAccent" font="Lato" size="intermedium" weight="600">
            It&#39;s not a diet, It&#39;s a lifestyle
          </Caption>
        </CaptionWrapper>
        <Title font="Prata">
          Healthier <HighlightedTitle font="Prata">Choices</HighlightedTitle>
        </Title>
        <Title font="Prata">For a Healthier You.</Title>
        <Description font="Lato" color="light" size="intermedium">
          Nutrition Services is dedicated to bringing you and your family healthy, delicious food
          options whenever you&#39;re at one of our locations.
        </Description>
        <Buttons>
          <StyledPrimaryButton>Contact me</StyledPrimaryButton>
          <SecondaryButton>About</SecondaryButton>
        </Buttons>
      </TextSection>
    </Container>
  );
};
