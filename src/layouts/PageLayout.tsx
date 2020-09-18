import HeroImage from 'assets/hero.jpg';
import { H1 } from 'Atoms/text';
import React, { FC } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeroWrapper = styled.div`
  height: 250px;
  background: url(${HeroImage});
  background-size: cover;
  @media (max-width: ${props => props.theme.breakpoints.m}) {
    height: 150px;
  }
  @media (max-width: ${props => props.theme.breakpoints.sm}) {
    height: 80px;
  }
`;

const Hero = styled.div`
  height: 100%;
  width: 100%;
  background: rgba(17, 24, 30, 0.81);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroTitle = styled(H1)`
  margin: 0;
  && {
    font-size: 50px;
    @media (max-width: ${props => props.theme.breakpoints.sm}) {
      font-size: 30px;
    }
  }
`;
interface Props {
  title?: string;
}

export const PageLayout: FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <HeroWrapper>
        <Hero>
          {title && (
            <HeroTitle color="secondary" font="Spectral">
              {title}
            </HeroTitle>
          )}
        </Hero>
      </HeroWrapper>
      {children}
    </Container>
  );
};
