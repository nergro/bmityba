import { AboutSection } from 'Organisms/sections/AboutSection';
import { ContactsSection } from 'Organisms/sections/ContactsSection';
import { FeaturedSection } from 'Organisms/sections/FeaturedSection';
import { MainSection } from 'Organisms/sections/MainSection';
import { ServicesSection } from 'Organisms/sections/ServicesSection';
import { SocialsSection } from 'Organisms/sections/SocialsSection';
import React, { FC } from 'react';
import { useServicesResource } from 'store/servicesStore/hooks';
import { isLoading } from 'store/types';

export const Home: FC = () => {
  const services = useServicesResource();
  if (isLoading(services)) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <MainSection />
      <FeaturedSection />
      <AboutSection />
      <ServicesSection services={services.list} />
      <ContactsSection />
      <SocialsSection />
    </>
  );
};
