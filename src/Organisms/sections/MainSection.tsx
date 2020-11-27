import coverDesktop from 'assets/cover.webp';
import coverMobile from 'assets/coverMobile.webp';
import { PrimaryButtonFilled, SecondaryButtonFilled } from 'Atoms/buttons/ActionButton';
import { Caption } from 'Atoms/Caption';
import { H1, P, Span } from 'Atoms/text';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';

const Container = styled.div`
  background-image: url(${coverDesktop});
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
    background-image: url(${coverMobile});
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 0 auto;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 96%;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin-top: 40px;
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
    font-size: 23px;
    margin: 4px 0;
    letter-spacing: -1px;
  }
`;

const HighlightedTitle = styled(Span)`
  && {
    font-size: inherit;
  }
  color: ${props => props.theme.colors.accents.primary};
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    letter-spacing: -1px;
  }
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
    margin-top: 45px;
  }
`;

const StyledPrimaryButton = styled(PrimaryButtonFilled)`
  margin-right: 12px;
`;

const StyledSecondaryButton = styled(SecondaryButtonFilled)`
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100px;
  }
`;

interface Props {
  className?: string;
}

export const MainSection: FC<Props> = () => {
  const { t } = useTranslation();

  const { push } = useHistory();

  return (
    <Container>
      <TextContainer>
        <TextSection>
          <StyledCaption content={t('It’s not a diet, It’s a lifestyle')} lineLeft />
          <Title font="Spectral">{t('Looking good - great,')}</Title>
          <Title font="Spectral">
            {t('Feeling great -')}{' '}
            <HighlightedTitle font="Spectral">{t('Fantastic!')}</HighlightedTitle>
          </Title>
          <Description color="light" size="intermedium">
            {t(
              "Does it seem like you've tried everything you could but there is no result whatsoever? Don't worry, with my science-based knowledge and YOUR effort we can achieve everything you like!"
            )}
          </Description>
        </TextSection>
        <Buttons>
          <StyledPrimaryButton onClick={() => push('/kontaktai')}>
            {t('Team up with me')}
          </StyledPrimaryButton>
          <StyledSecondaryButton onClick={() => push('/apie')}>{t('About')}</StyledSecondaryButton>
        </Buttons>
      </TextContainer>
    </Container>
  );
};
