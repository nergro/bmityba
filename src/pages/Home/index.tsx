import { FeaturedSection } from 'Organisms/sections/FeaturedSection';
import { MainSection } from 'Organisms/sections/MainSection';
import React, { FC } from 'react';

export const Home: FC = () => {
  return (
    <>
      <MainSection />
      <FeaturedSection />
    </>
  );
};
