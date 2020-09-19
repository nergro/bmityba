import aboutFullImage from 'assets/about/about_full.jpg';
import fruitsImage from 'assets/about/fruits.png';
import logosImage from 'assets/about/logos.png';
import { P } from 'Atoms/text';
import { PageLayout } from 'layouts/PageLayout';
import { CallToActionSection } from 'Organisms/sections/CallToActionSection';
import React, { FC } from 'react';
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
  width: 25%;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 70%;
    margin: 0 auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const RightContent = styled.div`
  width: 60%;
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
  width: 65%;
`;

const CornerImage = styled.img`
  display: none;
  position: absolute;
  top: 0px;
  right: 10px;
  width: 14%;
  min-width: 100px;
`;

export const About: FC = () => {
  const { t } = useTranslation();

  return (
    <PageLayout title={t('About')}>
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
