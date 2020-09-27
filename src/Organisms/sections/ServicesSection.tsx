import { H1 } from 'Atoms/text';
import { Service } from 'Molecules/Service';
import React, { FC } from 'react';
import { dummyServices } from 'services/dummyServices';
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
  min-height: 700px;
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
  return (
    <Container className={className}>
      <Title color="secondaryAccent" font="Spectral">
        A Fresh Approach To Health &amp; Life
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

  return (
    <ServicesLayout className={className}>
      {(isLoading(services) ? dummyServices : services.list).map(x => (
        <StyledService
          key={x.id}
          image={x.image.imageUrl}
          title={isLT ? x.nameLT : x.nameEN}
          subtitle={isLT ? x.labelLT : x.labelEN}
          description={isLT ? x.shortDescriptionLT : x.shortDescriptionEN}
          to={`/services/${x.id}`}
        />
      ))}
    </ServicesLayout>
  );
};
