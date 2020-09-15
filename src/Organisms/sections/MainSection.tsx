import coverImg from 'assets/cover.jpg';
import { PrimaryButtonFilled, SecondaryButtonFilled } from 'Atoms/buttons/ActionButton';
import { Caption } from 'Atoms/Caption';
import { H1, P, Span } from 'Atoms/text';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
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
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 90%;
  }
`;

const StyledCaption = styled(Caption)`
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: none;
  }
`;

const Title = styled(H1)`
  text-align: left;
  margin: 20px 0;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 35px;
    margin: 10px 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 25px;
    margin: 4px 0;
  }
`;

const HighlightedTitle = styled(Span)`
  && {
    font-size: inherit;
  }
  color: ${props => props.theme.colors.accents.primary};
`;

const Description = styled(P)`
  margin-top: 20px;
  max-width: 590px;
  line-height: 25px;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    display: none;
  }
`;

const Buttons = styled.div`
  margin-top: 50px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin-top: 30px;
  }
`;

const StyledPrimaryButton = styled(PrimaryButtonFilled)`
  margin-right: 20px;
`;

interface Props {
  className?: string;
}

export const MainSection: FC<Props> = () => {
  const { push } = useHistory();

  return (
    <Container>
      <TextSection>
        <StyledCaption content="It's not a diet, It's a lifestyle" lineLeft />
        <Title font="Prata">
          Healthier <HighlightedTitle font="Prata">Choices</HighlightedTitle>
        </Title>
        <Title font="Prata">For a Healthier You.</Title>
        <Description font="Lato" color="light" size="intermedium">
          Nutrition Services is dedicated to bringing you and your family healthy, delicious food
          options whenever you&#39;re at one of our locations.
        </Description>
        <Buttons>
          <StyledPrimaryButton onClick={() => push('/contacts')}>Contact me</StyledPrimaryButton>
          <SecondaryButtonFilled onClick={() => push('/about')}>About</SecondaryButtonFilled>
        </Buttons>
      </TextSection>
    </Container>
  );
};
