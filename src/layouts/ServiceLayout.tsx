import { PageLayout } from 'layouts/PageLayout';
import { LatestNews } from 'Organisms/blogSections/LatestNews';
import { ContactsSection } from 'Organisms/serviceSections/ContactsSection';
import { ServicesNavSection } from 'Organisms/serviceSections/ServicesNavSection';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { Service as ServiceInfo } from 'types/service';

const Container = styled.div`
  display: flex;
`;

const Aside = styled.aside`
  padding-bottom: 20px;
  max-width: 33%;
  width: 100%;
  background: ${props => props.theme.colors.aside};
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    display: none;
  }
`;

const AsideContent = styled.div`
  margin: 0 20px 0 auto;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    padding: 20px 15px;
  }
`;

const Content = styled.div`
  position: relative;
  width: 50%;
  margin-left: 50px;
  padding: 80px 0;
  @media (max-width: ${props => props.theme.breakpoints.xl}) {
    width: 55%;
  }
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 60%;
  }

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 64%;
    margin-left: 15px;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 90%;
    margin: 0 auto;
  }
`;

interface Props {
  title?: string;
  serviceId?: string;
  services?: ServiceInfo[];
}

export const ServiceLayout: FC<Props> = ({ children, title, services, serviceId }) => {
  return (
    <PageLayout title={title}>
      <Container>
        <Aside>
          <AsideContent>
            <ServicesNavSection serviceId={serviceId} services={services} />
            <ContactsSection />
            <LatestNews />
          </AsideContent>
        </Aside>
        <Content>{children}</Content>
      </Container>
    </PageLayout>
  );
};
