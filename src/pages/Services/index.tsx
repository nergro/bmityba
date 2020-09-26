import { PageLayout } from 'layouts/PageLayout';
import { CallToActionSection } from 'Organisms/sections/CallToActionSection';
import { ServicesSection } from 'Organisms/sections/ServicesSection';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useServicesResource } from 'store/servicesStore/hooks';
import { isLoading } from 'store/types';

export const Services: FC = () => {
  const { t } = useTranslation();
  const services = useServicesResource();
  if (isLoading(services)) {
    return <p>Loading...</p>;
  }
  return (
    <PageLayout title={t('Services')}>
      <ServicesSection services={services.list} />
      <CallToActionSection />
    </PageLayout>
  );
};
