import { PageLayout } from 'layouts/PageLayout';
import { LatestNews } from 'Organisms/blogSections/LatestNews';
import { ContactsSection } from 'Organisms/serviceSections/ContactsSection';
import { ServicesNavSection } from 'Organisms/serviceSections/ServicesNavSection';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

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
  width: 50%;
  margin: 0 50px 0 auto;
  padding: 80px 0;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 60%;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 90%;
    margin-right: auto;
  }
`;

interface Props {
  title?: string;
  serviceId: string;
}

export const ServiceLayout: FC<Props> = ({ children, title, serviceId }) => {
  return (
    <PageLayout title={title}>
      <Container>
        <Aside>
          <AsideContent>
            <ServicesNavSection serviceId={serviceId} />
            <ContactsSection />
            <LatestNews />
          </AsideContent>
        </Aside>
        <Content>{children}</Content>
      </Container>
    </PageLayout>
  );
};
