import { ReactComponent as LocationSvg } from 'assets/footer/location.svg';
import { ReactComponent as MailSvg } from 'assets/footer/mail.svg';
import { ReactComponent as PhoneSvg } from 'assets/footer/phone.svg';
import { ReactComponent as FacebookSvg } from 'assets/social/facebook.svg';
import { ReactComponent as InstagramSvg } from 'assets/social/instagram.svg';
import { ReactComponent as LinkedInSvg } from 'assets/social/linkedin.svg';
import { Icon } from 'Atoms/Icon';
import { Span } from 'Atoms/text';
import { SideSection } from 'Organisms/blogSections/SideSection';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useMobile } from 'services/useMobile';
import styled from 'styled-components/macro';

const Contact = styled.div`
  display: flex;
  align-items: center;
  &:not(:first-child) {
    margin-top: 20px;
  }
`;

const StyledIcon = styled(Icon)`
  width: 20px;
  height: 20px;
  fill: ${props => props.theme.colors.accents.primary};
  margin-right: 15px;
`;

const StyledSpan = styled(Span)`
  color: ${props => props.theme.colors.text.inactive};

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    font-size: 14px;
  }
`;

const Socials = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  margin: 17px auto 0;
`;

const SocialLink = styled.a``;

const SocialIcon = styled(Icon)`
  cursor: pointer;
  width: 23px;
  height: 23px;
  fill: ${props => props.theme.colors.text.inactive};

  &:hover {
    fill: ${props => props.theme.colors.accents.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 18px;
    height: 18px;
  }
`;

export const ContactsSection: FC = () => {
  const isMobile = useMobile('sm');
  const { t } = useTranslation();

  return (
    <SideSection title={t('Get in touch')}>
      <Contact>
        <StyledIcon svgComponent={PhoneSvg} />
        <StyledSpan>+370 662 38367</StyledSpan>
      </Contact>
      <Contact>
        <StyledIcon svgComponent={MailSvg} />
        <StyledSpan>bmityba@outlook.com</StyledSpan>
      </Contact>
      <Contact>
        <StyledIcon svgComponent={LocationSvg} />
        <StyledSpan>{t('Kaunas, Lithuania')}</StyledSpan>
      </Contact>
      <Socials>
        <SocialLink
          href={isMobile ? 'fb://page/101922294933828' : 'https://www.facebook.com/bmityba'}
          target="_blank"
        >
          <SocialIcon svgComponent={FacebookSvg} />
        </SocialLink>
        <SocialLink href="https://www.instagram.com/b_mityba/" target="_blank">
          <SocialIcon svgComponent={InstagramSvg} />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/brigita-meiglaite-a29484130/" target="_blank">
          <SocialIcon svgComponent={LinkedInSvg} />
        </SocialLink>
      </Socials>
    </SideSection>
  );
};
