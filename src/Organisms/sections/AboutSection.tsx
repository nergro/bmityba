import { Caption } from 'Atoms/Caption';
import React, { FC } from 'react';
import styled from 'styled-components/macro';
import { H1, P } from 'Atoms/text';
import { MoreLink } from 'Atoms/links/MoreLink';

const Container = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled(H1)`
  text-align: left;
  margin: 20px 0;
  font-size: 38px;
  max-width: 330px;
  line-height: 45px;
  margin: 0;
`;

const RightSection = styled.div``;

const Image = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
`;

const Description = styled(P)`
  margin: 15px 0;
  text-align: left;
`;

interface Props {
  className?: string;
}

export const AboutSection: FC<Props> = ({ className }) => {
  return (
    <Container className={className}>
      <LeftSection>
        <Caption content="About Nutrition" lineLeft size="normal" lineWidth="30px" />
        <Title color="secondaryAccent">Welcome To Health Care Nutrition</Title>
        <Description font="Lato" color="light">
          We have been the most trusted “Health care Nutrition” manual for 25 years, and We are
          proud of our rich history of providing evidence based nutrition resources from Registered
          Dietitian Nutritionists. We emerged to maintain our reputation in a society which took a
          long time to be what today we are! NGO for ruler people.
        </Description>
        <MoreLink to="/">More About</MoreLink>
      </LeftSection>
      <RightSection>
        <Image />
      </RightSection>
    </Container>
  );
};
