import aboutFullImage from 'assets/about/about_full.webp';
import fruitsImage from 'assets/about/fruits.webp';
import logosImage from 'assets/about/logos.webp';
import { P } from 'Atoms/text';
import { PageLayout } from 'layouts/PageLayout';
import { CallToActionSection } from 'Organisms/sections/CallToActionSection';
import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/macro';

const Container = styled.div`
  position: relative;
  margin: 70px 0 0;
  padding: 0 6%;
  display: flex;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column;
    padding: 0;
    margin: 70px 0;
  }
`;

const LeftContent = styled.div`
  width: 100%;
  max-width: 500px;
  max-height: 600px;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    max-width: 400px;
    max-height: 500px;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    margin: 0 auto;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    padding: 0 20px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const RightContent = styled.div`
  width: 70%;
  margin-left: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 100%;
    margin: 0;
    padding: 30px 20px 0;
  }
`;

const StyledP = styled(P)`
  font-size: 20px;
  text-align: center;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const LogosImage = styled.img`
  margin-top: 15px;
  width: 100%;
  max-width: 700px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    max-width: 500px;
  }
`;

const CornerImage = styled.img`
  display: none;
  position: absolute;
  top: 0px;
  right: 10px;
  width: 14%;
  min-width: 100px;
`;

const About: FC = () => {
  const { t } = useTranslation();

  return (
    <PageLayout title={t('About')}>
      <Helmet>
        <meta
          name="description"
          content="Kvalifikuota mitybos specialistė ir antropometristė, atsidavusi išspręsti Jūsų sveikatos dėlionę kartu su jumis."
        />
      </Helmet>
      <Container>
        <CornerImage src={fruitsImage} />
        <LeftContent>
          <Image src={aboutFullImage} />
        </LeftContent>
        <RightContent>
          <StyledP>{t('AboutTitle1')}</StyledP>
          <StyledP>{t('AboutColumn1')}</StyledP>
          <StyledP>{t('AboutTitle2')}</StyledP>
          <StyledP>{t('AboutColumn2')}</StyledP>
          <StyledP>{t('AboutTitle3')}</StyledP>
          <StyledP>{t('AboutColumn3')}</StyledP>
          <LogosImage src={logosImage} />
        </RightContent>
      </Container>
      <CallToActionSection />
    </PageLayout>
  );
};

export default About;
