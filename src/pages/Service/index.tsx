import { Benefit } from 'Atoms/Benefit';
import { RoundButton } from 'Atoms/buttons/RoundButton';
import { MainLoader } from 'Atoms/loaders/MainLoader';
import { H2, P, Span } from 'Atoms/text';
import { ServiceLayout } from 'layouts/ServiceLayout';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { RouteComponentProps } from 'react-router-dom';
import { getLocale } from 'services/localStorage';
import { useServicesResource } from 'store/servicesStore/hooks';
import { isLoading } from 'store/types';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 100%;
`;

const DescriptionSection = styled.div`
  margin-top: 20px;
  line-height: 30px;
  padding-bottom: 25px;
  border-bottom: 1px solid ${props => props.theme.colors.separator.light};
`;

const Title = styled(H2)`
  font-size: 32px;
  text-align: left;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 27px;
  }
`;

const Description = styled(P)`
  font-size: 18px;
  line-height: 30px;
`;

const BenefitsSection = styled.div``;

const Benefits = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const StyledBenefit = styled(Benefit)`
  max-width: 250px;
  margin: 20px 15px 0 0;

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    max-width: 100%;
  }
`;

const PriceSection = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid ${props => props.theme.colors.separator.light};
  padding: 15px 10px 35px;
  width: 400px;
  height: 380px;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 320px;
  }
`;

const From = styled(Span)`
  font-size: 40px;
  margin-right: 3px;

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 35px;
  }
`;

const Price = styled(P)`
  text-align: center;
  font-size: 60px;
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 50px;
  }
`;

const PriceDescription = styled.div`
  margin: 25px 0 35px;
`;

const StyledP = styled(P)`
  text-align: center;
  &:not(:first-child) {
    margin-top: 15px;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    && {
      font-size: 16px;
    }
  }
`;

const StyledLoader = styled(MainLoader)`
  top: 100px;
`;

const Service: FC<RouteComponentProps<{ id: string }>> = ({ match, history }) => {
  const services = useServicesResource();
  const { t } = useTranslation();

  if (isLoading(services)) {
    return (
      <ServiceLayout title={`${t('Loading')}...`}>
        <StyledLoader />
      </ServiceLayout>
    );
  }

  const serviceId = match.params.id;
  const service = services.dict[match.params.id];

  const locale = getLocale();
  const isLT = locale === 'lt';

  if (!service) {
    return (
      <ServiceLayout title={t('Not Found')} serviceId={serviceId} services={services.list}>
        <p>{t('Service not found')}</p>
      </ServiceLayout>
    );
  }
  return (
    <ServiceLayout
      title={isLT ? service.nameLT : service.nameEN}
      serviceId={serviceId}
      services={services.list}
    >
      <Helmet>
        <meta name="description" content={service.priceDescriptionLT} />
        <title>{service.nameLT}</title>

        <script type="application/ld+json">{`
        {
          "@context": "https://schema.org/",
          "@type": "Service",
          "name": "${service.nameLT}",
          "description": "${service.shortDescriptionLT}",
          "offers": {
            "@type": "Offer",
            "url": "https://bmityba.lt/services/dietary-plan",
            "priceCurrency": "EUR",
            "price": "${service.price}",
            "priceValidUntil": "2020-12-31",
            "itemCondition": "https://schema.org/UsedCondition",
            "availability": "https://schema.org/InStock"
          }
        }
    `}</script>
      </Helmet>
      <Container>
        <Image src={service.image.imageUrl} />
        <DescriptionSection>
          <Title font="Spectral" color="secondaryAccent">
            {isLT ? service.nameLT : service.nameEN}
          </Title>
          <Description color="inactive">
            {isLT ? service.descriptionLT : service.descriptionEN}
          </Description>
        </DescriptionSection>
        <BenefitsSection>
          <Title font="Spectral" color="secondaryAccent">
            {isLT ? service.benefitsTitleLT : service.benefitsTitleEN}
          </Title>
          <Description color="inactive">
            {isLT ? service.benefitsDescriptionLT : service.benefitsDescriptionEN}
          </Description>
          <Benefits>
            {service.benefits.map(benefit => (
              <StyledBenefit
                key={isLT ? benefit.id : benefit.id}
                name={isLT ? benefit.nameLT : benefit.nameEN}
                description={isLT ? benefit.descriptionLT : benefit.descriptionEN}
              />
            ))}
          </Benefits>
        </BenefitsSection>
        <PriceSection>
          <PriceBox>
            <Price color="tertiaryAccent" font="Oregano">
              <From color="tertiaryAccent" font="Oregano">
                {t('From')}
              </From>{' '}
              €{service.price}
            </Price>
            <PriceDescription>
              {(isLT ? service.priceDescriptionLT : service.priceDescriptionEN)
                .split('/')
                .map((x, i) => (
                  <StyledP key={i} color="inactive" size="intermedium">
                    {x}
                  </StyledP>
                ))}
            </PriceDescription>
            <RoundButton onClick={() => history.push('/kontaktai')}>{t('Book now')}</RoundButton>
          </PriceBox>
        </PriceSection>
      </Container>
    </ServiceLayout>
  );
};

export default Service;
