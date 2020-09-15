import { PageLayout } from 'layouts/PageLayout';
import { CallToActionSection } from 'Organisms/sections/CallToActionSection';
import { ServicesSection } from 'Organisms/sections/ServicesSection';
import React, { FC } from 'react';

export const Services: FC = () => {
  return (
    <PageLayout title="Services">
      <ServicesSection />
      <CallToActionSection />
    </PageLayout>
  );
};
