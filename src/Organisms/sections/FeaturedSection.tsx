import { ReactComponent as FoodSvg } from 'assets/UI/food.svg';
import { ReactComponent as MedalSvg } from 'assets/UI/medal.svg';
import { ReactComponent as WinnerSvg } from 'assets/UI/winner.svg';
import { Feature } from 'Molecules/Feature';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const StyledFeature = styled(Feature)`
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 320px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    height: 250px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: -100px 0 100px;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    margin-top: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
`;

interface Props {
  className?: string;
}

export const FeaturedSection: FC<Props> = ({ className }) => {
  const { t } = useTranslation();
  return (
    <Container className={className}>
      <StyledFeature
        icon={MedalSvg}
        title={t('FeatureTitle1')}
        description={t('FeatureContent1')}
      />
      <StyledFeature
        icon={WinnerSvg}
        title={t('FeatureTitle2')}
        description={t('FeatureContent2')}
      />
      <StyledFeature icon={FoodSvg} title={t('FeatureTitle3')} description={t('FeatureContent3')} />
    </Container>
  );
};
