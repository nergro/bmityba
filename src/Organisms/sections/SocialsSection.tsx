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
  margin-top: 100px;
  background: #f5f7f8;
  height: 140px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  width: 100%;
  margin: 0 auto;
`;

const Title = styled(P)`
  && {
    font-size: 20px;
    letter-spacing: 3.5px;
    text-transform: uppercase;
  }
`;

const Socials = styled.div`
  margin-top: 30px;
  display: flex;
`;

const StyledP = styled(P)`
  transition: all 0.2s ease-out;
`;

const StyledIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  fill: ${props => props.theme.colors.text.social};
  margin-right: 10px;
  transition: all 0.2s ease-out;
`;

const Social = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 30px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    ${StyledP} {
      display: none;
    }
  }

  &:hover {
    ${StyledP} {
      color: ${props => props.theme.colors.accents.primary};
    }
    ${StyledIcon} {
      fill: ${props => props.theme.colors.accents.primary};
    }
  }
`;

export const SocialsSection: FC = () => {
  const isMobile = useMobile('sm');
  const { t } = useTranslation();

  return (
    <Container>
      <Content>
        <Title weight="600" color="secondaryAccent">
          {t("let's connect")}
        </Title>
        <Socials>
          <Social
            href={isMobile ? 'fb://page/101922294933828' : 'https://www.facebook.com/bmityba'}
            target="_blank"
          >
            <StyledIcon svgComponent={FacebookSvg} />
            <StyledP color="social">Facebook</StyledP>
          </Social>
          <Social href="https://www.instagram.com/b_mityba/" target="_blank">
            <StyledIcon svgComponent={InstagramSvg} />
            <StyledP color="social">Instagram</StyledP>
          </Social>
          <Social href="https://www.linkedin.com/in/brigita-meiglaite-a29484130/" target="_blank">
            <StyledIcon svgComponent={LinkedInSvg} />
            <StyledP color="social">LinkedIn</StyledP>
          </Social>
        </Socials>
      </Content>
    </Container>
  );
};
