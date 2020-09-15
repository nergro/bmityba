import aboutFullImage from 'assets/about/about_full.jpg';
import fruitsImage from 'assets/about/fruits.png';
import logosImage from 'assets/about/logos.png';
import { P } from 'Atoms/text';
import { PageLayout } from 'layouts/PageLayout';
import { CallToActionSection } from 'Organisms/sections/CallToActionSection';
import React, { FC } from 'react';
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
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const LogosImage = styled.img`
  width: 80%;
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
  return (
    <PageLayout title="About">
      <Container>
        <CornerImage src={fruitsImage} />
        <LeftContent>
          <Image src={aboutFullImage} />
        </LeftContent>
        <RightContent>
          <StyledP>Hi,</StyledP>
          <StyledP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </StyledP>
          <StyledP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Placerat orci nulla pellentesque dignissim
            enim sit amet venenatis. Ut ornare lectus sit amet est placerat in egestas erat. Risus
            sed vulputate odio ut enim. Tellus molestie nunc non blandit massa enim nec. Lectus sit
            amet est placerat in egestas erat. Sapien faucibus et molestie ac. Tincidunt arcu non
            sodales neque sodales ut etiam sit.
          </StyledP>
          <StyledP>
            Aliquam sem fringilla ut morbi tincidunt augue interdum. Ultricies tristique nulla
            aliquet enim tortor. Dolor sit amet consectetur adipiscing. Erat velit scelerisque in
            dictum non consectetur. Massa ultricies mi quis hendrerit. Sit amet purus gravida quis
            blandit turpis cursus in.
          </StyledP>
          <StyledP>
            Urna cursus eget nunc scelerisque viverra mauris in. Tristique senectus et netus et
            malesuada fames. Nulla pellentesque dignissim enim sit amet venenatis urna cursus eget.
            Et magnis dis parturient montes nascetur ridiculus mus mauris vitae.
          </StyledP>
          <LogosImage src={logosImage} />
        </RightContent>
      </Container>
      <CallToActionSection />
    </PageLayout>
  );
};
