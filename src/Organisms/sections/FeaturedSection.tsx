import { ReactComponent as FoodSvg } from 'assets/UI/food.svg';
import { Feature } from 'Molecules/Feature';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -100px;
  margin-bottom: 1000px;
`;

interface Props {
  className?: string;
}

export const FeaturedSection: FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <Feature
        icon={FoodSvg}
        title="Top Rated"
        description="With so many choices of the food-diet advisory out there, we’re at top-rated cause of homely services."
        to="/"
      />
      <Feature
        icon={FoodSvg}
        title="Top Rated"
        description="With so many choices of the food-diet advisory out there, we’re at top-rated cause of homely services."
        to="/"
      />
      <Feature
        icon={FoodSvg}
        title="Top Rated"
        description="With so many choices of the food-diet advisory out there, we’re at top-rated cause of homely services."
        to="/"
      />
    </Container>
  );
};
