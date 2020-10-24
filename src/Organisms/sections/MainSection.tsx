import coverDesktop from 'assets/cover.png';
import coverMobile from 'assets/coverMobile.png';
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
    font-size: 23px;
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
    margin-top: 20px;
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
        <Buttons>
          <StyledPrimaryButton onClick={() => push('/contacts')}>
            {t('Team up with me')}
          </StyledPrimaryButton>
          <StyledSecondaryButton onClick={() => push('/about')}>{t('About')}</StyledSecondaryButton>
        </Buttons>
      </TextSection>
    </Container>
  );
};
