import { H1 } from 'Atoms/text';
import { Service } from 'Molecules/Service';
import React, { FC } from 'react';
import { getLocale } from 'services/localStorage';
import styled from 'styled-components/macro';
import { Service as ServiceInfo } from 'types/service';

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

interface Props {
  className?: string;
  services: ServiceInfo[];
}

export const ServicesSection: FC<Props> = ({ className, services }) => {
  const locale = getLocale();
  const isLT = locale === 'lt';

  return (
    <Container className={className}>
      <Title color="secondaryAccent" font="Spectral">
        A Fresh Approach To Health &amp; Life
      </Title>
      <Services>
        {services.map(x => (
          <StyledService
            key={x.id}
            image={x.image.imageUrl}
            title={isLT ? x.nameLT : x.nameEN}
            subtitle={isLT ? x.labelLT : x.labelEN}
            description={isLT ? x.shortDescriptionLT : x.shortDescriptionEN}
            to={`/services/${x.id}`}
          />
        ))}
        {/* <StyledService
          image={service1Image}
          title="1:1 Consultation"
          subtitle="What You Get.."
          description="Monthly sessions where we uncover the habits &amp; thoughts in the way of a healthy relationship with food &amp; your body."
          to="/services/1"
        />
        <StyledService
          image={service2Image}
          title="30 day Challenge"
          subtitle="Perfect for you if.."
          description="You want to curb your cravings and discover a healthier lifestyle during a fun + simple 30 day online challenge."
          to="/services/2"
        />
        <StyledService
          image={service3Image}
          title="Group Couching"
          subtitle="Get all the benefits"
          description="You're ready to explore a life that loves you as much as you love it through bi-weekly one on one coaching sessions."
          to="/services/3"
        /> */}
      </Services>
    </Container>
  );
};
