import backgroundImage from 'assets/about/background.jpg';
import photoImage from 'assets/about/photo.jpg';
import { ReactComponent as ClockSvg } from 'assets/UI/clock.svg';
import { Caption } from 'Atoms/Caption';
import { Icon } from 'Atoms/Icon';
import { MoreLink } from 'Atoms/links/MoreLink';
import { H1, P } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    flex-direction: column;
  }
`;

const tabletWidth = '80%';
const mobileWidth = '95%';

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  margin-right: 50px;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    order: 1;
    width: ${tabletWidth};
    margin: 0 auto;
    align-items: center;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: ${mobileWidth};
  }
`;

const Title = styled(H1)`
  text-align: left;
  margin: 20px 0;
  font-size: 38px;
  max-width: 365px;
  line-height: 45px;
  margin: 10px 0 0;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    max-width: 100%;
    width: ${tabletWidth};
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    font-size: 30px;
    width: ${mobileWidth};
  }
`;

const StyledCaption = styled(Caption)`
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: ${tabletWidth};
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: ${mobileWidth};
  }
`;

const StyledMoreLink = styled(MoreLink)`
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: ${tabletWidth};
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: ${mobileWidth};
  }
`;

const RightSection = styled.div`
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    order: 2;
    margin-top: 150px;
    display: flex;
    justify-content: center;
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    margin-top: 70px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
`;

const ImageBox = styled.div`
  width: 500px;
  height: 500px;
  box-shadow: 0px 0px 7px 0px rgba(0, 0, 0, 0.75);
  background-size: cover;

  @media (max-width: 1150px) {
    width: 420px;
    height: 420px;
  }
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    width: 400px;
    height: 400px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 300px;
    height: 300px;
  }
`;

const ImageBackground = styled(ImageBox)`
  position: absolute;
  top: -25px;
  right: -25px;
  background-image: url(${backgroundImage});
  @media (max-width: 1150px) {
    top: -20px;
    right: -20px;
  }

  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    top: -10px;
    right: -10px;
  }
`;

const Image = styled(ImageBox)`
  position: relative;
  z-index: 1;
  background-image: url(${photoImage});
`;

const Description = styled(P)`
  margin: 15px 0;
  text-align: left;
  max-width: 485px;
  line-height: 26px;

  @media (max-width: ${props => props.theme.breakpoints.m}) {
    max-width: ${tabletWidth};
  }
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    max-width: ${mobileWidth};
  }
`;

const Features = styled.div`
  display: flex;
  border-top: 1px solid ${props => props.theme.colors.separator.light};
  margin-top: 50px;

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
    width: 100%;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 10px 0 0;

  &:not(:last-child) {
    border-right: 1px solid ${props => props.theme.colors.separator.light};
  }

  &:not(:first-child) {
    padding-left: 15px;
  }

  @media (max-width: ${props => props.theme.breakpoints.s}) {
    && {
      border: none;
      padding: 30px 0 0 0;
      justify-content: center;

      ${P} {
        width: 175px;
      }
    }
  }
`;

const StyledIcon = styled(Icon)`
  width: 36px;
  height: 36px;
  fill: ${props => props.theme.colors.accents.primary};
  margin-right: 15px;
`;

interface Props {
  className?: string;
}

export const AboutSection: FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <LeftSection>
        <StyledCaption content="About Nutrition" lineLeft size="normal" lineWidth="30px" />
        <Title font="Prata" color="secondaryAccent">
          Welcome To Health Care Nutrition
        </Title>
        <Description font="Lato" color="light">
          We have been the most trusted “Health care Nutrition” manual for 25 years, and We are
          proud of our rich history of providing evidence based nutrition resources from Registered
          Dietitian Nutritionists. We emerged to maintain our reputation in a society which took a
          long time to be what today we are! NGO for ruler people.
        </Description>
        <StyledMoreLink to="/">More About</StyledMoreLink>
        <Features>
          <Feature>
            <StyledIcon svgComponent={ClockSvg} />
            <P size="feature" weight="600" color="secondaryAccent">
              Ontime at Services
            </P>
          </Feature>
          <Feature>
            <StyledIcon svgComponent={ClockSvg} />
            <P size="feature" weight="600" color="secondaryAccent">
              24/7 Help Services
            </P>
          </Feature>
          <Feature>
            <StyledIcon svgComponent={ClockSvg} />
            <P size="feature" weight="600" color="secondaryAccent">
              Verified Professionals
            </P>
          </Feature>
        </Features>
      </LeftSection>
      <RightSection>
        <ImageWrapper>
          <ImageBackground />
          <Image />
        </ImageWrapper>
      </RightSection>
    </Container>
  );
};
