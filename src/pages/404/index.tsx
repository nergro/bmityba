import { H2 } from 'Atoms/text';
import { PageLayout } from 'layouts/PageLayout';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const StyledTitle = styled(H2)`
  margin-top: 100px;
`;

export const NotFound: React.FC = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <StyledTitle>{t('Page not found')}</StyledTitle>
    </PageLayout>
  );
};
