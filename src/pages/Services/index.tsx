import { PageLayout } from 'layouts/PageLayout';
import { CallToActionSection } from 'Organisms/sections/CallToActionSection';
import { ServicesSection } from 'Organisms/sections/ServicesSection';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const Services: FC = () => {
  const { t } = useTranslation();
  return (
    <PageLayout title={t('Services')}>
      <Helmet>
        <meta
          name="description"
          content="Individuali konsultacija. Mitybos planas. Mitybos planas + sporto programa."
        />
      </Helmet>
      <ServicesSection />
      <CallToActionSection />
    </PageLayout>
  );
};
