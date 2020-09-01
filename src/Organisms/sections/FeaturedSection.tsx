import { ReactComponent as FoodSvg } from 'assets/UI/food.svg';
import { Feature } from 'Molecules/Feature';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const StyledFeature = styled(Feature)`
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 320px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -100px;
  /* TODO - REMOVE THIS */
  margin-bottom: 1000px;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    margin-top: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    /* flex-direction: column; */
    flex-wrap: wrap;
    ${StyledFeature} {
    }
  }
`;

interface Props {
  className?: string;
}

export const FeaturedSection: FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <StyledFeature
        icon={FoodSvg}
        title="Top Rated"
        description="With so many choices of the food-diet advisory out there, we’re at top-rated cause of homely services."
        to="/"
      />
      <StyledFeature
        icon={FoodSvg}
        title="Top Rated"
        description="With so many choices of the food-diet advisory out there, we’re at top-rated cause of homely services."
        to="/"
      />
      <StyledFeature
        icon={FoodSvg}
        title="Top Rated"
        description="With so many choices of the food-diet advisory out there, we’re at top-rated cause of homely services."
        to="/"
      />
    </Container>
  );
};
