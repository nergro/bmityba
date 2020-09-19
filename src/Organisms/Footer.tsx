import { ReactComponent as LocationSvg } from 'assets/footer/location.svg';
import { ReactComponent as MailSvg } from 'assets/footer/mail.svg';
import { ReactComponent as PhoneSvg } from 'assets/footer/phone.svg';
import { ReactComponent as FacebookSvg } from 'assets/social/facebook.svg';
import { ReactComponent as InstagramSvg } from 'assets/social/instagram.svg';
import { ReactComponent as LinkedInSvg } from 'assets/social/linkedin.svg';
import { Icon } from 'Atoms/Icon';
import { P } from 'Atoms/text';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useMobile } from 'services/useMobile';
import styled from 'styled-components/macro';

const Container = styled.div`
  background: #111111;
  padding: 30px;
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    padding: 30px 0px;
  }
`;

const Content = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: ${props => props.theme.breakpoints.l}) {
    width: 95%;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column;
    align-items: center;
  }
`;

const Contacts = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-evenly;
  ${P} {
    white-space: nowrap;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }
`;

const StyledIcon = styled(Icon)`
  width: 15px;
  height: 15px;
  margin-right: 20px;
  fill: ${props => props.theme.colors.text.secondary};
  transition: all 0.2s ease-out;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 200px;
    margin: 5px 0 0 35px;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    margin-left: 15px;
  }

  &:hover {
    ${StyledIcon} {
      fill: ${props => props.theme.colors.accents.primary};
    }
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    display: none;
  }
`;

const Social = styled.a`
  &:not(:last-child) {
    margin-right: 20px;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;

const StyledP = styled(P)`
  text-transform: uppercase;
`;

const StyledSocialIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  fill: ${props => props.theme.colors.text.secondary};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Footer: FC = () => {
  const isMobile = useMobile('sm');
  const { t } = useTranslation();
  return (
    <Container>
      <Content>
        <StyledP color="secondary">{t('get in touch')}</StyledP>
        <Contacts>
          <Contact>
            <StyledIcon svgComponent={PhoneSvg} />
            <P color="secondary">+370 662 38367</P>
          </Contact>
          <Contact>
            <StyledIcon svgComponent={MailSvg} />
            <P color="secondary">bmityba@outlook.com</P>
          </Contact>
          <Contact>
            <StyledIcon svgComponent={LocationSvg} />
            <P color="secondary">{t('Kaunas, Lithuania')}</P>
          </Contact>
        </Contacts>
      </Content>
      <Socials>
        <Social
          href={isMobile ? 'fb://page/101922294933828' : 'https://www.facebook.com/bmityba'}
          target="_blank"
        >
          <StyledSocialIcon svgComponent={FacebookSvg} />
        </Social>
        <Social href="https://www.instagram.com/b_mityba/" target="_blank">
          <StyledSocialIcon svgComponent={InstagramSvg} />
        </Social>
        <Social href="https://www.linkedin.com/in/brigita-meiglaite-a29484130/" target="_blank">
          <StyledSocialIcon svgComponent={LinkedInSvg} />
        </Social>
      </Socials>
    </Container>
  );
};
