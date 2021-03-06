import { H1 } from 'Atoms/text';
import { Service } from 'Molecules/Service';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { dummyServices } from 'services/dummyData/dummyServices';
import { getLocale } from 'services/localStorage';
import { useServicesResource } from 'store/servicesStore/hooks';
import { isLoading } from 'store/types';
import styled from 'styled-components/macro';

const Container = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 50px 20px;
`;

const Title = styled(H1)`
  && {
    font-size: 38px;
    @media (max-width: ${props => props.theme.breakpoints.m}) {
      font-size: 32px;
    }
    @media (max-width: ${props => props.theme.breakpoints.s}) {
      font-size: 28px;
    }
  }
`;

const Services = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  min-height: 650px;
  margin: 40px auto 0;

  @media (max-width: ${props => props.theme.breakpoints.l}) {
    max-width: 1000px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const StyledService = styled(Service)`
  &:not(:last-child) {
    margin-right: 20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    &:not(:last-child) {
      margin: 0 0 20px;
    }
  }
`;

const ServicesLayout: FC<Props> = ({ className, children }) => {
  const { t } = useTranslation();

  return (
    <Container className={className}>
      <Title color="secondaryAccent" font="Spectral">
        {t('A Fresh Approach To Health & Life')}
      </Title>
      <Services>{children}</Services>
    </Container>
  );
};

interface Props {
  className?: string;
}

export const ServicesSection: FC<Props> = ({ className }) => {
  const services = useServicesResource();

  const locale = getLocale();
  const isLT = locale === 'lt';

  const metaServices = isLoading(services) ? dummyServices : services.list;
  return (
    <ServicesLayout className={className}>
      <Helmet>
        <meta
          name="description"
          content="Individuali konsultacija. Mitybos planas. Mitybos planas + sporto programa."
        />

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org/",
          "@type": "Service",
          "name": "Mitybos planas",
          "description": "${metaServices[0].shortDescriptionLT}",
          "offers": {
            "@type": "Offer",
            "url": "https://bmityba.lt/paslaugos/dietary-plan",
            "priceCurrency": "EUR",
            "price": "${metaServices[0].price}",
            "priceValidUntil": "2020-12-31",
            "itemCondition": "https://schema.org/UsedCondition",
            "availability": "https://schema.org/InStock"
          }
        }
    `}</script>
      </Helmet>

      {(isLoading(services) ? dummyServices : services.list).map(x => (
        <StyledService
          key={x.id.original}
          image={x.image.imageUrl}
          title={isLT ? x.nameLT : x.nameEN}
          subtitle={isLT ? x.labelLT : x.labelEN}
          description={isLT ? x.shortDescriptionLT : x.shortDescriptionEN}
          to={`/paslaugos/${x.id.pretty}`}
          price={x.price}
        />
      ))}
    </ServicesLayout>
  );
};
