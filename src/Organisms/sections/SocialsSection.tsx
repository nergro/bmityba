import { ReactComponent as FacebookSvg } from 'assets/social/facebook.svg';
import { ReactComponent as InstagramSvg } from 'assets/social/instagram.svg';
import { ReactComponent as LinkedInSvg } from 'assets/social/linkedin.svg';
import { Icon } from 'Atoms/Icon';
import { P } from 'Atoms/text';
import React, { FC } from 'react';
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
  }
`;

const Socials = styled.div`
  margin-top: 30px;
  display: flex;
`;

const Social = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 30px;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    ${P} {
      display: none;
    }
  }
`;

const StyledIcon = styled(Icon)`
  width: 30px;
  height: 30px;
  fill: ${props => props.theme.colors.text.social};
  margin-right: 10px;
`;

export const SocialsSection: FC = () => {
  const isMobile = useMobile('sm');

  return (
    <Container>
      <Content>
        <Title font="Lato" weight="600" color="secondaryAccent">
          LET&apos;S CONNECT
        </Title>
        <Socials>
          <Social
            href={isMobile ? 'fb://page/101922294933828' : 'https://www.facebook.com/bmityba'}
            target="_blank"
          >
            <StyledIcon svgComponent={FacebookSvg} />
            <P color="social">Facebook</P>
          </Social>
          <Social href="https://www.instagram.com/b_mityba/" target="_blank">
            <StyledIcon svgComponent={InstagramSvg} />
            <P color="social">Instagram</P>
          </Social>
          <Social href="https://www.linkedin.com/in/brigita-meiglaite-a29484130/" target="_blank">
            <StyledIcon svgComponent={LinkedInSvg} />
            <P color="social">LinkedIn</P>
          </Social>
        </Socials>
      </Content>
    </Container>
  );
};
