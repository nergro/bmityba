import { PageLayout } from 'layouts/PageLayout';
import { CallToActionSection } from 'Organisms/sections/CallToActionSection';
import { ServicesSection } from 'Organisms/sections/ServicesSection';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Services: FC = () => {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('Services')}>
      <ServicesSection />
      <CallToActionSection />
    </PageLayout>
  );
};
