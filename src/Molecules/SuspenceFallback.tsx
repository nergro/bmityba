import { AppLayout } from 'layouts/AppLayout';
import { PageLayout } from 'layouts/PageLayout';
import { CallToActionSection } from 'Organisms/sections/CallToActionSection';
import { ServicesSection } from 'Organisms/sections/ServicesSection';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

export const SuspenceFallback: FC = () => {
  const { t } = useTranslation();
  return (
    <AppLayout>
      <PageLayout title={t('Loading')}>
        <Helmet>
          <meta
            name="description"
            content="Individuali konsultacija. Mitybos planas. Mitybos planas + sporto programa."
          />
        </Helmet>
        <ServicesSection />
        <CallToActionSection />
      </PageLayout>
    </AppLayout>
  );
};
