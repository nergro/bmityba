import { AboutSection } from 'Organisms/sections/AboutSection';
import { ContactsSection } from 'Organisms/sections/ContactsSection';
import { FeaturedSection } from 'Organisms/sections/FeaturedSection';
import { MainSection } from 'Organisms/sections/MainSection';
import { ServicesSection } from 'Organisms/sections/ServicesSection';
import { SocialsSection } from 'Organisms/sections/SocialsSection';
import React, { FC } from 'react';

export const Home: FC = () => {
  return (
    <>
      <MainSection />
      <FeaturedSection />
      <AboutSection />
      <ServicesSection />
      <ContactsSection />
      <SocialsSection />
    </>
  );
};
