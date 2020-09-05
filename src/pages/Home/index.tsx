import { AboutSection } from 'Organisms/sections/AboutSection';
import { ContactsSection } from 'Organisms/sections/ContactsSection';
import { FeaturedSection } from 'Organisms/sections/FeaturedSection';
import { MainSection } from 'Organisms/sections/MainSection';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const EmptySection = styled.div`
  height: 100px;
`;
export const Home: FC = () => {
  return (
    <>
      <MainSection />
      <FeaturedSection />
      <AboutSection />
      <ContactsSection />
      <EmptySection />
    </>
  );
};
